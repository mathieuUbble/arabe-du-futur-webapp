import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100 %
    }
    body {
        background-color: #0cbaba; 
        background-image: linear-gradient(180deg, #0f0c29, #302b63, #24243e);
        background-attachment: fixed;
        background-size: cover;
        margin: 0;
        padding: 0 20px;
        justify-content: center;
    }
    * {
        box-sizing: border-box;
        font-family: 'Catamaran',sans-serif;
    }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
  }
  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    font-family: Fascinate Inline, HaettenSchweiler, "Arial Narrow Bold",
      sans-serif;
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-background-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    font-weight: 400;
    text-align: center;
    margin: 20px;
  }

  .start {
    max-width: 200px;
  }
`;
