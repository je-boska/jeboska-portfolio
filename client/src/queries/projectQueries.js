import sanityClient from '../client'
import groq from 'groq'

export const getProjects = async () => {
  const projects = await sanityClient.fetch(
    groq`*[_type == "project"] {
      _id,
      title,
      body,
      "videoUrl": video.asset->url
    }
    `
  )

  return projects
}
