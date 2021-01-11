import { Box } from '@chakra-ui/react'
import React from 'react'

interface PlayButtonProps {
  isPlaying: boolean
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>
}

const PlayButton: React.FC<PlayButtonProps> = ({ isPlaying, setIsPlaying }) => {
  return (
    <Box
      opacity={isPlaying ? 0 : 0.5}
      color='white'
      position='absolute'
      top='50%'
      left='50%'
      transform='translate(-50%, -50%)'
      transition='0.4s opacity ease-in-out'
      onClick={() => setIsPlaying(!isPlaying)}>
      <i style={{ fontSize: 60 }} className='fas fa-play'></i>
    </Box>
  )
}

export default PlayButton
