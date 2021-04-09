import { Flex, Box, Heading } from '@chakra-ui/react'
import BlockContent from '@sanity/block-content-to-react'
import React from 'react'

interface ProjectTextProps {
  title: string
  body: string
  isLargerThan650: boolean
  first: boolean
}

// css for BlockContent component
const css = `
.project-text h1 {
    padding-bottom: 40px;
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

const ProjectText: React.FC<ProjectTextProps> = ({
  title,
  body,
  isLargerThan650,
  first,
}) => {
  return (
    <>
      <Flex
        id={first ? 'first-project-text' : undefined}
        zIndex='2'
        width={isLargerThan650 ? '50%' : '100%'}
        padding={6}
        margin={4}
        marginTop={isLargerThan650 ? '' : '150px'}
        borderTop={!isLargerThan650 ? '1px solid rgba(0, 0, 0, 0.3)' : ''}
        borderLeft={!isLargerThan650 ? '1px solid rgba(0, 0, 0, 0.3)' : ''}
        display='flex'
        justify='center'
        align='center'
      >
        <style>{css}</style>
        <Box
          className='project-text to-fade'
          opacity='0'
          transition='0.4s opacity linear'
        >
          <Heading as='h1' fontSize={{ base: '3rem', md: '4rem', lg: '5rem' }}>
            {title}
          </Heading>
          <BlockContent blocks={body} />
        </Box>
      </Flex>
    </>
  )
}

export default ProjectText
