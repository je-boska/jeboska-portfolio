import React from 'react'
import { Global } from '@emotion/react'

export const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'karrik';
        src: url('./fonts/Karrik-Regular.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
        font-display: block;
      }
      
      @font-face {
        font-family: 'karrik';
        src: url('./fonts/Karrik-Italic.woff2') format('woff2');
        font-weight: normal;
        font-style: italic;
        font-display: block;
      }

      @font-face {
        font-family: 'qigong';
        src: url('./fonts/qigong_regular.otf') format('opentype');
        font-weight: normal;
        font-style: normal;
        font-display: block;
      }

      @font-face {
        font-family: 'futura-pt';
        src: url('./fonts/FuturaPTLight.otf') format('opentype');
        font-weight: normal;
        font-style: normal;
        font-display: block;
      }
      
    `}
  />
)
