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
  font-weight: ${(props) => props.bold ? '800' : 'normal'};
  letter-spacing: ${(props) => props.letterSpacing || typography.body}px;
  line-height: ${(props) => props.lineHeight};
  margin: 0 0 1rem 0;

  ${(props) => props.half ? `
    width: 60%;
    margin-left: auto;
    margin-right: auto;`:``}

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

const SpaceContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex: .66;
  justify-content: center;
`

const SVGContainer = styled.div`
  display: flex;
  ${(props) => marginsPadding(props)};

  ${(props) => {
    if (props['padding-xl']) {
      return `padding: ${spacing.xxl} 0`
    }
  }};

  svg {
    height: 100%;
    width: 100%;
  }
`

const ErrorMessage = styled(Copy)`
  color: ${colours.rose.base};
  font-size: .9rem !important;
  font-weight: bold;
  margin-top: ${spacing.lg};

  ${above.sm`
    margin-top: ${spacing.md};
  `}
`

export {
  Container,
  Copy,
  ErrorMessage,
  SpaceContainer,
  SVGContainer,
  UnstyledList,
}
