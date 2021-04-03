import { FC } from 'react'

import FeaturedPosts from '../components/homepage/featured-posts'
import Hero from '../components/homepage/hero'
import Post from '../types/post'

const dummyPosts: Post[] = [
  {
    slug: 'getting-started-with-nextjs1',
    title: 'Getting Started with Next.js',
    exceprt:
      'Next.js is the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
    imageName: 'getting-started-nextjs.png',
    timestamp: new Date().getTime(),
  },
  {
    slug: 'getting-started-with-nextjs2',
    title: 'Getting Started with Next.js',
    exceprt:
      'Next.js is the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
    imageName: 'getting-started-nextjs.png',
    timestamp: new Date().getTime(),
  },
  {
    slug: 'getting-started-with-nextjs3',
    title: 'Getting Started with Next.js',
    exceprt:
      'Next.js is the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
    imageName: 'getting-started-nextjs.png',
    timestamp: new Date().getTime(),
  },
  {
    slug: 'getting-started-with-nextjs4',
    title: 'Getting Started with Next.js',
    exceprt:
      'Next.js is the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
    imageName: 'getting-started-nextjs.png',
    timestamp: new Date().getTime(),
  },
]

const HomePage: FC = () => (
  <>
    <Hero />
    <FeaturedPosts posts={dummyPosts} />
  </>
)

export default HomePage
