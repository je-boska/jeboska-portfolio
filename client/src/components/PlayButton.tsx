import React from 'react'

interface PlayButtonProps {
  hoverVideo: boolean
  playing: boolean
}

const PlayButton: React.FC<PlayButtonProps> = ({ hoverVideo, playing }) => {
  return (
    <div
      className='play-button'
      style={{
        opacity: `${hoverVideo ? 0.5 : 0}`,
        color: 'white',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        transition: '0.4s opacity ease-in-out',
      }}
    >
      <i
        style={{ fontSize: 60 }}
        className={!playing ? 'fas fa-play' : 'fas fa-pause'}
      ></i>
    </div>
  )
}

export default PlayButton
