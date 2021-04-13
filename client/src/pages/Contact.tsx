import React from 'react'
import { motion } from 'framer-motion'
import { Flex, Text } from '@chakra-ui/layout'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Flex justify='center' align='center' height='100vh'>
        <Link to='/portfolio'>
          <Text maxW='600px'>
            Studio Conflux is a Berlin sound design, composition, music
            production and mixing studio, run by Tim Roth, Philipp Hülsenbeck
            and Jon Eirik Boska. We’re passionate about anything sound and
            excited to hear about you and your project.
            <br />
            Get in touch
            <br />
            hello@studioconflux.com
            <br />
            Imprint
          </Text>
        </Link>
      </Flex>
    </motion.div>
  )
}

export default Contact
