import styled from 'styled-components'
import { above, colours, marginsPadding, spacing, typography } from './index'

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1300px;
  ${(props) => marginsPadding(props)};
`

const Copy = styled.p`
  color: ${(props) => colours[props.colour] ? colours[props.colour][props.variant] : 'currentColor'};
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
  margin: 0;
  padding: 0;
`

const SVGContainer = styled.div`
  display: flex;
  ${(props) => marginsPadding(props)};

  ${(props) => {
    if (props['padding-xl']) {
      return `padding: ${spacing.xl} 0`
    }
  }};

  svg {
    height: 100%;
    width: 100%;
  }
`

export {
  Container,
  Copy,
  SVGContainer,
  UnstyledList,
}
