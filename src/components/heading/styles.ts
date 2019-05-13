import styled from 'styled-components'
import { above, fonts, typography } from '../../styles'

const HeadingContainer = styled.h1`
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
`

export {
  HeadingContainer
}
