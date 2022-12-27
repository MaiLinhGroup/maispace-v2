import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { GetStaticProps } from 'next'

export default function Home({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="text-lg">
        <p>Moin and welcome to MaiSpace, my personal blog and portfolio website.</p>
        <p>
          I&#39;m Mai Linh and I&#39;m a software engineer.
        </p>
      </section>
      <section className="text-lg padding-top">
        <h2 className="text-xl font-semibold my-4">Blog</h2>
        <ul className="list-none">
          {allPostsData.map(({ id, date, title }) => (
            <li className="mb-5" key={id}>
              <Link href={`/posts/${id}`} className="hover:underline underline-offset-auto text-blue-600 hover:text-blue-800">{title}</Link>
              <br />
              <small className="text-neutral-500">
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}