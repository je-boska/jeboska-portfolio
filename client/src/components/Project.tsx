import React, { useEffect, useState } from 'react'
import { splitScroll } from '../effects/splitScroll'
import { ProjectType } from '../types'
import { Box, Flex, useMediaQuery } from '@chakra-ui/react'
import PlayButton from './PlayButton'
import ProjectText from './ProjectText'
import FullscreenButton from './FullscreenButton'

interface ProjectProps {
  project: ProjectType
}

const Project: React.FC<ProjectProps> = ({ project }) => {
  const [isLargerThan650] = useMediaQuery('(min-width: 650px)')

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
    isLargerThan650 && splitScroll(`.${slug}_video-container`)
  }, [slug, isLargerThan650])

  function toggleFullscreen() {
    const video = document.querySelector(`.${slug}_video`)! as HTMLVideoElement
    if (video.requestFullscreen) {
      video.requestFullscreen()
    }
  }

  return (
    <Flex flexWrap={isLargerThan650 ? 'nowrap' : 'wrap'} height='200vh'>
      <Flex
        width={isLargerThan650 ? '50%' : '100%'}
        padding={10}
        display='flex'
        justify='center'
        align='center'>
        <ProjectText title={title} body={body} />
      </Flex>
      <Box
        width={isLargerThan650 ? '50%' : '100%'}
        position='relative'
        overflow='hidden'
        height='100vh'
        className={`${slug}_video-container video-container`}
        _hover={{
          cursor: 'pointer',
        }}>
        <PlayButton playing={playing} />
        {isLargerThan650 && (
          <FullscreenButton
            playing={playing}
            toggleFullscreen={toggleFullscreen}
          />
        )}
        <video
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          className={`${slug}_video video`}
          src={videoUrl}
          poster={poster}
          onClick={() => {
            setPlaying(!playing)
          }}
        />
      </Box>
    </Flex>
  )
}

export default Project
