import styled from 'styled-components'
import { rgba } from 'polished'
import { colours, easing, gpuStyles, spacing, timing } from '../../styles'

const ModalContainer = styled.div`
  background-color: ${colours.grey.base};
  box-shadow: 0 20px 10px -10px ${rgba(colours.green.dark, .1)};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  left: 0;
  padding: ${spacing.lg};
  position: absolute;
  top: -15rem;
  transition: top ${timing.default} ${easing.slow};
  width: 100vw;

  ${gpuStyles}

  ${(props) => props.isOpen ?`
    top: 0;
    transition: top ${timing.default} ${easing.slow};
  `:``}
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
