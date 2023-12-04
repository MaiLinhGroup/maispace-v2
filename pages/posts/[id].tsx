import Layout from "../../components/layout";
import Head from "next/head";
import Date from "../../components/date";
import { GetStaticProps, GetStaticPaths } from "next";
import { getPostData, getAllPostIds } from "@lib/data";

export default function Post({
  postData,
}: {
  postData: {
    title: string;
    date: string;
    contentHtml: string;
  };
}) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className="text-2xl font-extrabold tracking-tighter my-4 text-slate-900 dark:text-slate-50">
          {postData.title}
        </h1>
        <div className="text-slate-800 dark:text-slate-400">
          <Date dateString={postData.date} />
        </div>
        <div
          className="prose prose-stone prose-lg dark:prose-invert text-slate-800 dark:text-slate-400"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.id as string);
  return {
    props: {
      postData,
    },
  };
};
