import { FC } from 'react'

import PostContent from '../../components/posts/post-detail/post-content'
import dummyPosts from '../../data/dummies/posts'

const PostDetailPage: FC = () => <PostContent post={dummyPosts[0]} />

export default PostDetailPage
