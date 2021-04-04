import { GetStaticProps } from 'next'
import { FC } from 'react'

import FeaturedPosts from '../components/homepage/featured-posts'
import Hero from '../components/homepage/hero'
import { getFeaturedPosts } from '../lib/posts-data'
import Post from '../types/post'

interface HomePageProps {
  featuredPosts: Post[]
}

const HomePage: FC<HomePageProps> = ({ featuredPosts }) => (
  <>
    <Hero />
    <FeaturedPosts posts={featuredPosts} />
  </>
)

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const featuredPosts = getFeaturedPosts()
  return { props: { featuredPosts } }
}

export default HomePage
