/* eslint-disable react/no-children-prop */

import Image from 'next/image'
import { FC } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import ReactMarkdown from 'react-markdown'
import Post from '../../../types/post'

import classes from './post-content.module.css'
import PostHeader from './post-header'

/*
 * Next.js will throw errors because we're rendering an image div inside of a paragraph
 * By default every line in markdown is rendered as p by react-markdown
 */
// const customRenderers = {
//   image: (image: any) => (
//     <Image src={image.src} alt={image.alt} width={600} height={300} />
//   ),
// }

const customRenderers = {
  paragraph: (paragraph: any) => {
    if (paragraph.node.children[0].type === 'image') {
      const image = paragraph.node.children[0]
      return (
        <div className={classes.image}>
          <Image src={image.url} alt={image.alt} width={600} height={300} />
        </div>
      )
    }
    return <p>{paragraph.children}</p>
  },
  code: (code: any) => (
    <SyntaxHighlighter
      style={atomDark}
      language={code.language}
      children={code.value}
    />
  ),
}

interface PostContentProps {
  post: Post
}

const PostContent: FC<PostContentProps> = ({ post }) => (
  <article className={classes.content}>
    <PostHeader
      title={post.title}
      imagePath={`/images/posts/${post.slug}/${post.imageName}`}
    />
    <ReactMarkdown renderers={customRenderers}>{post.content}</ReactMarkdown>
  </article>
)

export default PostContent
