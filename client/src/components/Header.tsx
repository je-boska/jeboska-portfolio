import { Text, Box, Flex, Heading } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { gsap } from 'gsap'

const Header = () => {
  useEffect(() => {
    gsap.to('.header', { opacity: 1, duration: 1 })
    gsap.to('.arrow-down', { opacity: 0.25, duration: 1, delay: 1 })
  })

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
        opacity='0'
        position='absolute'
        top='90vh'
        left='50%'
        transform='translate(-50%, -50%)'
        fontSize='2rem'>
        <i className='fas fa-chevron-down'></i>
      </Box>
    </>
  )
}

export default Header
