import fs from 'fs'
import path from 'path'

import matter from 'gray-matter'
import Post, { PostMetadata } from '../types/post'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getPostFileNames() {
  return fs.readdirSync(postsDirectory)
}

/**
 * @param identifier The 'slug-name' or 'file-name.md'
 * @returns Post object
 */
export function getPostData(identifier: string) {
  const postSlug = identifier.replace(/\.md$/, '')
  const filePath = path.join(postsDirectory, `${postSlug}.md`)
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContent)
  const post: Post = {
    slug: postSlug,
    ...(data as PostMetadata),
    content,
  }
  return post
}

export function getAllPosts() {
  const fileNames = getPostFileNames()
  const posts = fileNames.map(getPostData)
  const sortedPosts = posts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  )
  return sortedPosts
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts()
  const featuredPosts = allPosts.filter((post) => post.isFeatured)
  return featuredPosts
}
