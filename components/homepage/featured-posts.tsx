import { FC } from 'react'

import Post from '../../types/post'
import PostsGrid from '../posts/posts-grid'
import classes from './featured-posts.module.css'

interface FeaturedPostsProps {
  posts: Post[]
}

const FeaturedPosts: FC<FeaturedPostsProps> = ({ posts }) => (
  <section className={classes.latest}>
    <h2>Featured Posts</h2>
    <PostsGrid posts={posts} />
  </section>
)

export default FeaturedPosts
