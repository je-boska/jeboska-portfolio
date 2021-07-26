import React from 'react'
import { Box, Text } from '@chakra-ui/layout'

const Contact = () => {
  return (
    <>
      <Box
        m={8}
        opacity='0.8'
        fontSize={{ base: '1rem', md: '1.2rem', lg: '1.3rem' }}
      >
        <Text maxW='600px' fontFamily='futura-pt'>
          Studio Conflux is a Berlin sound design, composition, music production
          and mixing studio, run by Tim Roth, Philipp Hülsenbeck and Jon Eirik
          Boska.
          <br />
          <br />
          Clients include Adidas, Acqua Di Parma, *Wallpaper Mag, and I don't
          know what else but for sure lots of cool clients.
          <br />
          <br />
          Get in touch
          <br />
          hello@studioconflux.com
          <br />
          <br />
          Imprint
        </Text>
      </Box>
    </>
  )
}

export default Contact
