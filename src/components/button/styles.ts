import styled from 'styled-components'
import { above, borderRadius, colours, focusState, marginsPadding, spacing } from '../../styles'

const StyledButton = styled.button`
  background-color: ${colours.rose.base};
  border: 0;
  border-radius: ${borderRadius.default};
  color: ${colours.grey.base};
  display: ${(props) => props.hideXs ? 'none': 'flex'};
  font-weight: normal;
  justify-content: center;
  align-items: center;
  line-height: 1;
  min-width: 12.5rem;
  padding: ${spacing.md} ${spacing.xxl};
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  text-rendering: auto;

  /* stylelint-disable */
  ${focusState(colours.rose.base, borderRadius.md)}
  ${(props) => marginsPadding(props)};
  ${(props) => props.disabled ? `
    opacity: .5;
    pointer-events: none;
  ` : ``}

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
  /* stylelint-enable */
`

const ButtonContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  ${(props) => marginsPadding(props)};
`

const VisibilitySwitcher = styled.span`
  visibility: ${(props) => props.visible ? 'visible':'hidden'};
  padding-top: 4px;
`

const LoadingContainer = styled.span`
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%) translateX(-50%);
`


export {
  StyledButton,
  ButtonContainer,
  LoadingContainer,
  VisibilitySwitcher,
}
