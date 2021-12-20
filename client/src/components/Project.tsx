import React, { useEffect, useState } from "react";
import { ProjectType } from "../types";
import { Box, useMediaQuery } from "@chakra-ui/react";
import ProjectText from "./ProjectText";
import { scrollRotate } from "../effects/scrollRotate";
import PlayButton from "./PlayButton";

interface ProjectProps {
  project: ProjectType;
  index: number;
}

type videoElement = HTMLVideoElement | null;

const Project: React.FC<ProjectProps> = ({ project, index }) => {
  const [isLargerThan650] = useMediaQuery("(min-width: 650px)");
  const [isPlaying, setIsPlaying] = useState(false);
  const [video, setVideo] = useState<videoElement>(null);

  const { title, slug, body, videoUrl, poster } = project;

  function play() {
    pauseAll();
    video?.play();
  }

  function pause() {
    video?.pause();
  }

  function pauseAll() {
    const videos = document.querySelectorAll(
      ".video"
    )! as NodeListOf<HTMLVideoElement>;
    videos.forEach((video) => video.pause());
  }

  useEffect(() => {
    setVideo(document.querySelector(`.${slug}_video`)! as HTMLVideoElement);
  }, [slug]);

  useEffect(() => {
    isPlaying ? play() : pause();
    document.addEventListener("scroll", () => {
      video?.paused && setIsPlaying(false);
    });
  });

  useEffect(() => {
    scrollRotate(`.${slug}_video-container`);
  }, [slug, isLargerThan650]);

  return (
    <Box
      className={`.${slug}_project project-container`}
      flexWrap={isLargerThan650 ? "nowrap" : "wrap"}
      height="50vh"
    >
      <ProjectText
        first={index === 0 ? true : false}
        title={title}
        body={body}
        isLargerThan650={isLargerThan650}
      />

      <Box
        width={isLargerThan650 ? "80%" : "100%"}
        position="relative"
        height="80vh"
        margin="0 auto"
        className={`${slug}_video-container video-container`}
      >
        <Box
          position="absolute"
          transform="translate(-50%, -50%)"
          top="50%"
          left="50%"
          width="100%"
          _hover={{
            cursor: "pointer",
          }}
        >
          <PlayButton isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
          <video
            style={{ margin: "0 auto", maxHeight: "80vh" }}
            className={`${slug}_video video`}
            src={videoUrl}
            poster={poster}
            onClick={() => {
              setIsPlaying(!isPlaying);
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Project;
