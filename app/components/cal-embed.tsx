"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    Cal?: {
      (...args: unknown[]): void;
      loaded?: boolean;
      ns?: Record<string, (...args: unknown[]) => void>;
      q?: unknown[];
    };
  }
}

const NAMESPACE = "appel-de-decouverte";
const CAL_LINK = "mc.maxence/appel-de-decouverte";

export function CalEmbed() {
  useEffect(() => {
    (function (C: Window, A: string, L: string) {
      const p = function (
        a: { q?: unknown[] },
        ar: IArguments | unknown[]
      ) {
        a.q = a.q || [];
        a.q.push(ar);
      };
      const d = C.document;
      C.Cal =
        C.Cal ||
        function (...args: unknown[]) {
          const cal = C.Cal as NonNullable<Window["Cal"]>;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).setAttribute(
              "src",
              A
            );
            cal.loaded = true;
          }
          if (args[0] === L) {
            const namespace = args[1];
            const api = function (...inner: unknown[]) {
              p(api as unknown as { q?: unknown[] }, inner);
            };
            (api as unknown as { q: unknown[] }).q = [];
            if (typeof namespace === "string") {
              cal.ns![namespace] =
                cal.ns![namespace] ||
                (api as unknown as (...a: unknown[]) => void);
              p(
                cal.ns![namespace] as unknown as { q?: unknown[] },
                args
              );
              p(cal as unknown as { q?: unknown[] }, [
                "initNamespace",
                namespace,
              ]);
            } else {
              p(cal as unknown as { q?: unknown[] }, args);
            }
            return;
          }
          p(cal as unknown as { q?: unknown[] }, args);
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    window.Cal!("init", NAMESPACE, { origin: "https://app.cal.com" });

    window.Cal!.ns![NAMESPACE]("inline", {
      elementOrSelector: "#my-cal-inline-appel-de-decouverte",
      config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
      calLink: CAL_LINK,
    });

    window.Cal!.ns![NAMESPACE]("ui", {
      hideEventTypeDetails: false,
      layout: "month_view",
      cssVarsPerTheme: {
        light: {
          "cal-brand": "#181818",
          "cal-bg": "#ebe9df",
          "cal-bg-emphasis": "#e2e0d6",
          "cal-text": "#181818",
        },
      },
    });
  }, []);

  return (
    <div
      id="my-cal-inline-appel-de-decouverte"
      style={{ width: "100%", minHeight: 700 }}
    />
  );
}
