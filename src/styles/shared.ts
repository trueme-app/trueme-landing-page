import styled from 'styled-components'
import { above, spacing, typography } from './index'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: ${(props) => props.paddingBottom !== null ? spacing.xl : '0'};
  padding-top: ${(props) => props.paddingBottom !== null ? spacing.xl : '0'};
  margin: 0 auto;
  max-width: 1300px;
`

const Copy = styled.p`
  font-size: ${(props) => props.size || typography.body.size.xs};
  font-weight: normal;
  letter-spacing: ${(props) => props.letterSpacing || typography.body}px;
  line-height: ${(props) => props.lineHeight};
  margin: 1rem 0;

  ${(props) => Object.keys(typography.body.size).map((size) =>
    above[size]`
      font-size: ${typography.body.size[size]};
    `)
  }
`

const UnstyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const SVGContainer = styled.div`
  display: flex;

  svg {
    width: 100%;
    height: 100%;
  }
`

export {
  Container,
  Copy,
  SVGContainer,
  UnstyledList,
}
