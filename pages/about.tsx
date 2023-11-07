import Layout from "@components/layout";
import { getData } from "@lib/data";
import { GetStaticProps } from "next";
import Head from "next/head";

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
        <h1 className="text-2xl font-extrabold tracking-tighter my-4">
          {data.title}
        </h1>
        <div
          className="prose prose-stone prose-lg"
          dangerouslySetInnerHTML={{ __html: data.contentHtml }}
        />
      </article>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getData("about");
  return {
    props: { data },
  };
};
