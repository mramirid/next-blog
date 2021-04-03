import { FC } from 'react'

import classes from './posts-grid.module.css'
import Post from '../../types/post'
import PostsItem from './post-item'

interface PostsGridProps {
  posts: Post[]
}

const PostsGrid: FC<PostsGridProps> = ({ posts }) => (
  <ul className={classes.grid}>
    {posts.map((post) => (
      <PostsItem key={post.slug} post={post} />
    ))}
  </ul>
)

export default PostsGrid
