import { Box, Heading } from '@chakra-ui/react'
import BlockContent from '@sanity/block-content-to-react'
import React from 'react'

interface ProjectTextProps {
  title: string
  body: string
}

const ProjectText: React.FC<ProjectTextProps> = ({ title, body }) => {
  const css = `
        .title {
            padding-bottom: 30px;
            line-height: 1;
        }
        .project-text p {
            padding-bottom: 20px;
            max-width: 500px;
            opacity: 0.8;
        }
    `

  return (
    <>
      <style>{css}</style>
      <Box
        className='project-text to-fade'
        opacity='0'
        transition='0.4s opacity linear'
      >
        <Heading className='title' size='xl'>
          {title}
        </Heading>
        <BlockContent blocks={body} />
      </Box>
    </>
  )
}

export default ProjectText
