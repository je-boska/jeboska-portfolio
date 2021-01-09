import React from 'react'

interface PlayButtonProps {
  playing: boolean
}

const PlayButton: React.FC<PlayButtonProps> = ({ playing }) => {
  return (
    <div
      className='play-button'
      style={{
        opacity: playing ? 0 : 0.5,
        color: 'white',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        transition: '0.4s opacity ease-in-out',
      }}
    >
      <i style={{ fontSize: 60 }} className='fas fa-play'></i>
    </div>
  )
}

export default PlayButton
