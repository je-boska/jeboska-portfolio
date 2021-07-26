import { useEffect, useRef } from 'react'
import { Text, Box, Flex, Heading, useMediaQuery } from '@chakra-ui/react'
import { useState } from 'react'
import { checkIfFirefox } from '../utils/checkIfFirefox'
import Contact from './Contact'

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
  const [isFirefox, setIsFirefox] = useState(false)

  useEffect(() => {
    if (isFirefox) {
      setLoading(false)
    }

    svgRef.current?.addEventListener('load', () => {
      setLoading(false)
    })
  }, [isFirefox])

  useEffect(() => {
    setIsFirefox(checkIfFirefox())
  }, [])

  function toggleAbout() {
    setShowAbout(showAbout => !showAbout)
  }

  function scrollDown() {
    scrollAnchor?.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div>
      {loading && !isFirefox && (
        <Flex height='100vh' justify='center' align='center'>
          <Text fontFamily='futura-pt'>Loading...</Text>
        </Flex>
      )}
      <div style={{ transform: 'translateY(100vh)' }} ref={scrollAnchor}></div>
      <Flex
        width='100%'
        justify='space-between'
        p={8}
        fontFamily='futura-pt'
        fontSize={{ base: '1rem', md: '1.4rem', lg: '1.7rem' }}
        letterSpacing='1.2rem'
        opacity='0.7'
      >
        <Text
          as='h1'
          cursor='pointer'
          ref={aboutLink}
          onClick={toggleAbout}
          onMouseEnter={() => setShowAboutLink(showAboutLink => !showAboutLink)}
          onMouseLeave={() => setShowAboutLink(showAboutLink => !showAboutLink)}
        >
          {showAboutLink ? (showAbout ? 'STUDIO CONFLUX' : 'ABOUT') : '?'}
        </Text>
        <Text
          as='h1'
          cursor='pointer'
          ref={projectsLink}
          onClick={scrollDown}
          onMouseEnter={() =>
            setShowProjectsLink(showProjectsLink => !showProjectsLink)
          }
          onMouseLeave={() =>
            setShowProjectsLink(showProjectsLink => !showProjectsLink)
          }
        >
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
        transition='0.4s opacity linear'
      >
        <Box>
          <svg
            ref={svgRef}
            onLoad={() => console.log('ffs')}
            className='animate-filter'
            width='100%'
            height='100%'
            style={{ display: 'none' }}
          >
            <defs>
              <filter id='wavy' filterUnits='userSpaceOnUse' x='0' y='0'>
                <feTurbulence
                  id='wave-animation'
                  numOctaves='2'
                  seed='19'
                  baseFrequency='0.02 0.0645034'
                ></feTurbulence>
                <feDisplacementMap
                  scale={isLargerThan650 ? '12' : '6'}
                  in='SourceGraphic'
                ></feDisplacementMap>
              </filter>
              <animate
                attributeName='baseFrequency'
                xlinkHref='#wave-animation'
                dur='10s'
                keyTimes='0;0.5;1'
                values='0.2 0.04;0.2 0.07;0.2 0.04'
                repeatCount='indefinite'
              ></animate>
            </defs>
          </svg>
          {!showAbout && (
            <Heading
              className='studio-conflux'
              as='h1'
              fontFamily='qigong'
              opacity='1'
              lineHeight='1.3'
              textShadow={
                isLargerThan650
                  ? '20px 20px 20px rgba(255, 255, 255, 0.3)'
                  : '10px 10px 10px rgba(255, 255, 255, 0.4)'
              }
              filter={isFirefox ? 'none' : "url('#wavy')"}
              textAlign='center'
              fontSize={{ base: '1.5rem', md: '3rem', lg: '5rem' }}
            >
              Studio
              <br />
              Conflux
            </Heading>
          )}
          {showAbout && (
            <>
              <Contact />
            </>
          )}
        </Box>
      </Flex>
    </div>
  )
}

export default Header
