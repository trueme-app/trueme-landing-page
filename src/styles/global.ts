import styled, { createGlobalStyle } from 'styled-components'
import { above, colours, easing, fontFiles, fonts, spacing, timing, typography } from './index'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Butler Bold';
    font-style: normal;
    font-weight: normal;
    src: url('${fontFiles.ButlerBoldWoff2}') format('woff2'),
        url('${fontFiles.ButlerBoldWoff}') format('woff');
  }

  @font-face {
    font-family: 'Butler Medium';
    font-style: normal;
    font-weight: normal;
    src: url('${fontFiles.ButlerMediumWoff2}') format('woff2'),
        url('${fontFiles.ButlerMediumWoff}') format('woff');
  }

  @font-face {
    font-family: 'Benton Sans';
    font-style: normal;
    font-weight: normal;
    src: url('${fontFiles.BentonSansWoff2}') format('woff2'),
        url('${fontFiles.BentonSansWoff}') format('woff');
  }

  html {
    font-size: 14px;

    ${above.sm`
      font-size: 16px;
    `}
  }

  body {
    background-color: ${colours.grey.base};
    font-family: ${fonts.body};
  }

  a,
  button,
  input,
  ellipse,
  polyline,
  path {
    transition: ${
      ['background-color', 'color', 'fill', 'stroke', 'box-shadow'].map((prop) => `${prop} ${timing.default} ${easing.default}${prop === 'box-shadow' ? `` : `, `}`)
    }
  }
`
