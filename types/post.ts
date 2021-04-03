export interface PostMetadata {
  title: string
  date: string
  imageName: string
  excerpt: string
  isFeatured: boolean
}

export default interface Post extends PostMetadata {
  slug: string
  content: string
}
