import "../styles/globals.css";
import { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Script from "next/script";
import { useAnalyticsInstance } from "src/hooks/useAnalytics";

export default function App({ Component, pageProps }: AppProps) {
  useAnalyticsInstance();
  return (
    <ThemeProvider attribute="class">
      <Script 
        data-goatcounter={`https://${process.env.NEXT_PUBLIC_GOATCOUNTER_CODE}.goatcounter.com/count`}
        async src="//gc.zgo.at/count.js" 
      />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
