import * as React from 'react'
import { connect } from 'react-redux'
import DatabaseService from '../../services/database'
import { EMAIL_REGEX, REGISTRATION_URL } from '../../constants'
import { Copy } from '../../styles/shared'
import Button from '../button'
import Heading from '../heading'
import { RegisterFormContainer, Form, Input } from './styles'

class RegisterForm extends React.Component {
  constructor() {
    super()
    this.state = {
      loading: false,
      isEmailValid: false,
      email: '',
    }
  }

  async submitForm() {
    this.setState({ loading: true })

    try {
      const result = await DatabaseService.setRegistration(this.state.email)
      const { toggleModal } = this.props
      toggleModal(false)
      window.open(REGISTRATION_URL)
    } catch(ex) {

    } finally {
      this.setState({ loading: false })
    }
  }

  onChange(e) {
    const email = e.target.value
    const isEmailValid = e.target.value.match(EMAIL_REGEX)
    this.setState({ email, isEmailValid })
  }

  componentDidUpdate() {
    const { isOpen } = this.props

    if (isOpen) {
      this.emailInput.focus()
    }
  }

  render() {
    return (
      <RegisterFormContainer>
        <Heading level={2}>Register your email to join.</Heading>
        <Copy half>You will be then be taken to complete your profile.</Copy>
        <Form>
          <Input ref={(input) => { this.emailInput = input; }} type='email' onChange={(e) => this.onChange(e)} value={this.state.email} placeholder='Enter email address' required/>
          <Button disabled={!this.state.isEmailValid} onClick={() => this.submitForm()} loading={this.state.loading} padding-top-md padding-bottom-md>
            Submit
          </Button>
        </Form>
      </RegisterFormContainer>
    )
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
)(RegisterForm)
