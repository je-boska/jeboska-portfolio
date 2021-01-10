import React, { useEffect, useState } from 'react'
import { splitScroll } from '../effects/splitScroll'
import { ProjectType } from '../types'
import { Box, Flex, Heading } from '@chakra-ui/react'
import PlayButton from './PlayButton'
import ProjectText from './ProjectText'

interface ProjectProps {
  project: ProjectType
}

const Project: React.FC<ProjectProps> = ({ project }) => {
  const [playing, setPlaying] = useState(false)

  const { title, slug, body, videoUrl, poster } = project

  const play = () => {
    const videos = document.querySelectorAll(
      '.video'
    )! as NodeListOf<HTMLVideoElement>
    videos.forEach(video => video.pause())
    const video = document.querySelector(`.${slug}_video`)! as HTMLVideoElement
    video.play()
  }

  const pause = () => {
    const video = document.querySelector(`.${slug}_video`)! as HTMLVideoElement
    video.pause()
  }

  useEffect(() => {
    playing ? play() : pause()
    const video = document.querySelector(`.${slug}_video`)! as HTMLVideoElement
    document.addEventListener('scroll', () => {
      video.paused && setPlaying(false)
    })
  })

  useEffect(() => {
    splitScroll(`.${slug}_video-container`)
  }, [slug])

  return (
    <Flex flexWrap='nowrap' height='200vh'>
      <Flex
        width='50%'
        padding={20}
        display='flex'
        justify='center'
        align='center'
      >
        <ProjectText title={title} body={body} />
      </Flex>
      <Box
        position='relative'
        overflow='hidden'
        height='100vh'
        width='50%'
        _hover={{
          cursor: 'pointer',
        }}
        className={`${slug}_video-container video-container`}
        onClick={() => {
          setPlaying(!playing)
        }}
      >
        <PlayButton playing={playing} />
        <video
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          className={`${slug}_video video`}
          src={videoUrl}
          poster={poster}
        />
      </Box>
    </Flex>
  )
}

export default Project
