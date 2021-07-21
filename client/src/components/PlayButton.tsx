import { Box } from '@chakra-ui/react'
import React from 'react'

interface PlayButtonProps {
  isPlaying: boolean
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>
}

const PlayButton: React.FC<PlayButtonProps> = ({ isPlaying, setIsPlaying }) => {
  return (
    <Box
      opacity='0'
      zIndex='2'
      _hover={{ opacity: isPlaying ? 0 : 0.5 }}
      color='white'
      position='absolute'
      width='100%'
      height='100%'
      transition='0.2s opacity ease-in-out'
      onClick={() => setIsPlaying(!isPlaying)}
    >
      <i
        style={{
          fontSize: 60,
          top: '50%',
          left: '50%',
          position: 'absolute',
          transform: 'translate(-50%, -50%)',
        }}
        className='fas fa-play'
      ></i>
    </Box>
  )
}

export default PlayButton
