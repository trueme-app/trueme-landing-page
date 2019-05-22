import * as React from 'react'
import { connect } from 'react-redux'
import { EMAIL_REGEX, REGISTRATION_URL } from '../../constants'
import DatabaseService from '../../services/database'
import { Copy } from '../../styles/shared'
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
    }
  }

  submitForm = async (e) => {
    if (e) {
      e.preventDefault()
    }

    this.setState({ loading: true })

    try {
      const result = await DatabaseService.setRegistration(this.state.email)
      const { toggleModal } = this.props
      toggleModal(false)
      window.open(REGISTRATION_URL)
    } catch(ex) {
      // TODO
      console.log(ex)
    } finally {
      this.setState({ loading: false })
    }
  }

  onChange = (e) => {
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
        <Form onSubmit={this.submitForm}>
          <Input ref={(input) => { this.emailInput = input }} type='email' onChange={this.onChange} value={this.state.email} placeholder='Enter email address' required/>
          <Button disabled={!this.state.isEmailValid} onClick={this.submitForm} loading={this.state.loading} padding-top-md padding-bottom-md>
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
