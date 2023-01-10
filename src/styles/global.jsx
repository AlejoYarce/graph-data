import React from 'react'
import { Global, css } from '@emotion/react'

import { styled } from './theme'

const style = (theme) => css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  *,
  a:visited,
  a:active {
    text-decoration: none;
    color: inherit;
  }

  *,
  *:focus {
    outline: none;
  }

  html {
    box-sizing: border-box;
    background-color: ${theme.colors.primary.white};
  }

  ul,
  li,
  html,
  body {
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
    font-family: sans-serif;
    font-weight: normal;
    font-size: 10px;
    color: ${theme.colors.primary.black};
    background-color: ${theme.colors.primary.background};

    padding: 0;
    margin: 0;
  }

  main {
    margin-top: ${theme.heights.navbar}px;
  }

  button {
    outline: none;
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;

    /* background: transparent; */
    padding: 0.5rem 0.8rem;
    cursor: pointer;

    /* inherit font & color from ancestor */
    text-align: inherit;
    color: inherit;
    font: inherit;

    /* Normalize 'line-height'. Cannot be changed from 'normal' in Firefox 4+. */
    line-height: normal;

    /* Corrects font smoothing for webkit */
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;

    /* Corrects inability to style clickable 'input' types in iOS */
    -webkit-appearance: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  p {
    margin: 0;
  }

  ul {
    list-style-type: none;
  }

  input {
    margin: 0;
    padding: 0;
    border-radius: 0;
    border-width: 0.1rem;
  }

  .box-shadow {
    -webkit-box-shadow: 0 0.2rem 1.5rem 0 rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0 0.2rem 1.5rem 0 rgba(0, 0, 0, 0.1);
    box-shadow: 0 0.2rem 1.5rem 0 rgba(0, 0, 0, 0.1);
  }

  .box-shadow-error {
    -webkit-box-shadow: 0 0.2rem 1.5rem 0 rgb(255 192 190);
    -moz-box-shadow: 0 0.2rem 1.5rem 0 rgb(255 192 190);
    box-shadow: 0 0.2rem 1.5rem 0 rgb(255 192 190);
  }

  svg {
    &.opened {
      transform: rotate(180deg);
      transition-duration: 300ms;
    }

    &.closed {
      transform: rotate(0deg);
      transition-duration: 300ms;
    }
  }

  .is-danger {
    margin-top: 5px;
    margin-bottom: 20px;
    color: #b24040;
    font-size: 12px;
    font-weight: 600;
  }

  /* 3rd parties */

  /* loader */
  .loader,
  .loader:before,
  .loader:after {
    background: ${theme.colors.primary.silver};
    -webkit-animation: load1 1s infinite ease-in-out;
    animation: load1 1s infinite ease-in-out;
    width: 1em;
    height: 4em;
  }
  .loader {
    color: ${theme.colors.primary.silver};
    text-indent: -9999em;
    margin: 88px auto;
    position: relative;
    font-size: 11px;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }
  .loader:before,
  .loader:after {
    position: absolute;
    top: 0;
    content: '';
  }
  .loader:before {
    left: -1.5em;
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }
  .loader:after {
    left: 1.5em;
  }
  @-webkit-keyframes load1 {
    0%,
    80%,
    100% {
      box-shadow: 0 0;
      height: 4em;
    }
    40% {
      box-shadow: 0 -2em;
      height: 5em;
    }
  }
  @keyframes load1 {
    0%,
    80%,
    100% {
      box-shadow: 0 0;
      height: 4em;
    }
    40% {
      box-shadow: 0 -2em;
      height: 5em;
    }
  }
  /* loader */

  /* 3rd parties */
`

const GlobalStyles = (props) => <Global styles={style} {...props} />

export { GlobalStyles, style }

export const SectionContainer = styled.section`
  padding: 50px 20px;
`
