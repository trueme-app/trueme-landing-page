import { rgba } from 'polished'
import styled from 'styled-components'
import { above, colours, easing, spacing, timing } from '../../styles'

const ModalContainer = styled.div`
  align-items: center;
  backface-visibility: hidden;
  background-color: ${colours.grey.base};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100vh;
  left: 0;
  padding: ${spacing.lg};
  perspective: 1000;
  position: fixed;
  top: 0;
  transition: transform ${timing.slow} ${easing.default}, box-shadow ${timing.slow} ${easing.default};
  width: 100vw;
  will-change: transform;
  z-index: 2;

  /* stylelint-disable */
  ${above.sm`
    height: auto;
  `}

  ${(props) => props.isOpen ?`
    box-shadow: 0 ${spacing.lg} ${spacing.md} -${spacing.md} ${rgba(colours.green.dark, .1)};
    transform: translateY(0);
  `:`
    transform: translateY(-100%);
  `}
  /* stylelint-enable */
`

const CloseButton = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`

const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`

export {
  CloseButton,
  ModalContainer,
  ModalHeader,
}
