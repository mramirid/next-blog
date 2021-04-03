import { FC } from 'react'

import classes from './all-posts.module.css'
import Post from '../../types/post'
import PostsGrid from './posts-grid'

interface AllPostsProps {
  posts: Post[]
}

const AllPosts: FC<AllPostsProps> = ({ posts }) => (
  <section className={classes.posts}>
    <h1>All Posts</h1>
    <PostsGrid posts={posts} />
  </section>
)

export default AllPosts
