import styled from 'styled-components'
import { above, alignItems, borderRadius, colours, hidden, marginsPadding, spacing, textAlign, typography, visuallyHidden } from './'

export const Container = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1300px;
  width: 100%;

  /* stylelint-disable */
  ${(props) => marginsPadding(props)};
  ${(props) => alignItems(props)};
  ${(props) => props.stretch ? `flex: 1` : ``};
  /* stylelint-enable */
`

export const Copy = styled.p`
  color: ${(props) => colours[props.colour] ? colours[props.colour][props.variant] : 'currentColor'};
  font-size: ${(props) => props.size || typography.body.size.xs};
  font-weight: ${(props) => props.bold ? '800' : 'normal'};
  letter-spacing: ${(props) => props.letterSpacing || typography.body}px;
  line-height: ${(props) => props.lineHeight};
  margin: 0 0 1rem 0;

  ${(props) => textAlign(props)};
  ${(props) => props.half ? `
    width: 60%;
    margin-left: auto;
    margin-right: auto;`:``}

  ${(props) => Object.keys(typography.body.size).map((size) =>
    above[size]`
      font-size: ${typography.body.size[size]};
    `)
  }

  ${(props) => hidden(props)}
`

export const UnstyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

export const SpaceContainer = styled.div`
  align-items: center;
  display: flex;
  flex: .66;
  flex-direction: column;
  justify-content: center;
`

export const SVGContainer = styled.div`
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

export const ErrorMessage = styled(Copy)`
  color: ${colours.rose.base};
  font-size: .9rem !important;
  font-weight: bold;
  margin-top: ${spacing.lg};

  ${above.sm`
    margin-top: ${spacing.md};
  `}
`

export const SuccessMessage = styled(ErrorMessage)`
  color: ${colours.green.base};
`

export const HiddenLabel = styled.label`
  ${visuallyHidden()}
`

export const List = styled(Copy).attrs({
  as: 'ul',
})`
text-align: left;
`

export const ListItem = styled.li`
  text-align: left;
  padding-left: ${spacing.md};
`

export const TextInput = styled.input`
  border: 1px solid ${(props) => props.hasError ? colours.rose.base : colours.grey.mid};
  border-radius: ${borderRadius.md};
  box-sizing: border-box;
  margin-bottom: ${spacing.lg};
  padding: ${spacing.lg};
  width: 100%;

  &:focus {
    box-shadow: 0 2px 4px -4px ${colours.green.dark};
    outline: none;
  }
`

export const TextArea = styled.textarea`
  border: 1px solid ${(props) => props.hasError ? colours.rose.base : colours.grey.mid};
  border-radius: ${borderRadius.md};
  box-sizing: border-box;
  margin-bottom: ${spacing.lg};
  padding: ${spacing.lg};
  width: 100%;

  &:focus {
    box-shadow: 0 2px 4px -4px ${colours.green.dark};
    outline: none;
  }
`
