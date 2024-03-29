import Layout from "@components/layout";
import { getData } from "@lib/data";
import { GetStaticProps } from "next";
import Head from "next/head";

//full path data/something-about-me.md
const id = "something-about-me";

export default function About({
  data,
}: {
  data: {
    title: string;
    contentHtml: string;
  };
}) {
  return (
    <Layout>
      <Head>
        <title>{data.title}</title>
      </Head>
      <article>
        <h1 className="text-2xl font-extrabold tracking-tighter my-4 text-slate-900 dark:text-slate-50">
          {data.title}
        </h1>
        <div
          className="prose prose-stone prose-lg dark:prose-invert text-slate-800 dark:text-slate-400"
          dangerouslySetInnerHTML={{ __html: data.contentHtml }}
        />
      </article>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getData(id);
  return {
    props: { data },
  };
};
