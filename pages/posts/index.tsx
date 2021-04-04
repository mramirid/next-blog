import { GetStaticProps } from 'next'
import Head from 'next/head'
import { FC } from 'react'

import AllPosts from '../../components/posts/all-posts'
import { getAllPosts } from '../../lib/posts-data'
import Post from '../../types/post'

interface AllPostsPageProps {
  allPosts: Post[]
}

const AllPostsPage: FC<AllPostsPageProps> = ({ allPosts }) => (
  <>
    <Head>
      <title>All Posts</title>
      <meta
        name="description"
        content="A list of all programming-related turtorials and posts!"
      />
    </Head>
    <AllPosts posts={allPosts} />
  </>
)

export const getStaticProps: GetStaticProps<AllPostsPageProps> = async () => {
  const allPosts = getAllPosts()
  return { props: { allPosts } }
}

export default AllPostsPage
