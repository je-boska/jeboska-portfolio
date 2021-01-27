import { Text, Box, Flex, Heading, Link } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { gsap } from 'gsap'

const Header = () => {
  useEffect(() => {
    gsap.to('.header', { opacity: 1, duration: 1 })
    gsap.to('.arrow-down', { opacity: 1, duration: 1, delay: 1 })
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
        opacity='0'
        transition='0.4s opacity linear'>
        <Heading
          className='jeboska'
          as='h1'
          fontSize={{ base: '3rem', md: '4rem', lg: '5rem' }}>
          JE Boska
        </Heading>
        <Text
          fontSize={{ base: '1rem', md: '1.2rem', lg: '1.5rem' }}
          opacity='0.7'>
          composer / music producer
        </Text>
      </Flex>
      <Box
        className='arrow-down'
        position='absolute'
        top='90vh'
        left='50%'
        opacity='0'
        transform='translate(-50%, -50%)'
        fontSize='2rem'>
        <Link to='#' opacity='0.2' _hover={{ opacity: '0.5' }}>
          <i
            style={{ cursor: 'pointer' }}
            onClick={scrollDown}
            className='fas fa-chevron-down'></i>
        </Link>
      </Box>
    </>
  )
}

export default Header
