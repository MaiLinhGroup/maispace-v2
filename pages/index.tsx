import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="text-lg">
        <p className="text-slate-800 dark:text-slate-400">
          This is MaiSpace, where technology and creativity converge!
          <br />
          <br />
          Explore my diverse portfolio and the musings shared on my personal
          blog.
          <br />
          <br />
          I&#39;m looking forward to connecting with like-minded individuals.
        </p>
      </section>
    </Layout>
  );
}
