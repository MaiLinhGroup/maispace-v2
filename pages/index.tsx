import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { GetStaticProps } from "next";

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="text-lg">
        <p>
          This is MaiSpace, where technology and creativity converge!
          <br /> I&#39;m excited to have you here on my personal blog and
          portfolio website.
          <br />
          <br /> As a freelance backend developer, I&#39;m passionate about
          crafting digital solutions that drive innovation and make a
          difference. Here, you&#39;ll get a glimpse into my world of coding,
          problem-solving, and the projects that have shaped my journey.
          <br />
          <br /> I draw inspiration for my blog from a variety of sources and
          don&#39;t limit it to technical topics. If you&#39;re interested in
          technology, creativity, or simply looking to connect for professional
          purposes, feel free to visit my{" "}
          <a
            className="hover:underline underline-offset-auto text-blue-600 hover:text-blue-800"
            href="https://www.linkedin.com/in/maithing"
            title="Visit Mai Linh's LinkedIn profile"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            LinkedIn
          </a>{" "}
          and get in touch with me. I&#39;m looking forward to sharing my
          insights and connecting with like-minded individuals.
        </p>
      </section>
      <section className="text-lg padding-top">
        <h2 className="text-xl font-semibold my-4">Blog</h2>
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
              <small className="text-neutral-500">
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
