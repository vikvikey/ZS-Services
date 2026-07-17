export const DEFAULT_SITE_URL = "https://www.zs-services.fr";

export function getSiteUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || DEFAULT_SITE_URL;
}
