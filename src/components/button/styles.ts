import styled from 'styled-components'
import { above, borderRadius, colours, spacing } from '../../styles'

const StyledButton = styled.button`
  background-color: ${colours.rose.base};
  border: 0;
  border-radius: ${borderRadius.default};
  display: ${(props) => props.hideXs ? 'none': 'flex'};
  color: ${colours.grey.base};
  padding: ${spacing.md} ${spacing.xl};
  text-transform: uppercase;
  fill: ${(props) => props.hideMd ? 'true': 'false'};

  &:hover {
    background-color: ${colours.rose.dark};
  }

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
`

const ButtonContainer = styled.div`
  margin: ${spacing.lg} 0;
`

export {
  StyledButton,
  ButtonContainer,
}
