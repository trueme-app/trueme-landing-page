import styled from 'styled-components'
import { fonts, typography } from '../../styles'

const HeadingContainer = styled.h1`
  font-family: ${(props) => props.font};
  font-weight: normal;
  line-height: ${(props) => props.lineHeight};
  letter-spacing: ${(props) => props.letterSpacing}px;
  margin: 1rem 0;
`

export {
  HeadingContainer
}
