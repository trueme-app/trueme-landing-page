import styled, { createGlobalStyle } from 'styled-components'
import { above, ButlerBoldWoff2, ButlerBoldWoff, ButlerMediumWoff2, ButlerMediumWoff, BentonSansWoff2, BentonSansWoff, BentonSansBoldWoff2, BentonSansBoldWoff, BentonSansMediumWoff2, BentonSansMediumWoff, colours, easing, fontFiles, fonts, spacing, timing, typography } from './index'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Butler Bold';
    font-style: normal;
    font-weight: normal;
    src: url('${ButlerBoldWoff2}') format('woff2'),
        url('${ButlerBoldWoff}') format('woff');
  }

  @font-face {
    font-family: 'Butler Medium';
    font-style: normal;
    font-weight: normal;
    src: url('${ButlerMediumWoff2}') format('woff2'),
        url('${ButlerMediumWoff}') format('woff');
  }

  @font-face {
    font-family: 'Benton Sans';
    font-style: normal;
    font-weight: normal;
    src: url('${BentonSansWoff2}') format('woff2'),
        url('${BentonSansWoff}') format('woff');
  }

  @font-face {
    font-family: 'Benton Sans Bold';
    font-style: normal;
    font-weight: normal;
    src: url('${BentonSansBoldWoff2}') format('woff2'),
        url('${BentonSansBoldWoff}') format('woff');
  }

  @font-face {
    font-family: 'Benton Sans Medium';
    font-style: normal;
    font-weight: normal;
    src: url('${BentonSansMediumWoff2}') format('woff2'),
        url('${BentonSansMediumWoff}') format('woff');
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

  a {
    color: currentColor;
    font-family: ${fonts.bodyBold};
  }
`
