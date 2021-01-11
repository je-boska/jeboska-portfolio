import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'

const Header = () => {
  return (
    <>
      <Flex
        height='100vh'
        justify='center'
        align='center'
        opacity='1'
        transition='0.4s opacity linear'>
        <Heading as='h1' fontSize={{ base: '3rem', md: '4rem', lg: '5rem' }}>
          JE Boska
        </Heading>
      </Flex>
      <Box
        opacity='0.5'
        position='absolute'
        top='90vh'
        left='50%'
        transform='translate(-50%, -50%)'>
        <i className='fas fa-chevron-down'></i>
      </Box>
    </>
  )
}

export default Header
