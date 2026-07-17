"use client";

import { useEffect } from "react";

/** In-app browsers (Telegram, Instagram, etc.) use a floating URL bar that leaves gaps on the sides. */
const IN_APP_BROWSER_UA = /Telegram|Instagram|FBAN|FBAV|Line\/|Twitter/i;

export function InAppBrowserInsets() {
  useEffect(() => {
    if (IN_APP_BROWSER_UA.test(navigator.userAgent)) {
      document.documentElement.dataset.inAppBrowser = "true";
    }
  }, []);

  return null;
}
