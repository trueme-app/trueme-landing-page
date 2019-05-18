import styled from 'styled-components'
import { above, colours, fonts, typography } from '../../styles'

const HeadingContainer = styled.h1`
  color: ${(props) => colours[props.colour] ? colours[props.colour][props.variant] : 'currentColor'};
  font-family: ${(props) => props.font};
  font-size: ${(props) => props.size.xs};
  font-weight: normal;
  letter-spacing: ${(props) => props.letterSpacing}px;
  line-height: ${(props) => props.lineHeight};
  margin: 1rem 0;

  ${(props) => Object.keys(props.size).map((size) =>
    above[size]`
      font-size: ${props.size[size]};
    `)
  }

  strong.green {
    color: ${colours.green.base};
  }
`

export {
  HeadingContainer
}
