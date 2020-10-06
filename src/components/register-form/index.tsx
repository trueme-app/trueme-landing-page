import React, { ChangeEvent, FC, FormEvent, useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { EMAIL_REGEX } from '../../constants'
import { setRegistration } from '../../services/klaviyo'
import { State } from '../../state'
import { Container, Copy, ErrorMessage, HiddenLabel, SuccessMessage } from '../../styles/shared'
import Button from '../button'
import Heading from '../heading'
import { Form, Input, RegisterFormContainer } from './styles'

interface RegisterState {
  loading: boolean
  isEmailValid: boolean
  email: string
  hasError: boolean
  hasSuccess: boolean
  errorMessage?: string
}

const RegisterForm: FC = (props) => {
  const emailRef = useRef()
  const isOpen = useSelector((globalState: State) => globalState.modal.isOpen)
  const [state, setState] = useState<RegisterState>({
    loading: false,
    isEmailValid: false,
    email: '',
    hasError: false,
    hasSuccess: false,
  })

  const submitForm = async (e: FormEvent) => {
    e.preventDefault()

    setState((prevState) => ({
      ...prevState,
      loading: true,
      hasError: false,
      hasSuccess: false,
      errorMessage: undefined,
    }))

    try {
      const result = await setRegistration(state.email)

      setState((prevState) => ({
        ...prevState,
        email: '',
        isEmailValid: false,
        hasSuccess: true,
      }))
    } catch(ex) {
      setState((prevState) => ({
        ...prevState,
        hasError: true,
        hasSuccess: false,
        errorMessage: 'Registration failed. Please wait and try again in a few minutes.'
      }))
    } finally {
      setState((prevState) => ({ ...prevState, loading: false }))
    }
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value
    const isEmailValid = !!e.target.value.match(EMAIL_REGEX)
    setState((prevState) => ({ ...prevState, email, isEmailValid, hasError: false, hasSuccess: false }))
  }

  useEffect(() => {
    if (isOpen && emailRef.current) {
      emailRef.current.focus()
    }
  }, [isOpen])

  return (
    <RegisterFormContainer>
      <Heading level={2}>Download the iPhone App.</Heading>
      <Copy half>You’ll be the first to use the app.</Copy>
      <Form hasError={state.hasError} onSubmit={submitForm}>
        <HiddenLabel htmlFor='email-modal'>Enter your email address</HiddenLabel>
        <Input id='email-modal' hasError={state.hasError} ref={emailRef} type='email' onChange={onChange} value={state.email} placeholder='Enter email address' required/>
        <Button htmlType='submit' padding-top-lg padding-bottom-lg disabled={!state.isEmailValid} loading={state.loading}>
          Submit
        </Button>
      </Form>
      {state.hasError && (
        <Container>
          <ErrorMessage>{state.errorMessage}</ErrorMessage>
        </Container>
      )}
      {state.hasSuccess && (
        <Container>
          <SuccessMessage>Thank you. You’ve been added to the private beta. Please check your inbox.</SuccessMessage>
        </Container>
      )}
    </RegisterFormContainer>
  )
}

export default RegisterForm
