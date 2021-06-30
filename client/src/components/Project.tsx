import React, { useEffect, useState } from 'react'
import { ProjectType } from '../types'
import { Box, useMediaQuery } from '@chakra-ui/react'
import ProjectText from './ProjectText'
import FullscreenButton from './FullscreenButton'
// import { checkIfFirefox } from '../utils/checkIfFirefox'
import { splitScroll } from '../effects/splitScroll'

interface ProjectProps {
  project: ProjectType
  index: number
}

type videoElement = HTMLVideoElement | null

const Project: React.FC<ProjectProps> = ({ project, index }) => {
  const [isLargerThan650] = useMediaQuery('(min-width: 650px)')
  const [isPlaying, setIsPlaying] = useState(false)
  // const [isFirefox, setIsFirefox] = useState(false)
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

  function moveVideoOutOfParent() {
    video && document.body.appendChild(video)
  }

  function moveVideoBackInParent() {
    const videoParent = document.querySelector(
      `.${slug}_video-container`
    ) as HTMLElement
    video && videoParent.appendChild(video)
  }

  function toggleFullscreen() {
    moveVideoOutOfParent()
    if (video?.requestFullscreen) {
      video.requestFullscreen()
    }
  }

  function fullscreenListener() {
    const state =
      (document as any).fullScreen ||
      (document as any).mozFullScreen ||
      (document as any).webkitIsFullScreen

    if (!state) {
      moveVideoBackInParent()
    }
  }

  useEffect(() => {
    setVideo(document.querySelector(`.${slug}_video`)! as HTMLVideoElement)
  }, [slug])

  // useEffect(() => {
  //   setIsFirefox(checkIfFirefox())
  // }, [])

  useEffect(() => {
    isPlaying ? play() : pause()
    document.addEventListener('scroll', () => {
      video?.paused && setIsPlaying(false)
    })

    video?.addEventListener('fullscreenchange', fullscreenListener)
  })

  useEffect(() => {
    splitScroll(`.${slug}_video-container`)
  }, [slug, isLargerThan650])

  return (
    <Box
      className={`.${slug}_project project-container`}
      flexWrap={isLargerThan650 ? 'nowrap' : 'wrap'}
      height='50vh'>
      <ProjectText
        first={index === 0 ? true : false}
        title={title}
        body={body}
        isLargerThan650={isLargerThan650}
      />

      <Box
        width={isLargerThan650 ? '80%' : '100%'}
        position='relative'
        height='80vh'
        margin='0 auto'
        className={`${slug}_video-container video-container`}
        _hover={{
          cursor: 'pointer',
        }}>
        {/* <PlayButton isPlaying={isPlaying} setIsPlaying={setIsPlaying} /> */}
        {isLargerThan650 && (
          <FullscreenButton
            playing={isPlaying}
            toggleFullscreen={toggleFullscreen}
          />
        )}
        <video
          style={{ height: '100%', margin: '0 auto' }}
          className={`${slug}_video video`}
          src={videoUrl}
          poster={poster}
          onClick={() => {
            setIsPlaying(!isPlaying)
          }}
        />
      </Box>
    </Box>
  )
}

export default Project
