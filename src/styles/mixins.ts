import { rgba } from 'polished'
import { css } from 'styled-components'
import { spacing } from './spacing'

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

export const focusState = (backgroundColor, borderRadius, size = 3) => {
  return css`
    &:focus {
      outline: none;
      position: relative;

      &::after {
        border: 1.5px dotted ${backgroundColor};
        border-radius: ${borderRadius};
        bottom: -${size}px;
        content: '';
        left: -${size}px;
        position: absolute;
        right: -${size}px;
        top: -${size}px;
      }
    }
  `
}

export const visuallyHidden = () => {
  return css`
    border: 0 !important;
    clip: rect(1px, 1px, 1px, 1px) !important;
    height: 1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    top: 0;
    width: 1px !important;
  `
}

export const alignItems = (props: any) => {
  switch (props.align) {
    case 'left':
    case 'top':
      return css`
        align-items: flex-start;
      `
    case 'right':
    case 'bottom':
      return css`
        align-items: flex-end;
      `
    case 'space-between':
      return css`
        align-items: space-between;
      `
    case 'center':
      return css`
        align-items: center;
      `
    default:
      return css``
  }
}

export const textAlign = (props: any) => {
  switch (props.align) {
    case 'right':
      return css`
        text-align: right;
      `
    case 'left':
      return css`
        text-align: left;
      `
    case 'center':
    default:
      return css`
        text-align: center;
      `
  }
}
