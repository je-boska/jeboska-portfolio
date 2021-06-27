import React from 'react'
import { Flex, Text } from '@chakra-ui/layout'

const Contact = () => {
  return (
    <div>
      <Flex justify='center' align='center' height='100vh'>
        <Text maxW='600px' fontFamily='futura-pt'>
          Studio Conflux is a Berlin sound design, composition, music production
          and mixing studio, run by Tim Roth, Philipp Hülsenbeck and Jon Eirik
          Boska. We’re passionate about anything sound and excited to hear about
          you and your project.
          <br />
          Get in touch
          <br />
          hello@studioconflux.com
          <br />
          Imprint
        </Text>
      </Flex>
    </div>
  )
}

export default Contact
