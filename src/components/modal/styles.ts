import styled from 'styled-components'
import { rgba } from 'polished'
import { above, colours, easing, spacing, timing } from '../../styles'

const ModalContainer = styled.div`
  align-items: center;
  background-color: ${colours.grey.base};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100vh;
  left: 0;
  padding: ${spacing.lg};
  position: fixed;
  top: 0;
  transition: transform ${timing.slow} ${easing.default}, box-shadow ${timing.slow} ${easing.default};
  width: 100vw;
  z-index: 2;

  ${above.sm`
    height: auto;
  `}

  ${(props) => props.isOpen ?`
    transform: translateY(0);
    box-shadow: 0 ${spacing.lg} ${spacing.md} -${spacing.md} ${rgba(colours.green.dark, .1)};
  `:`
    transform: translateY(-100%);
  `}
`

const CloseButton = styled.button`
  border: 0;
  background-color: transparent;
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
