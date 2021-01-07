import React from 'react'
import BlockContent from '@sanity/block-content-to-react'

const Project = ({ project }) => {
  const { title, body, videoUrl } = project

  return (
    <div className='project'>
      <h2>{title}</h2>
      <BlockContent blocks={body} />
      <video src={videoUrl} controls />
    </div>
  )
}

export default Project
