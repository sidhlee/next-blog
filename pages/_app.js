import { createGlobalStyle, css } from 'styled-components';

const utilCss = css`
  .heading-xxl {
    font-size: 2.5rem;
    line-height: 1.2;
    font-weight: 800;
    letter-spacing: -0.05rem;
    margin: 1rem 0;
  }

  .heading-xl {
    font-size: 2rem;
    line-height: 1.3;
    font-weight: 800;
    letter-spacing: -0.05rem;
    margin: 1rem 0;
  }

  .heading-lg {
    font-size: 1.5rem;
    line-height: 1.4;
    margin: 1rem 0;
  }

  .heading-md {
    font-size: 1.2rem;
    line-height: 1.5;
  }

  .border-circle {
    border-radius: 9999px;
  }

  .colorInherit {
    color: inherit;
  }

  .padding1px {
    padding-top: 1px;
  }

  .list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .list-item {
    margin: 0 0 1.25rem;
  }

  .light-text {
    color: #666;
  }

  .container {
    min-height: 100vh;
    padding: 0 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .title a:hover,
  .title a:focus,
  .title a:active {
    text-decoration: underline;
  }

  .title {
    margin: 0;
    line-height: 1.15;
    font-size: 4rem;
  }

  .title,
  .description {
    text-align: center;
  }

  .description {
    line-height: 1.5;
    font-size: 1.5rem;
  }

  .grid {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    max-width: 800px;
    margin-top: 3rem;
  }

  .card {
    margin: 1rem;
    flex-basis: 45%;
    padding: 1.5rem;
    text-align: left;
    color: inherit;
    text-decoration: none;
    border: 1px solid #eaeaea;
    border-radius: 10px;
    transition: color 0.15s ease, border-color 0.15s ease;
    h3 {
      margin: 0 0 1rem 0;
      font-size: 1.5rem;
    }
    p {
      margin: 0;
      font-size: 1.25rem;
      line-height: 1.5;
    }
    &:hover,
    &:focus,
    &:active {
      color: #0070f3;
      border-color: #0070f3;
    }
  }

  .logo {
    height: 1em;
  }
`;

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      sans-serif;
    font-size: 125%;
    
  }

  * {
    box-sizing: border-box;
  }

  a {
    color: #0070f3;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
  }

  ${utilCss}
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
