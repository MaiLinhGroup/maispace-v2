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
          This is <strong>MaiSpace</strong>, my personal blog where I&#39;m sharing my musings on various topics covering everything I encounter while navigating through life.
          <br />
          <br />
          I also use it to practice and to develope a habit of writing and to document my journey as a software engineer.
          <br />
          <br />
          Thank you for visiting and I hope you find something insightful!
        </p>
      </section>
    </Layout>
  );
}
