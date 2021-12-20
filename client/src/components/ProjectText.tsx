import { Box, Heading } from "@chakra-ui/react";
import React from "react";

interface ProjectTextProps {
  title: string;
  body: string;
  isLargerThan650: boolean;
  first: boolean;
}

const ProjectText: React.FC<ProjectTextProps> = ({
  title,
  body,
  isLargerThan650,
  first,
}) => {
  // css for BlockContent component
  const css = `
.project-text h1 {
    padding-bottom: ${isLargerThan650 ? "15px" : "10px"};
    line-height: 1;
    max-width: 100%;
    text-align: center;
}
.project-text p {
    font-size: 0.8rem;
    padding-bottom: 100px;
    font-family: futura-pt;
    letter-spacing: 0.15rem;
    opacity: 0.8;
    text-align: center;
}
@media only screen and (min-width: 768px) {
  .project-text p {
    font-size: 1rem;
  }
}
@media only screen and (min-width: 992px) {
  .project-text p {
    font-size: 1.2rem;
  }
}
`;

  return (
    <>
      <Box
        id={first ? "first-project-text" : undefined}
        zIndex="-1"
        width="100%"
        padding={4}
        marginTop="150px"
        justify="center"
        position="sticky"
        top={2}
      >
        <style>{css}</style>
        <Box
          className="project-text to-fade"
          opacity="0"
          transition="0.4s opacity linear"
        >
          <Heading
            as="h1"
            letterSpacing={`${!isLargerThan650 ? "0.3rem" : "1.2rem"}`}
            ml={`${!isLargerThan650 ? "0.3rem" : "1.2rem"}`}
            fontSize={{ base: "1rem", md: "1.4rem", lg: "1.7rem" }}
          >
            {title.toUpperCase()}
          </Heading>
        </Box>
      </Box>
    </>
  );
};

export default ProjectText;
