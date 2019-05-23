import * as React from 'react'
import { ClipLoader } from 'react-spinners'
import ArrowIcon from '../../assets/images/icon-arrow.inline.svg'
import FacebookIcon from '../../assets/images/icon-facebook.inline.svg'
import InstagramIcon from '../../assets/images/icon-instagram.inline.svg'
import Dancing from '../../assets/images/illu-dancing-2.inline.svg'
import { EMAIL_REGEX, REGISTRATION_URL } from '../../constants'
import DatabaseService from '../../services/database'
import { colours } from '../../styles'
import { Container, Copy, ErrorMessage } from '../../styles/shared'
import Grid from '../grid'
import Heading from '../heading'
import {
  DancingContainer,
  Facebook,
  FooterContainer,
  FormContainer,
  IconContainer,
  IconSubmitButton,
  Input,
  InputContainer,
  Instagram
} from './styles'

class Footer extends React.Component {
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

  onSubmit = async (e) => {
    this.setState({ loading: true })
    e.preventDefault()

    this.setState({
      loading: true,
      hasError: false,
      errorMessage: null,
    })

    try {
      const result = await DatabaseService.setRegistration(this.state.email)
      window.open(REGISTRATION_URL)
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
    this.setState({ email, isEmailValid })
  }

  render() {
    return (
      <FooterContainer>
        <Container>
          <Grid textAlign='left'>
            <Grid.Column order-sm={2} xs={{ start: 3, end: 12 }} sm={{ start: 8, end: 13 }}>
              <DancingContainer>
                <Dancing/>
              </DancingContainer>
            </Grid.Column>
            <Grid.Column order-sm={1} xs={{ start: 2, end: 12}} sm={{ start: 1, end: 6 }}>
              <FormContainer onSubmit={this.onSubmit}>
                <Heading level={2}>Sign-up to our newsletter to receive tips & advice, tailored for you</Heading>
                <InputContainer>
                  <Input hasError={this.state.hasError} type='email' onChange={this.onChange} placeholder='Enter your email address' value={this.state.email} />
                  <IconSubmitButton disabled={!this.state.isEmailValid}>
                    {this.state.loading && (<ClipLoader size={16} loading={true} color={colours.green.dark}/>)}
                    {!this.state.loading && (<ArrowIcon/>)}
                  </IconSubmitButton>
                </InputContainer>
                {this.state.hasError && (
                  <ErrorMessage>{this.state.errorMessage}</ErrorMessage>
                )}
              </FormContainer>
              <IconContainer>
                <Instagram href='https://instagram.com/trueme.app'>
                  <InstagramIcon />
                </Instagram>
                <Facebook href='https://facebook.com/truemedatingapp'>
                  <FacebookIcon />
                </Facebook>
              </IconContainer>
              <Copy>&copy; {new Date().getFullYear()} Trueme. All rights reserved</Copy>
            </Grid.Column>
          </Grid>
        </Container>
      </FooterContainer>
    )
  }
}

export default Footer
