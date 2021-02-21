import { createGlobalStyle } from 'styled-components'
import gtw from './GTWalsheimPro-Bold.ttf'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: gtwalsheim;
    src: url(${gtw}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #000000;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh; 
    font-family: gtwalsheim; 
  }
`;

export default GlobalStyle