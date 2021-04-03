import Image from 'next/image'
import { FC } from 'react'

import classes from './post-header.module.css'

interface PostHeaderProps {
  title: string
  imagePath: string
}

const PostHeader: FC<PostHeaderProps> = ({ title, imagePath }) => (
  <header className={classes.header}>
    <h1>{title}</h1>
    <Image src={imagePath} alt={title} width={200} height={150} />
  </header>
)

export default PostHeader
