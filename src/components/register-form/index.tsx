import * as React from 'react'
import { connect } from 'react-redux'
import { EMAIL_REGEX } from '../../constants'
import { setRegistration } from '../../services/klaviyo'
import { Container, Copy, ErrorMessage, HiddenLabel, SuccessMessage } from '../../styles/shared'
import Button from '../button'
import Heading from '../heading'
import { Form, Input, RegisterFormContainer } from './styles'

interface Props {
  toggleModal: (isOpen: boolean) => void
  isOpen: boolean
}

interface State {
  loading: boolean
  isEmailValid: boolean
  email: string
  hasError: boolean
  hasSuccess: boolean
  errorMessage: string | null
}

class RegisterForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      loading: false,
      isEmailValid: false,
      email: '',
      hasError: false,
      hasSuccess: false,
      errorMessage: null,
    }
  }

  submitForm = async (e: React.FormEvent) => {
    e.preventDefault()

    this.setState({
      loading: true,
      hasError: false,
      hasSuccess: false,
      errorMessage: null,
    })

    try {
      const result = await setRegistration(this.state.email)
      const { toggleModal } = this.props

      this.setState({
        email: '',
        isEmailValid: false,
        hasSuccess: true,
      })
    } catch(ex) {
      console.log(ex)
      this.setState({
        hasError: true,
        hasSuccess: false,
        errorMessage: 'Registration failed. Please wait and try again in a few minutes.'
      })
    } finally {
      this.setState({ loading: false })
    }
  }

  onChange = (e: any) => {
    const email = e.target.value
    const isEmailValid = e.target.value.match(EMAIL_REGEX)
    this.setState({ email, isEmailValid, hasError: false, hasSuccess: false })
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
        <Heading level={2}>Register for our private beta.</Heading>
        <Copy half>You’ll be the first to use the app.</Copy>
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
        {this.state.hasSuccess && (
          <Container>
            <SuccessMessage>Thank you. You’ve been added to the private beta. Please check your inbox.</SuccessMessage>
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
    toggleModal: (isOpen: boolean) =>
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
