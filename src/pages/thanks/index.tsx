import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import Button from '../../components/button'
import Footer from '../../components/footer'
import Grid from '../../components/grid'
import Header from '../../components/header'
import { ButtonContainer as HeaderButtonContainer } from '../../components/header/styles'
import Heading from '../../components/heading'
import Modal from '../../components/modal'
import RegisterForm from '../../components/register-form'
import SEO from '../../components/seo'
import Layout from '../../layouts'
import { toggleModal } from '../../state'
import { Container, Copy } from '../../styles/shared'

const encode = (data: any) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const ThanksPage: FC = () => {
  const dispatch = useDispatch()

  const openModal = () => {
    dispatch(toggleModal(true))
  }

  return (
    <Layout>
      <SEO title='Thanks'/>
      <Modal>
        <RegisterForm/>
      </Modal>
      <Header>
        <HeaderButtonContainer>
          <Button onClick={openModal}>Sign up to our private beta</Button>
        </HeaderButtonContainer>
      </Header>
      <Container padding-bottom-xl stretch>
        <Container padding-bottom-xxxl>
          <Grid>
            <Grid.Column xs={{ start: 2, end: 12 }} md={{ start: 5, end: 9 }}>
              <Heading level={1}>Thank you</Heading>
              <Container align='left' padding-top-xl>
                <Copy>We will get back to you as soon as possible</Copy>
              </Container>
            </Grid.Column>
          </Grid>
        </Container>
      </Container>
      <Footer />
    </Layout>
  )
}

export default ThanksPage
