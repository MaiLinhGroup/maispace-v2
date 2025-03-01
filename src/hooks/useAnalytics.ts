// src/hooks/useAnalytics.ts
import { useRouter } from "next/router";
import { useEffect } from "react";

interface GoatCounter {
  count: (params: { path: string }) => void;
}

declare global {
  interface Window {
    goatcounter?: GoatCounter;
  }
}

export function useAnalyticsInstance() {
  const router = useRouter();
  useEffect(() => {
    const onRouteChangeComplete = () => {
      if (window.goatcounter === undefined) return;
      window.goatcounter.count({
        path: location.pathname + location.search + location.hash,
      });
    };

    router.events.on("routeChangeComplete", onRouteChangeComplete);

    return () => {
      router.events.off("routeChangeComplete", onRouteChangeComplete);
    };
  }, [router.events]);
}
