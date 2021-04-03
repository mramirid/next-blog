import { FC } from 'react'

import FeaturedPosts from '../components/homepage/featured-posts'
import Hero from '../components/homepage/hero'
import dummyPosts from '../data/dummies/posts'

const HomePage: FC = () => (
  <>
    <Hero />
    <FeaturedPosts posts={dummyPosts} />
  </>
)

export default HomePage
