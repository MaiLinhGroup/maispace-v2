import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header({ home }: { home?: boolean }) {
  const name = "Moin, I'm Mai Linh!";
  const pathname = usePathname();
  return (
    <header className="flex flex-col items-center">
      <nav className="hover:underline underline-offset-auto text-blue-600 hover:text-blue-800 text-xl font-semibold mb-2">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="w-full md:block md:w-auto" id="navbar-default">
            <ul className="inline-flex items-center justify-between space-x-4">
              <li>
                <Link
                  className={`link ${pathname === "/" ? "active" : ""}`}
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={`link ${pathname === "/posts" ? "active" : ""}`}
                  href="/posts"
                >
                  Posts
                </Link>
              </li>
              <li>
                <Link
                  className={`link ${pathname === "/about" ? "active" : ""}`}
                  href="/about"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="my-4 flex flex-col items-center">
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
            <h1 className="text-4xl font-bold tracking-tighter">{name}</h1>
          </>
        ) : (
          <>
            <Link href="/" title="Back to home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/profile.jpg"
                className="rounded-full"
                height={108}
                width={108}
                alt={name}
              />
            </Link>
          </>
        )}{" "}
      </div>
    </header>
  );
}
