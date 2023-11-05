import Head from "next/head";
import Header from "./header";
import Footer from "./footer";
import { useEffect, useState } from "react";

export const siteTitle = "MaiSpace";

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const handleScrollToTopVisibility = () => {
      window.innerHeight > document.body.clientHeight + 100
        ? setShowButton(false)
        : setShowButton(true);
    };
    window.addEventListener("scroll", handleScrollToTopVisibility);
    return () => {
      window.removeEventListener("scroll", handleScrollToTopVisibility);
    };
  });
  return (
    <div className="max-w-xl px-4 mx-auto mb-24">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header home={home} />
      <main>{children}</main>
      {showButton && !home && (
        <div className="mt-12 flex flex-col items-center">
          <button
            className="text-blue-600 hover:text-blue-800"
            type="button"
            onClick={handleScrollToTop}
          >
            Back to top
          </button>
        </div>
      )}
      <Footer />
    </div>
  );
}

const handleScrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
