import React from 'react'
import { Flex, Text } from '@chakra-ui/layout'

const Contact = () => {
  return (
    <div>
      <Flex
        m={8}
        justify='center'
        align='center'
        height='100vh'
        opacity='0.8'
        fontSize={{ base: '1rem', md: '1.2rem', lg: '1.3rem' }}
      >
        <Text maxW='600px' fontFamily='futura-pt'>
          Studio Conflux is a Berlin sound design, composition, music production
          and mixing studio, run by Tim Roth, Philipp Hülsenbeck and Jon Eirik
          Boska.
          <br />
          <br />
          Get in touch
          <br />
          hello@studioconflux.com
          <br />
          <br />
          Imprint
        </Text>
      </Flex>
    </div>
  )
}

export default Contact
