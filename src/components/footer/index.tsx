import * as React from 'react'
import Dancing from '../../assets/images/illu-dancing-2.inline.svg'
import FacebookIcon from '../../assets/images/icon-facebook.inline.svg'
import InstagramIcon from '../../assets/images/icon-instagram.inline.svg'
import { DancingContainer, Facebook, FooterContainer, FormContainer, IconContainer, Input, InputContainer, Instagram } from './styles'
import Grid from '../grid'
import Heading from '../heading'
import { Container, Copy } from '../../styles/shared'

class Footer extends React.Component {
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
              <FormContainer>
                <Heading level={2}>Sign-up to our newsletter to receive tips & advice, tailored for you</Heading>
                <InputContainer>
                  <Input placeholder='Enter your email address' />
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
