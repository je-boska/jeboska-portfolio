import { useEffect, useState, useRef } from 'react'
import { Text, Box, Flex, Heading, useMediaQuery } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const Logo = () => {
  const [isLargerThan650] = useMediaQuery('(min-width: 650px)')
  const [visible, setVisible] = useState(false)
  const elementRef = useRef<SVGSVGElement | null>(null)

  useEffect(() => {
    const svgElem = elementRef.current

    svgElem!.addEventListener('load', () => {
      setVisible(true)
    })
  }, [])

  return (
    <>
      <Box visibility={visible ? 'visible' : 'hidden'}>
        <svg
          ref={elementRef}
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
        <Heading
          className='studio-conflux'
          as='h1'
          fontFamily='qigong'
          opacity='1'
          filter="url('#wavy')"
          textAlign='center'
          fontSize={{ base: '1.5rem', md: '3rem', lg: '4rem' }}>
          Studio
          <br />
          Conflux
        </Heading>
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
      </Box>
    </>
  )
}

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <Flex
        className='header'
        height='70vh'
        justify='center'
        align='center'
        flexDirection='column'
        transition='0.4s opacity linear'>
        <Logo />
      </Flex>
    </motion.div>
  )
}

export default Header
