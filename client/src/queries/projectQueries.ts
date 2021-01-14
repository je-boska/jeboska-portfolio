import sanityClient from '../client'
import groq from 'groq'

export const getProjects = async () => {
  const projects = await sanityClient.fetch(
    groq`*[_type == "project"] | order(order asc) {
      _id,
      title,
      "slug": slug.current,
      body,
      "videoUrl": video.asset->url,
      "poster": poster.asset->url,
    }
    `
  )

  return projects
}
