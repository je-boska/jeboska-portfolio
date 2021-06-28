import { Box, Heading } from '@chakra-ui/react'
import React from 'react'

interface ProjectTextProps {
  title: string
  body: string
  isLargerThan650: boolean
  first: boolean
}

const ProjectText: React.FC<ProjectTextProps> = ({
  title,
  body,
  isLargerThan650,
  first,
}) => {
  // css for BlockContent component
  const css = `
.project-text h1 {
    padding-bottom: ${isLargerThan650 ? '100px' : '100px'};
    line-height: 1;
    max-width: 500px;
}
.project-text p {
    font-size: 1.05rem;
    padding-bottom: 20px;
    max-width: 500px;    
    opacity: 0.8;
}
@media only screen and (min-width: 768px) {
  .project-text p {
    font-size: 1.2rem;
  }
}
@media only screen and (min-width: 992px) {
  .project-text p {
    font-size: 1.5rem;
  }
}
`

  return (
    <>
      <Box
        id={first ? 'first-project-text' : undefined}
        zIndex='-1'
        width='100%'
        padding={6}
        margin='0 auto'
        marginTop='150px'
        justify='center'
        position='sticky'
        top={2}
        align='center'>
        <style>{css}</style>
        <Box
          className='project-text to-fade'
          opacity='0'
          transition='0.4s opacity linear'>
          <Heading
            as='h1'
            letterSpacing='1.2rem'
            fontSize={{ base: '1rem', md: '1.4rem', lg: '1.7rem' }}>
            {title.toUpperCase()}
          </Heading>
          {/* <BlockContent blocks={body} /> */}
        </Box>
      </Box>
    </>
  )
}

export default ProjectText
