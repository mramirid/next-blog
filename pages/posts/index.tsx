import { GetStaticProps } from 'next'
import { FC } from 'react'

import AllPosts from '../../components/posts/all-posts'
import { getAllPosts } from '../../lib/posts-util'
import Post from '../../types/post'

interface AllPostsPageProps {
  allPosts: Post[]
}

const AllPostsPage: FC<AllPostsPageProps> = ({ allPosts }) => (
  <AllPosts posts={allPosts} />
)

export const getStaticProps: GetStaticProps<AllPostsPageProps> = async () => {
  const allPosts = getAllPosts()
  return { props: { allPosts } }
}

export default AllPostsPage
