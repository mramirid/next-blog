import { FC } from 'react'

import AllPosts from '../../components/posts/all-posts'
import dummyPosts from '../../data/dummies/posts'

const AllPostsPage: FC = () => <AllPosts posts={dummyPosts} />

export default AllPostsPage
