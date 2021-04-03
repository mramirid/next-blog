import { ParsedUrlQuery } from 'querystring'

import { GetStaticPaths, GetStaticProps } from 'next'
import { FC } from 'react'

import PostContent from '../../components/posts/post-detail/post-content'
import { getPostData, getPostFileNames } from '../../lib/posts-util'
import Post from '../../types/post'

interface PostDetailPageProps {
  post: Post
}

const PostDetailPage: FC<PostDetailPageProps> = ({ post }) => (
  <PostContent post={post} />
)

interface PostDetailPageParams extends ParsedUrlQuery {
  slug: string
}

export const getStaticPaths: GetStaticPaths<PostDetailPageParams> = async () => {
  const postFileNames = getPostFileNames()
  return {
    fallback: false,
    paths: postFileNames.map((fileName) => ({
      params: { slug: fileName.replace(/\.md$/, '') },
    })),
  }
}

export const getStaticProps: GetStaticProps<
  PostDetailPageProps,
  PostDetailPageParams
> = async ({ params }) => {
  try {
    const postSlug = params?.slug
    if (postSlug === undefined) {
      throw new Error('Slug is undefined')
    }
    const post = getPostData(postSlug)
    return {
      props: { post },
      revalidate: 600,
    }
  } catch (_) {
    return { notFound: true }
  }
}

export default PostDetailPage
