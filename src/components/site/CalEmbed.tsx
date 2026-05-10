"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

export function CalEmbed({
  calLink = "vallonlabs",
  namespace = "discovery",
}: {
  calLink?: string;
  namespace?: string;
}) {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace });
      cal("ui", {
        theme: "dark",
        hideEventTypeDetails: false,
        layout: "month_view",
        cssVarsPerTheme: {
          dark: {
            "cal-brand": "#CCD8C4",
            "cal-bg": "#32363A",
            "cal-bg-emphasis": "#3A3F43",
            "cal-bg-muted": "#32363A",
            "cal-text": "#F4F2ED",
            "cal-text-emphasis": "#F4F2ED",
            "cal-text-muted": "rgba(244,242,237,0.6)",
            "cal-border": "rgba(255,255,255,0.12)",
            "cal-border-subtle": "rgba(255,255,255,0.08)",
          },
        },
      });
    })();
  }, [namespace]);

  return (
    <Cal
      namespace={namespace}
      calLink={calLink}
      style={{ width: "100%", height: "100%", minHeight: 680, overflow: "scroll" }}
      config={{ layout: "month_view", theme: "dark" }}
    />
  );
}
