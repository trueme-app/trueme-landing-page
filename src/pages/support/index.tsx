import { navigate } from 'gatsby'
import React, { ChangeEvent, FC, FormEvent, useState } from 'react'
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
import { Container, Copy, TextInput, TextArea, ErrorMessage } from '../../styles/shared'

const encode = (data: any) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const SupportPage: FC = () => {
  const [state, setState] = useState({})
  const [errorState, setErrorState] = useState<string | undefined>()
  const dispatch = useDispatch()

  const openModal = () => {
    dispatch(toggleModal(true))
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!e.target) {
      return
    }
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form: HTMLFormElement = e.target as HTMLFormElement

    try {
      const result = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': form.getAttribute('name'),
          ...state,
        }),
      })
      navigate(`${form.getAttribute('action')}`)
    } catch (ex) {
      setErrorState('An error occurred when submitting the form')
    }
  }

  return (
    <Layout>
      <SEO title='Support'/>
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
              <Heading level={1}>Support</Heading>
              <Container align='left' padding-top-xl>
                <form
                  name='Support'
                  method='POST'
                  action='/thanks/'
                  data-netlify='true'
                  data-netlify-honeypot='bot-field'
                  onSubmit={handleSubmit}
                >
                  <input type='hidden' name='form-name' value='Support' />
                  <Copy hidden>
                    <label htmlFor='bot-field'>
                      Don’t fill this out: <input name='bot-field' onChange={handleChange} />
                    </label>
                  </Copy>
                  <Copy>
                    <TextInput type='input' placeholder='Your name' name='name' onChange={handleChange} />
                    <TextInput type='email' placeholder='Email Address' name='email' onChange={handleChange} />
                    <TextInput type='phone' placeholder='Phone Number' name='phone' onChange={handleChange} />
                    <TextArea rows={4} placeholder='Your Message' name='message' onChange={handleChange} />
                    <Button style={{ width: '100%' }} htmlType='submit'>Submit</Button>
                  </Copy>
                  {errorState && (
                  <Container>
                    <ErrorMessage>{errorState}</ErrorMessage>
                  </Container>
                  )}
                </form>
              </Container>
            </Grid.Column>
          </Grid>
        </Container>
      </Container>
      <Footer />
    </Layout>
  )
}

export default SupportPage
