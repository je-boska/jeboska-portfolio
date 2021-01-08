import React, { useEffect, useState } from 'react'
import BlockContent from '@sanity/block-content-to-react'
import './Project.css'
import { splitScroll } from '../../effects/splitScroll'

const Project = ({ project }) => {
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(true)
  const [hoverVideo, setHoverVideo] = useState(false)

  const { title, body, videoUrl } = project

  const play = () => {
    document.querySelector('.video').play()
  }

  const pause = () => {
    if (playing) {
      document.querySelector('.video').pause()
      setPlaying(false)
    }
  }

  const pauseIfScrolledPast = videoContainer => {
    if (
      window.scrollY >
      videoContainer.offsetHeight + videoContainer.offsetTop
    ) {
      pause()
    }
  }

  const toggleMute = () => {
    setMuted(!muted)
  }

  useEffect(() => {
    playing && play()
    const videoContainer = document.querySelector('.video-container')

    videoContainer.addEventListener('mouseover', () => {
      setPlaying(true)
      setHoverVideo(true)
    })

    videoContainer.addEventListener('mouseleave', () => {
      setPlaying(false)
      setHoverVideo(false)
    })

    document.addEventListener('scroll', () => {
      pauseIfScrolledPast(videoContainer)
    })

    return document.removeEventListener('scroll', () => {
      pauseIfScrolledPast(videoContainer)
    })
  })

  useEffect(() => {
    splitScroll()
  }, [])

  return (
    <div className='project'>
      <div className='project-text'>
        <div>
          <h1>{title}</h1>
          <BlockContent blocks={body} />
        </div>
      </div>
      <div
        className='video-container'
        onClick={() => {
          play()
          playing && toggleMute()
        }}>
        <div
          className='mute-indicator'
          style={{
            opacity: `${muted && hoverVideo ? 0.5 : 0}`,
          }}>
          <i style={{ fontSize: 60 }} className='fas fa-volume-mute'></i>
        </div>
        <video className='video' src={videoUrl} muted={muted} loop />
      </div>
    </div>
  )
}

export default Project
