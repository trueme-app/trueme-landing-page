import styled from 'styled-components'
import { above, borderRadius, colours, marginsPadding, spacing } from '../../styles'

const StyledButton = styled.button`
  background-color: ${colours.rose.base};
  border: 0;
  border-radius: ${borderRadius.default};
  color: ${colours.grey.base};
  display: ${(props) => props.hideXs ? 'none': 'flex'};
  padding: ${spacing.md} ${spacing.xl};
  text-transform: uppercase;

  &:hover {
    background-color: ${colours.rose.dark};
  }

  /* stylelint-disable */
  ${above.xs`
    display: ${(props) => props.hideXs ? 'none': 'flex'};
  `}

  ${above.sm`
    display: ${(props) => props.hideSm || props.hideXs ? 'none': 'flex'};
  `}

  ${above.md`
    display: ${(props) => props.hideMd || props.hideSm || props.hideXs ? 'none': 'flex'};
  `}

  ${above.lg`
    display: ${(props) => props.hideLg || props.hideMd || props.hideSm || props.hideXs ? 'none': 'flex'};
  `}

  ${above.xl`
    display: ${(props) => props.hideXl || props.hideLg || props.hideMd || props.hideSm || props.hideXs ? 'none': 'flex'};
  `}
  /* stylelint-enable */
`

const ButtonContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  ${(props) => marginsPadding(props)};
`

export {
  StyledButton,
  ButtonContainer,
}
