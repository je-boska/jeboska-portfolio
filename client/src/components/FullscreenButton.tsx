import { Box } from '@chakra-ui/react'
import React from 'react'

interface FullscreenButtonProps {
  playing: boolean
  toggleFullscreen: () => void
}

const FullscreenButton: React.FC<FullscreenButtonProps> = ({
  playing,
  toggleFullscreen,
}) => {
  return (
    <Box
      opacity={playing ? 0.5 : 0}
      color='white'
      // position='absolute'
      position='fixed'
      // top='20px'
      // left='20px'
      zIndex='1'
      transition='0.4s opacity ease-in-out'
      onClick={() => toggleFullscreen()}
    >
      <i style={{ fontSize: 20 }} className='fas fa-expand'></i>
    </Box>
  )
}

export default FullscreenButton
