import * as React from 'react'
import FacebookIcon from '../../assets/images/icon-facebook.inline.svg'
import InstagramIcon from '../../assets/images/icon-instagram.inline.svg'
import Dancing from '../../assets/images/illu-dancing-2.inline.svg'
import { EMAIL_REGEX, REGISTRATION_URL } from '../../constants'
import DatabaseService from '../../services/database'
import { Container, Copy } from '../../styles/shared'
import Grid from '../grid'
import Heading from '../heading'
import { DancingContainer, Facebook, FooterContainer, FormContainer, IconContainer, Input, InputContainer, Instagram } from './styles'

class Footer extends React.Component {
  constructor() {
    super()
    this.state = {
      loading: false,
      isEmailValid: false,
      email: '',
    }
  }

  onSubmit = async (e) => {
    this.setState({ loading: true })
    e.preventDefault()

    try {
      const result = await DatabaseService.setRegistration(this.state.email)
      window.open(REGISTRATION_URL)
    } catch(ex) {
      // TODO
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
            <Grid.Column order-sm={2} xs={{ start: 3, end: 12 }} sm={{ start: 7, end: 13 }}>
              <DancingContainer>
                <Dancing/>
              </DancingContainer>
            </Grid.Column>
            <Grid.Column order-sm={1} xs={{ start: 2, end: 12}} sm={{ start: 1, end: 7 }}>
              <FormContainer onSubmit={this.onSubmit}>
                <Heading level={2}>Sign-up to our newsletter to receive tips & advice, tailored for you</Heading>
                <InputContainer>
                  <Input type='email' onChange={this.onChange} placeholder='Enter your email address' />
                </InputContainer>
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
