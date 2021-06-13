import { Text, Box, Flex, Heading, useMediaQuery } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const Header = () => {
  const [isLargerThan650] = useMediaQuery('(min-width: 650px)')

  // useEffect(() => {
  //   gsap.to('.studio-conflux', { opacity: 1, duration: 1, delay: 1 })
  //   gsap.to('.studio-conflux-description', {
  //     opacity: 0.7,
  //     duration: 1,
  //     delay: 2,
  //   })
  //   gsap.to('.arrow-down', { opacity: 1, duration: 1, delay: 3 })
  // })

  // function scrollDown() {
  //   document.querySelector('#first-project-text')?.scrollIntoView({
  //     behavior: 'smooth',
  //     block: 'center',
  //   })
  // }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Flex
        className='header'
        height='100vh'
        justify='center'
        align='center'
        flexDirection='column'
        transition='0.4s opacity linear'
      >
        <Box>
          <svg width='100%' height='100%' style={{ display: 'none' }}>
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
          <RouterLink to='/contact'>
            <Heading
              className='studio-conflux'
              as='h1'
              fontFamily='qigong'
              opacity='1'
              filter="url('#wavy')"
              textAlign='center'
              fontSize={{ base: '1.5rem', md: '3rem', lg: '4rem' }}
            >
              Studio
              <br />
              Conflux
            </Heading>
          </RouterLink>
          <Text
            className='studio-conflux-description'
            pt={isLargerThan650 ? 6 : 2}
            textAlign='center'
            fontFamily='futura-pt'
            fontSize={{ base: '1rem', md: '1.2rem', lg: '1.5rem' }}
            opacity='0.7'
          >
            Composition, Music Production and Sound Design
            <br />
            for Arts & Media
          </Text>
        </Box>
      </Flex>
      <Box
        className='arrow-down'
        position='absolute'
        top={isLargerThan650 ? '90vh' : '85vh'}
        left='50%'
        opacity='1'
        transform='translate(-50%, -50%)'
        fontSize='2rem'
      >
        <i
          // style={{ cursor: 'pointer' }}
          // onClick={scrollDown}
          className='fas fa-chevron-down'
          style={{ opacity: 0.3 }}
        ></i>
      </Box>
    </motion.div>
  )
}

export default Header
