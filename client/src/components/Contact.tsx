import React from "react";
import { Box, Text } from "@chakra-ui/layout";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <Box
        m={8}
        opacity="0.8"
        fontSize={{ base: "1rem", md: "1.2rem", lg: "1.3rem" }}
      >
        <Text maxW="600px" fontFamily="futura-pt">
          Studio Conflux is a Berlin sound design, composition, music production
          and mixing studio, run by Tim Roth, Philipp Hülsenbeck and Jon Eirik
          Boska.
          <br />
          <br />
          Clients include Adidas, Converse, Tom Ford, Acqua Di Parma, Siematics,
          GQ Germany and *Wallpaper Magazine.
          <br />
          <br />
          philipp@studioconflux.com
          <br />
          Instagram:{" "}
          <Box display="inline" _hover={{ opacity: "0.8" }}>
            <a href="https://www.instagram.com/studioconflux/">
              @studioconflux
            </a>
          </Box>
          <br />
          <br />
          <Box _hover={{ opacity: "0.8" }}>
            <Link to="/imprint" target="_blank">
              Imprint
            </Link>
          </Box>
        </Text>
      </Box>
    </>
  );
};

export default Contact;
