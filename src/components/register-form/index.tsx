import * as React from 'react'
import { connect } from 'react-redux'
import { EMAIL_REGEX, REGISTRATION_URL } from '../../constants'
import DatabaseService from '../../services/database'
import { Container, Copy, ErrorMessage, HiddenLabel } from '../../styles/shared'
import Button from '../button'
import Heading from '../heading'
import { Form, Input, RegisterFormContainer } from './styles'

class RegisterForm extends React.Component {
  constructor() {
    super()
    this.state = {
      loading: false,
      isEmailValid: false,
      email: '',
      hasError: false,
      errorMessage: null,
    }
  }

  submitForm = async (e) => {
    e.preventDefault()

    this.setState({
      loading: true,
      hasError: false,
      errorMessage: null,
    })

    try {
      const result = await DatabaseService.setRegistration(this.state.email)
      const { toggleModal } = this.props

      toggleModal(false)

      const win = window.open(REGISTRATION_URL)

      if (!win) {
        window.location = REGISTRATION_URL;
      }

      this.setState({
        email: '',
        isEmailValid: false,
      })
    } catch(ex) {
      this.setState({
        hasError: true,
        errorMessage: 'Registration failed. Please wait and try again in a few minutes.'
      })
    } finally {
      this.setState({ loading: false })
    }
  }

  onChange = (e) => {
    const email = e.target.value
    const isEmailValid = e.target.value.match(EMAIL_REGEX)
    this.setState({ email, isEmailValid, hasError: false })
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
        <Form hasError={this.state.hasError} onSubmit={this.submitForm}>
          <HiddenLabel htmlFor='email-modal'>Enter your email address</HiddenLabel>
          <Input id='email-modal' hasError={this.state.hasError} ref={(input) => { this.emailInput = input }} type='email' onChange={this.onChange} value={this.state.email} placeholder='Enter email address' required/>
          <Button type='submit' padding-top-lg padding-bottom-lg disabled={!this.state.isEmailValid} loading={this.state.loading}>
            Submit
          </Button>
        </Form>
        {this.state.hasError && (
          <Container>
            <ErrorMessage>{this.state.errorMessage}</ErrorMessage>
          </Container>
        )}
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
