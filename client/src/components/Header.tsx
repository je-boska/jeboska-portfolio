import { Text, Box, Flex, Heading, Link } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { gsap } from 'gsap'

const Header = () => {
  useEffect(() => {
    gsap.to('.studio-conflux', { opacity: 1, duration: 1, delay: 1 })
    gsap.to('.studio-conflux-description', {
      opacity: 0.7,
      duration: 1,
      delay: 2,
    })
    gsap.to('.arrow-down', { opacity: 1, duration: 1, delay: 2 })
  })

  function scrollDown() {
    document.querySelector('#first-project-text')?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    })
  }

  return (
    <>
      <Flex
        className='header'
        height='100vh'
        justify='center'
        align='center'
        flexDirection='column'
        transition='0.4s opacity linear'
      >
        <Heading
          className='studio-conflux'
          as='h1'
          fontFamily='qigong'
          textAlign='center'
          opacity='0'
          fontSize={{ base: '2rem', md: '3rem', lg: '4rem' }}
        >
          Studio Conflux
        </Heading>
        <Text
          className='studio-conflux-description'
          textAlign='center'
          pt={4}
          fontSize={{ base: '1rem', md: '1.2rem', lg: '1.5rem' }}
          opacity='0'
        >
          Composition for Arts & Media // Music Production
          <br />
          Sound Design // Audio Mixing
        </Text>
      </Flex>
      <Box
        className='arrow-down'
        position='absolute'
        top='90vh'
        left='50%'
        opacity='0'
        transform='translate(-50%, -50%)'
        fontSize='2rem'
      >
        <Link to='#' opacity='0.2' _hover={{ opacity: '0.5' }}>
          <i
            style={{ cursor: 'pointer' }}
            onClick={scrollDown}
            className='fas fa-chevron-down'
          ></i>
        </Link>
      </Box>
    </>
  )
}

export default Header
