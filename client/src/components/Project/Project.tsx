import React, { useEffect, useState } from 'react'
import BlockContent from '@sanity/block-content-to-react'
import { splitScroll } from '../../effects/splitScroll'
import { ProjectType } from '../../types'
import { Box, Flex, Heading } from '@chakra-ui/react'
import PlayButton from '../PlayButton/PlayButton'

interface ProjectProps {
  project: ProjectType
}

const Project: React.FC<ProjectProps> = ({ project }) => {
  const [playing, setPlaying] = useState(false)
  const [hoverVideo, setHoverVideo] = useState(false)

  const { title, slug, body, videoUrl, poster } = project

  const play = () => {
    const videos: NodeListOf<HTMLVideoElement> = document.querySelectorAll(
      '.video'
    )! as NodeListOf<HTMLVideoElement>
    videos.forEach(video => video.pause())
    const video: HTMLVideoElement = document.querySelector(
      `.${slug}_video`
    )! as HTMLVideoElement
    video.play()
  }

  const pause = () => {
    const video: HTMLVideoElement = document.querySelector(
      `.${slug}_video`
    )! as HTMLVideoElement
    video.pause()
  }

  useEffect(() => {
    playing ? play() : pause()

    const videoContainer = document.querySelector(`.${slug}_video-container`)!
    videoContainer.addEventListener('mouseenter', () => {
      setHoverVideo(true)
    })
    videoContainer.addEventListener('mouseleave', () => {
      setHoverVideo(false)
    })
  })

  useEffect(() => {
    splitScroll(slug)
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
        <Box className='to-fade' opacity='0' transition='0.4s opacity linear'>
          <Heading size='xl'>{title}</Heading>
          <BlockContent blocks={body} />
        </Box>
      </Flex>
      <Box
        position='relative'
        overflow='hidden'
        height='100vh'
        width='50%'
        className={`${slug}_video-container video-container`}
        onClick={() => {
          setPlaying(!playing)
        }}
      >
        <PlayButton hoverVideo={hoverVideo} playing={playing} />
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
