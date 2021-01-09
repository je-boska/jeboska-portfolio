import { Global } from '@emotion/react'

export const Fonts = () => (
  <Global
    styles={`
    @font-face {
        font-family: 'karrik';
        src: url('./fonts/Karrik-Regular.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
      }
      
      @font-face {
        font-family: 'karrik';
        src: url('./fonts/Karrik-Italic.woff2') format('woff2');
        font-weight: normal;
        font-style: italic;
      }
      
    `}
  />
)
