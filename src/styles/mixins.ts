import { css } from 'styled-components'
import spacing from './spacing'

export const media = {
  xxl: 1600,
  xl: 1420,
  lg: 1200,
  md: 992,
  sm: 768,
  xs: 360
}

export const above = Object.keys(media).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (min-width: ${media[label]}px) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})

export const below = Object.keys(media).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (max-width: ${media[label]}px) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})

export const gpuStyles = () => {
  return css`
    backface-visibility: hidden;
    perspective: 1000;
    transform: translateZ(0);
  `
}

export const marginsPadding = (props) => {
  let classes = ``
  const properties = ['padding', 'margin']

  Object.keys(props).forEach((prop) => {
    properties.forEach((property) => {
      if (prop.startsWith(property)) {
        const [, axis, key] = prop.split('-')
        classes += `${property}-${axis}: ${spacing[key]};`
      }
    })
  })

  return css`${classes}`
}
