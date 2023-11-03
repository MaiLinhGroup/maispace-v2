import Head from "next/head";
import Link from "next/link";

const name = "Moin, I'm Mai Linh!";
export const siteTitle = "MaiSpace";

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <div className="max-w-xl px-4 mt-12 mx-auto mb-24">
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
      <header className="flex flex-col items-center">
        {home ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/profile.jpg"
              className="rounded-full"
              height={144}
              width={144}
              alt={name}
            />
            <h1 className="text-4xl font-bold tracking-tighter my-4">{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/profile.jpg"
                className="rounded-full"
                height={108}
                width={108}
                alt={name}
              />
            </Link>
            <h2 className="text-2xl font-bold tracking-tighter my-4">
              <Link href="/" className="text-inherit">
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className="mt-12">
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            ← Back to home
          </Link>
        </div>
      )}
      <footer className="mt-8 py-4">
        <div className="container mx-auto flex justify-center">
          MaiSpace &copy; {new Date().getFullYear()} by MaiLinhGroup is licensed
          under&nbsp;
          <a
            href="https://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1"
            className="text-blue-600 hover:text-blue-800"
          >
            CC BY-SA 4.0
          </a>
        </div>
      </footer>
    </div>
  );
}
