"use client";

import { useCallback, useMemo, useState } from "react";
import { siteConfig } from "@/site.config";
import { FadeIn } from "@/components/motion/FadeIn";

type FormStatus = "idle" | "submitting" | "success" | "error";

function getFormspreeUrl(): string | null {
  const id = process.env.NEXT_PUBLIC_FORMSPREE_ID;
  if (!id || id === "your_form_id_here") return null;
  return `https://formspree.io/f/${id}`;
}

export function LeadFormSection() {
  const t = siteConfig.strings.leadForm;
  const action = useMemo(() => getFormspreeUrl(), []);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!action) {
        setStatus("error");
        setErrorMessage(t.errorNotConfigured);
        return;
      }
      setStatus("submitting");
      setErrorMessage(null);
      const form = e.currentTarget;
      const data = new FormData(form);
      try {
        const res = await fetch(action, {
          method: "POST",
          body: data,
          headers: { Accept: "application/json" },
        });
        if (res.ok) {
          setStatus("success");
          form.reset();
        } else {
          const json = (await res.json().catch(() => null)) as { error?: string } | null;
          setStatus("error");
          setErrorMessage(json?.error ?? t.errorSubmit);
        }
      } catch {
        setStatus("error");
        setErrorMessage(t.errorNetwork);
      }
    },
    [action, t.errorNotConfigured, t.errorSubmit, t.errorNetwork],
  );

  return (
    <section id="lead-form" className="scroll-mt-20 bg-muted/40 py-12 sm:py-16">
      <div className="mx-auto max-w-xl px-4 sm:px-6">
        <FadeIn>
          <h2 className="font-heading text-2xl font-bold text-neutral-900 sm:text-3xl">
            {t.titleBeforeAccent} <span className="brush-underline">{t.titleAccent}</span>
          </h2>
          <p className="mt-3 text-neutral-600">{t.subtitle}</p>
        </FadeIn>

        {status === "success" ? (
          <FadeIn className="mt-8 rounded-xl border border-success/30 bg-success/10 p-6 text-center shadow-soft">
            <p className="font-heading text-lg font-semibold text-neutral-900">{t.successTitle}</p>
            <p className="mt-2 text-neutral-600">{t.successBody}</p>
          </FadeIn>
        ) : (
          <FadeIn delay={0.06} className="mt-8">
            <form
              onSubmit={onSubmit}
              className="rounded-xl border border-neutral-200 bg-surface p-6 shadow-soft-lg"
              noValidate
            >
              <div className="space-y-4">
                <label className="block">
                  <span className="text-sm font-medium text-neutral-800">{t.labelName}</span>
                  <input
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="mt-1.5 w-full rounded-xl border border-neutral-200 px-4 py-3 text-base text-neutral-900 shadow-sm outline-none ring-primary/0 transition focus:border-primary/40 focus:ring-4 focus:ring-primary/15"
                    placeholder={t.placeholderName}
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-neutral-800">{t.labelPhone}</span>
                  <input
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    inputMode="tel"
                    className="mt-1.5 w-full rounded-xl border border-neutral-200 px-4 py-3 text-base text-neutral-900 shadow-sm outline-none ring-primary/0 transition focus:border-primary/40 focus:ring-4 focus:ring-primary/15"
                    placeholder={t.placeholderPhone}
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-neutral-800">
                    {t.labelComment}{" "}
                    <span className="font-normal text-neutral-500">{t.labelCommentOptional}</span>
                  </span>
                  <textarea
                    name="message"
                    rows={3}
                    className="mt-1.5 w-full resize-y rounded-xl border border-neutral-200 px-4 py-3 text-base text-neutral-900 shadow-sm outline-none ring-primary/0 transition focus:border-primary/40 focus:ring-4 focus:ring-primary/15"
                    placeholder={t.placeholderMessage}
                  />
                </label>
              </div>
              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden />
              {status === "error" && errorMessage ? (
                <p className="mt-4 rounded-lg bg-danger/10 px-3 py-2 text-sm text-danger" role="alert">
                  {errorMessage}
                </p>
              ) : null}
              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-6 w-full min-h-[52px] rounded-xl bg-primary font-semibold text-white shadow-soft transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "submitting" ? t.submitSending : t.submitIdle}
              </button>
            </form>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
