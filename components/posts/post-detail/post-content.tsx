import { FC } from 'react'
import ReactMarkdown from 'react-markdown'
import Post from '../../../types/post'

import classes from './post-content.module.css'
import PostHeader from './post-header'

interface PostContentProps {
  post: Post
}

const PostContent: FC<PostContentProps> = ({ post }) => (
  <article className={classes.content}>
    <PostHeader
      title={post.title}
      imagePath={`/images/posts/${post.slug}/${post.imageName}`}
    />
    <ReactMarkdown>{post.content}</ReactMarkdown>
  </article>
)

export default PostContent
