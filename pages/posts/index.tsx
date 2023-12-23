import Layout from "@components/layout";
import { GetStaticProps } from "next";
import Date from "@components/date";
import Link from "next/link";
import { getSortedPostsData } from "@lib/data";

export default function PostList({
  allPostsData,
}: {
  allPostsData: { date: string; title: string; id: string }[];
}) {
  return (
    <Layout>
      <h1 className="text-2xl font-extrabold tracking-tighter my-4 text-slate-900 dark:text-slate-50">
        Posts, tutorials, documentation, and everything else.
      </h1>
      <section className="text-lg padding-top">
        <ul className="list-none">
          {allPostsData.map(({ id, date, title }) => (
            <li className="mb-5" key={id}>
              <Link
                href={`/posts/${id}`}
                className="hover:underline underline-offset-auto text-blue-600 hover:text-blue-800"
              >
                {title}
              </Link>
              <br />
              <small className="text-slate-800 dark:text-slate-400">
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
