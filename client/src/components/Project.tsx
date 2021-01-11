import React, { useEffect, useState } from 'react'
import { splitScroll } from '../effects/splitScroll'
import { ProjectType } from '../types'
import { Box, Flex, useMediaQuery } from '@chakra-ui/react'
import PlayButton from './PlayButton'
import ProjectText from './ProjectText'
import FullscreenButton from './FullscreenButton'
import { checkIfFirefox } from '../utils/checkIfFirefox'

interface ProjectProps {
  project: ProjectType
}

type videoElement = HTMLVideoElement | null

const Project: React.FC<ProjectProps> = ({ project }) => {
  const [isLargerThan650] = useMediaQuery('(min-width: 650px)')

  const [isPlaying, setIsPlaying] = useState(false)
  const [isFirefox, setIsFirefox] = useState(false)
  const [video, setVideo] = useState<videoElement>(null)

  const { title, slug, body, videoUrl, poster } = project

  function play() {
    pauseAll()
    video?.play()
  }

  function pause() {
    video?.pause()
  }

  function pauseAll() {
    const videos = document.querySelectorAll(
      '.video'
    )! as NodeListOf<HTMLVideoElement>
    videos.forEach(video => video.pause())
  }

  function toggleFullscreen() {
    if (video && video.requestFullscreen) {
      video.requestFullscreen()
    }
  }

  useEffect(() => {
    setVideo(document.querySelector(`.${slug}_video`)! as HTMLVideoElement)
  }, [slug])

  useEffect(() => {
    setIsFirefox(checkIfFirefox())
  }, [])

  useEffect(() => {
    isPlaying ? play() : pause()
    document.addEventListener('scroll', () => {
      video?.paused && setIsPlaying(false)
    })
  })

  useEffect(() => {
    isLargerThan650 && splitScroll(`.${slug}_video-container`)
    window.onresize = () =>
      setTimeout(() => !isLargerThan650 && window.location.reload(), 500)
  }, [slug, isLargerThan650])

  return (
    <Flex
      flexWrap={isLargerThan650 ? 'nowrap' : 'wrap'}
      height={isLargerThan650 ? '200vh' : ''}>
      <Flex
        width={isLargerThan650 ? '50%' : '100%'}
        padding={10}
        paddingTop={isLargerThan650 ? '' : '150px'}
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
        <PlayButton isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
        {isLargerThan650 && (
          <FullscreenButton
            playing={isPlaying}
            toggleFullscreen={toggleFullscreen}
          />
        )}
        <video
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          className={`${slug}_video video`}
          src={videoUrl}
          poster={isFirefox ? '' : poster}
          onClick={() => {
            setIsPlaying(!isPlaying)
          }}
        />
      </Box>
    </Flex>
  )
}

export default Project
