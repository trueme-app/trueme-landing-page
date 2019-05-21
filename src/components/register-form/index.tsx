import * as React from 'react'
import { Copy } from '../../styles/shared'
import Heading from '../heading'
import { RegisterFormContainer } from './styles'

class RegisterForm extends React.Component {
  render() {
    return (
      <RegisterFormContainer>
        <Heading level={1}>Register your email to join.</Heading>
        <Copy>You will be then be taken to complete your profile.</Copy>
      </RegisterFormContainer>
    )
  }
}

export default RegisterForm
