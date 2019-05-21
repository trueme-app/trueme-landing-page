import * as React from 'react'
import { connect } from 'react-redux'
import CloseIcon from '../../assets/images/icon-close.inline.svg'
import Logo from '../../assets/images/logo.inline.svg'
import { CloseButton, ModalContainer, ModalHeader } from './styles'

interface IModal {
  children?: React.ReactNode[],
  isOpen: boolean,
  toggleModal: () => void
}

class Modal extends React.Component<IModal> {
  constructor() {
    super()
  }

  closeModal() {
    const { toggleModal } = this.props
    toggleModal(false)
  }

  render() {
    const { children, isOpen }: IModal = this.props
    return (<ModalContainer isOpen={isOpen}>
      <ModalHeader>
        <Logo/>
        <CloseButton>
          <CloseIcon onClick={() => this.closeModal()}/>
        </CloseButton>
      </ModalHeader>
      {children}
    </ModalContainer>)
  }
}

const mapStateToProps = state => {
  return {
    isOpen: state.modal.isOpen,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleModal: (isOpen) =>
      dispatch({
        type: 'TOGGLE_MODAL',
        value: isOpen
      })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal)
