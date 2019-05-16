import { graphql } from 'gatsby'
import * as React from 'react'
import Dancing from '../assets/images/illu-dancing.inline.svg'
import Family from '../assets/images/illu-family.inline.svg'
import AdviceIcon from '../assets/images/icon-advice.inline.svg'
import FriendshipIcon from '../assets/images/icon-friendship.inline.svg'
import LoveIcon from '../assets/images/icon-love.inline.svg'
import { Container, Copy, SVGContainer } from '../styles/shared'
import Block from '../components/block'
import Button from '../components/button'
import { ButtonContainer } from '../components/button/styles'
import Heading from '../components/heading'
import Hero from '../components/hero'
import Grid from '../components/grid'
import ProductBenefit from '../components/product-benefit'
import SEO from '../components/seo'
import SocialProof from '../components/social-proof'
import ValueProp from '../components/value-prop'
import Layout from '../layouts'

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title='Home'/>
        <Container>
          <Block type='wave'>
            <Grid>
              <Grid.Column xs={{ start: 2, end: 12 }} md={{ start: 3, end: 11 }}>
                <Heading level={1}>We know it’s tough to meet someone new as a single-parent. Luckily, we’ve changed that.</Heading>
              </Grid.Column>
            </Grid>
            <Grid>
              <Grid.Column xs={{ start: 2, end: 12 }} md={{ start: 5, end: 9 }}>
                <Heading level={3}>A mature way to discover, connect & meet people who understand your unique situation.</Heading>
              </Grid.Column>
            </Grid>
            <Container padding-top>
              <Button hideMd={true}>Sign up today</Button>
            </Container>
            <Grid>
              <Grid.Column xs={{ start: 2, end: 11 }} md={{ start: 4, end: 9 }}>
                <SVGContainer padding-top-xl>
                  <Family/>
                </SVGContainer>
              </Grid.Column>
            </Grid>
            <Grid>
              <Grid.Column xs={{ start: 2, end: 12 }} md={{ start: 3, end: 11 }}>
                <Heading level={1}>Are you frustrated with the current ways to meet new people?</Heading>
              </Grid.Column>
            </Grid>
            <Grid>
              <Grid.Column>
                <ValueProp>
                  <ValueProp.Item xs={{ start: 2, end: 12 }} md={{ start: 1, end: 5 }}>Fear of sharing your personal circumstance</ValueProp.Item>
                  <ValueProp.Item xs={{ start: 2, end: 12 }} md={{ start: 5, end: 9 }}>People who don't share your values</ValueProp.Item>
                  <ValueProp.Item xs={{ start: 2, end: 12 }} md={{ start: 9, end: 13 }}>Fake profiles</ValueProp.Item>
                  <ValueProp.Item xs={{ start: 2, end: 12 }} md={{ start: 1, end: 5 }}>Endless swiping</ValueProp.Item>
                  <ValueProp.Item xs={{ start: 2, end: 12 }} md={{ start: 5, end: 9 }}>Ghosting</ValueProp.Item>
                  <ValueProp.Item xs={{ start: 2, end: 12 }} md={{ start: 9, end: 13 }}>Hook-ups, not meaningful connections</ValueProp.Item>
                </ValueProp>
              </Grid.Column>
            </Grid>
            <Button>Sign up today</Button>
          </Block>
        </Container>
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
        <Block type='sweep'>
          <Grid>
            <Grid.Column xs={{ start: 2, end: 12 }}>
              <Heading level={1}>Why do so many choose Trueme?</Heading>
              <ProductBenefit>
                <ProductBenefit.Item align='flex-end' xs={{ start: 2, end: 12 }} sm={{ start: 1, end: 5 }}>
                  <AdviceIcon/>
                  <Heading level={2}>Advice</Heading>
                  <Copy>Ask the questions you want to ask people who have been through your situation. Support & advice from our community.</Copy>
                </ProductBenefit.Item>
                <ProductBenefit.Item xs={{ start: 2, end: 12 }} sm={{ start: 5, end: 9 }}>
                  <FriendshipIcon/>
                  <Heading level={2}>Friendship</Heading>
                  <Copy>Form lifelong bonds with people who share your values & experiences.</Copy>
                </ProductBenefit.Item>
                <ProductBenefit.Item xs={{ start: 2, end: 12 }} sm={{ start: 9, end: 13 }}>
                  <LoveIcon/>
                  <Heading level={2}>Love</Heading>
                  <Copy>Create meaningful relationships with people who are seeking long-term commitment & companionship.</Copy>
                </ProductBenefit.Item>
              </ProductBenefit>
            </Grid.Column>
          </Grid>
          <Button>Sign Up Today</Button>
        </Block>
      </Layout>
    )
  }
}

export default IndexPage
