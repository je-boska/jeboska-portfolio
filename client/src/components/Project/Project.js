import React, { useEffect, useState } from 'react'
import BlockContent from '@sanity/block-content-to-react'
import './Project.css'
import { splitScroll } from '../../effects/splitScroll'

const Project = ({ project }) => {
  const [playing, setPlaying] = useState(false)
  const [hoverVideo, setHoverVideo] = useState(false)

  const { title, slug, body, videoUrl, poster } = project

  const play = () => {
    document.querySelector(`.${slug}_video`).play()
  }

  const pause = () => {
    document.querySelector(`.${slug}_video`).pause()
  }

  useEffect(() => {
    playing ? play() : pause()

    const videoContainer = document.querySelector(`.${slug}_video-container`)
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
    <div className='project'>
      <div className='project-text'>
        <div>
          <h1>{title}</h1>
          <BlockContent blocks={body} />
        </div>
      </div>
      <div
        className={`${slug}_video-container video-container`}
        onClick={() => {
          setPlaying(!playing)
        }}>
        <div
          className='play-indicator'
          style={{
            opacity: `${hoverVideo ? 0.5 : 0}`,
          }}>
          <i
            style={{ fontSize: 60 }}
            className={!playing ? 'fas fa-play' : 'fas fa-pause'}></i>
        </div>
        <video
          className={`${slug}_video video`}
          src={videoUrl}
          poster={poster}
        />
      </div>
    </div>
  )
}

export default Project
