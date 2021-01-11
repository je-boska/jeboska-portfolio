import { Box, Heading } from '@chakra-ui/react'
import BlockContent from '@sanity/block-content-to-react'
import React from 'react'

interface ProjectTextProps {
  title: string
  body: string
}

const css = `
.title {
    padding-bottom: 40px;
    line-height: 1;
}
.project-text p {
    font-size: 1rem;
    padding-bottom: 20px;
    max-width: 500px;
    opacity: 0.8;
}
@media only screen and (min-width: 650px) {
  .project-text p {
    font-size: 1.5rem;
  }
}
`

const ProjectText: React.FC<ProjectTextProps> = ({ title, body }) => {
  return (
    <>
      <style>{css}</style>
      <Box
        className='project-text to-fade'
        opacity='0'
        transition='0.4s opacity linear'>
        <Heading
          className='title'
          fontSize={{ base: '3rem', md: '4rem', lg: '5rem' }}>
          {title}
        </Heading>
        <BlockContent blocks={body} />
      </Box>
    </>
  )
}

export default ProjectText
