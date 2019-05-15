import { graphql } from 'gatsby'
import * as React from 'react'
import Dancing from '../assets/images/illu-dancing.inline.svg'
import { Container, Copy, SVGContainer } from '../styles/shared'
import Button from '../components/button'
import { ButtonContainer } from '../components/button/styles'
import Heading from '../components/heading'
import Hero from '../components/hero'
import Grid from '../components/grid'
import SEO from '../components/seo'
import SocialProof from '../components/social-proof'
import Layout from '../layouts'

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title='Home'/>
        <Hero/>
        <Container padding-bottom>
          <Grid>
            <Grid.Column xs={{ start: 2, end: 12 }}>
              <Heading level={1}>Who is Trueme for?</Heading>
            </Grid.Column>
            <Grid.Column align='center' xs={{ start: 3, end: 11 }} sm={{ start: 1, end: 4 }}>
              <div>
                <Heading level={2}>Single Parents</Heading>
                <Copy>People who can share their personal story with confidence</Copy>
              </div>
            </Grid.Column>
            <Grid.Column align='center' xs={{ start: 3, end: 11 }} sm={{ start: 5, end: 9 }}>
              <SVGContainer>
                <Dancing/>
              </SVGContainer>
            </Grid.Column>
            <Grid.Column align='center' xs={{ start: 3, end: 11 }} sm={{ start: 10, end: 13 }}>
              <div>
                <Heading level={2}>Singles or Separated</Heading>
                <Copy>Open-minded people who are happy to accept a little baggage & are seeking companionship.</Copy>
              </div>
            </Grid.Column>
          </Grid>
        </Container>
        <Container padding-top>
          <Grid>
            <Grid.Column xs={{ start: 2, end: 12 }}>
              <Heading level={3}>Hear it from our users</Heading>
            </Grid.Column>
          </Grid>
        </Container>
        <Container>
          <SocialProof>
            <SocialProof.Item>
              <SocialProof.Quote>
                I finally feel like I can share my real story, without fear of judgment or people not accepting who I am
              </SocialProof.Quote>
              <SocialProof.Source>
                Christy, Single Mum
              </SocialProof.Source>
            </SocialProof.Item>
          </SocialProof>
        </Container>
        <Container padding-top>
          <ButtonContainer>
            <Button>Sign Up Today</Button>
          </ButtonContainer>
        </Container>
      </Layout>
    )
  }
}

export default IndexPage
