import { useEffect, useRef } from 'react'
import { Text, Box, Flex, Heading, useMediaQuery } from '@chakra-ui/react'
import { useState } from 'react'

const Header = () => {
  const [isLargerThan650] = useMediaQuery('(min-width: 650px)')
  const svgRef = useRef<SVGSVGElement | null>(null)
  const aboutLink = useRef<HTMLParagraphElement | null>(null)
  const projectsLink = useRef<HTMLParagraphElement | null>(null)
  const scrollAnchor = useRef<HTMLDivElement | null>(null)
  const [loading, setLoading] = useState(true)
  const [showAboutLink, setShowAboutLink] = useState(false)
  const [showProjectsLink, setShowProjectsLink] = useState(false)
  const [showAbout, setShowAbout] = useState(false)

  useEffect(() => {
    const svgElem = svgRef.current

    svgElem!.addEventListener('load', () => {
      setLoading(false)
    })
    //eslint-disable-next-line
  }, [])

  useEffect(() => {
    aboutLink.current?.addEventListener('mouseenter', () => {
      setShowAboutLink(true)
    })
    aboutLink.current?.addEventListener('mouseleave', () => {
      setShowAboutLink(false)
    })
    projectsLink.current?.addEventListener('mouseenter', () => {
      setShowProjectsLink(true)
    })
    projectsLink.current?.addEventListener('mouseleave', () => {
      setShowProjectsLink(false)
    })
    return () => {}
  }, [])

  function toggleAbout() {
    setShowAbout(!showAbout)
  }

  function scrollDown() {
    window.scrollTo(0, 500)
  }

  return (
    <div>
      {loading && (
        <Flex height='100vh' justify='center' align='center'>
          <Text fontFamily='futura-pt'>Loading...</Text>
        </Flex>
      )}
      <Flex
        width='100%'
        justify='space-between'
        align='center'
        p={8}
        fontFamily='futura-pt'
        fontSize={{ base: '1rem', md: '1.4rem', lg: '1.7rem' }}
        letterSpacing='1.2rem'
        opacity='0.7'>
        <Text as='h1' cursor='pointer' ref={aboutLink} onClick={toggleAbout}>
          {showAboutLink ? (showAbout ? 'STUDIO CONFLUX' : 'ABOUT') : '?'}
        </Text>
        <Text as='h1' cursor='pointer' ref={projectsLink} onClick={scrollDown}>
          {showProjectsLink ? 'PROJECTS' : 'P'}
        </Text>
      </Flex>
      <Flex
        visibility={loading ? 'hidden' : 'visible'}
        className='header'
        height='70vh'
        justify='center'
        align='center'
        flexDirection='column'
        transition='0.4s opacity linear'>
        <Box>
          <svg
            ref={svgRef}
            className='animate-filter'
            width='100%'
            height='100%'
            style={{ display: 'none' }}>
            <defs>
              <filter id='wavy' filterUnits='userSpaceOnUse' x='0' y='0'>
                <feTurbulence
                  id='wave-animation'
                  numOctaves='2'
                  seed='19'
                  baseFrequency='0.02 0.0645034'></feTurbulence>
                <feDisplacementMap
                  scale={isLargerThan650 ? '12' : '6'}
                  in='SourceGraphic'></feDisplacementMap>
              </filter>
              <animate
                attributeName='baseFrequency'
                xlinkHref='#wave-animation'
                dur='10s'
                keyTimes='0;0.5;1'
                values='0.2 0.04;0.2 0.07;0.2 0.04'
                repeatCount='indefinite'></animate>
            </defs>
          </svg>
          {!showAbout && (
            <Heading
              className='studio-conflux'
              as='h1'
              fontFamily='qigong'
              opacity='1'
              filter="url('#wavy')"
              textAlign='center'
              fontSize={{ base: '1.5rem', md: '3rem', lg: '5rem' }}>
              Studio
              <br />
              Conflux
            </Heading>
          )}
          {showAbout && (
            <Text
              className='studio-conflux-description'
              pt={isLargerThan650 ? 6 : 2}
              textAlign='center'
              fontFamily='futura-pt'
              fontSize={{ base: '1rem', md: '1.2rem', lg: '1.5rem' }}
              opacity='0.7'>
              Composition, Music Production and Sound Design
              <br />
              for Arts & Media
            </Text>
          )}
        </Box>
      </Flex>
      <div ref={scrollAnchor}></div>
    </div>
  )
}

export default Header
