import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #010409 ;
    font-family: Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  textarea:focus, input:focus, select:focus {
    background-color: #0D1117;
    box-shadow: 0 0 0 0;
    border-top-color: #5aa5fb;
    border-bottom-color: #5aa5fb;
    border-left-color: #5aa5fb;
    outline: 0;
  }
  
  #root {
    max-width: 100%;
    margin: 0 auto;

  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }



  html {
    @media (max-width: 1080px){
      font-size: 93.75%;
      
    }

    @media (max-width: 720px){
      font-size: 100%;
      overflow-x:hidden;
    }
  }
`;
