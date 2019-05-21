import styled from 'styled-components'
import { rgba } from 'polished'
import { colours, easing, gpuStyles, spacing, timing } from '../../styles'

const ModalContainer = styled.div`
  align-items: center;
  background-color: ${colours.grey.base};
  box-shadow: 0 20px 10px -10px ${rgba(colours.green.dark, .1)};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  left: 0;
  padding: ${spacing.lg};
  position: fixed;
  top: 0;
  transition: transform ${timing.slow} ${easing.default};
  width: 100vw;

  ${(props) => props.isOpen ?`
    transform: translateY(0);
  `:`
    transform: translateY(-100%);
  `}
`

const CloseButton = styled.button`
  border: 0;
  background-color: transparent;
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
