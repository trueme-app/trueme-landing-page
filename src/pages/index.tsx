import { graphql } from 'gatsby'
import * as React from 'react'
import { connect } from 'react-redux'
import AdviceIcon from '../assets/images/icon-advice.inline.svg'
import DateIcon from '../assets/images/icon-dates.inline.svg'
import FiltersIcon from '../assets/images/icon-filters.inline.svg'
import FriendshipIcon from '../assets/images/icon-friendship.inline.svg'
import LoveIcon from '../assets/images/icon-love.inline.svg'
import MatchIcon from '../assets/images/icon-match.inline.svg'
import ReviewIcon from '../assets/images/icon-review.inline.svg'
import Dancing from '../assets/images/illu-dancing.inline.svg'
import Family from '../assets/images/illu-family.inline.svg'
import Block from '../components/block'
import Button from '../components/button'
import { ButtonContainer } from '../components/button/styles'
import Footer from '../components/footer'
import Grid from '../components/grid'
import Header from '../components/header'
import { ButtonContainer as HeaderButtonContainer } from '../components/header/styles'
import Heading from '../components/heading'
import Hero from '../components/hero'
import Modal from '../components/modal'
import ProductBenefit from '../components/product-benefit'
import RegisterForm from '../components/register-form'
import SEO from '../components/seo'
import SocialProof from '../components/social-proof'
import ValueProp from '../components/value-prop'
import Layout from '../layouts'
import { Container, Copy, SpaceContainer, SVGContainer } from '../styles/shared'

class IndexPage extends React.Component {
  constructor() {
    super()
  }

  openModal = () => {
    const { toggleModal } = this.props
    toggleModal(true)
  }

  render() {
    return (
      <Layout>
        <SEO title='For single-parents to connect & find love'/>
        <Modal>
          <RegisterForm/>
        </Modal>
        <Header>
          <HeaderButtonContainer>
            <Button onClick={this.openModal}>Sign up today</Button>
          </HeaderButtonContainer>
        </Header>
        <Block type='wave'>
          <Container padding-bottom-xl>
            <Grid>
              <Grid.Column xs={{ start: 2, end: 12 }} md={{ start: 3, end: 11 }}>
                <Heading level={1}>We know it’s tough to meet someone new as a single-parent. Luckily, we’ve changed that.</Heading>
              </Grid.Column>
            </Grid>
            <Grid>
              <Grid.Column xs={{ start: 2, end: 12 }} md={{ start: 4, end: 10 }}>
                <Heading level={4}>A mature way to discover, connect & meet people who understand your unique situation.</Heading>
              </Grid.Column>
            </Grid>
            <Container padding-top-md>
              <Button hideMd={true} onClick={this.openModal}>Sign up today</Button>
            </Container>
            <Grid>
              <Grid.Column xs={{ start: 2, end: 11 }} md={{ start: 4, end: 9 }}>
                <SVGContainer padding-top-xl padding-bottom-xl>
                  <Family/>
                </SVGContainer>
              </Grid.Column>
            </Grid>
            <SpaceContainer>
              <Grid>
                <Grid.Column xs={{ start: 2, end: 12 }} md={{ start: 3, end: 11 }}>
                  <Heading level={1}>Are you frustrated with the current ways to meet new people?</Heading>
                </Grid.Column>
              </Grid>
              <Container>
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
              </Container>
              <Container padding-bottom-xxl>
                <Button onClick={this.openModal}>Sign up today</Button>
              </Container>
            </SpaceContainer>
          </Container>
        </Block>
        <Container padding-top-lg padding-bottom-xl>
          <Grid>
            <Grid.Column xs={{ start: 2, end: 12 }}>
              <Container padding-bottom-lg>
                <Heading level={1}>Who is Trueme for?</Heading>
              </Container>
            </Grid.Column>
            <Grid.Column align='center' xs={{ start: 3, end: 11 }} sm={{ start: 1, end: 4 }}>
              <Container>
                <Heading level={3}>Single Parents</Heading>
                <Copy>People who can share their personal story with confidence</Copy>
              </Container>
            </Grid.Column>
            <Grid.Column align='center' xs={{ start: 3, end: 11 }} sm={{ start: 5, end: 9 }}>
              <SVGContainer>
                <Dancing/>
              </SVGContainer>
            </Grid.Column>
            <Grid.Column align='center' xs={{ start: 3, end: 11 }} sm={{ start: 10, end: 13 }}>
              <Container>
                <Heading level={3}>Singles or Separated</Heading>
                <Copy>Open-minded people who are happy to accept a little baggage & are seeking companionship.</Copy>
              </Container>
            </Grid.Column>
          </Grid>
        </Container>
        <Container padding-top>
          <Grid>
            <Grid.Column xs={{ start: 2, end: 12 }}>
              <Heading level={4}>Hear it from our users</Heading>
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
                Christie, Single Mum
              </SocialProof.Source>
            </SocialProof.Item>
          </SocialProof>
        </Container>
        <Container padding-top-lg>
          <ButtonContainer padding-top-lg>
            <Button onClick={this.openModal}>Sign Up Today</Button>
          </ButtonContainer>
        </Container>
        <Block type='sweep'>
          <SpaceContainer>
            <Container padding-top-xxxl>
              <Grid>
                <Grid.Column xs={{ start: 2, end: 12 }}>
                  <Heading level={1}>Why do so many choose Trueme?</Heading>
                  <Container padding-top-lg>
                    <ProductBenefit>
                      <ProductBenefit.Item xs={{ start: 2, end: 12 }} sm={{ start: 1, end: 5 }}>
                        <AdviceIcon/>
                        <Container margin-top-lg>
                          <Heading level={2}>Advice</Heading>
                          <Copy>Ask the questions you want to ask people who have been through your situation. Support & advice from our community.</Copy>
                        </Container>
                      </ProductBenefit.Item>
                      <ProductBenefit.Item xs={{ start: 2, end: 12 }} sm={{ start: 5, end: 9 }}>
                        <FriendshipIcon/>
                        <Container margin-top-lg>
                          <Heading level={2}>Friendship</Heading>
                          <Copy>Form lifelong bonds with people who share your values & experiences.</Copy>
                        </Container>
                      </ProductBenefit.Item>
                      <ProductBenefit.Item xs={{ start: 2, end: 12 }} sm={{ start: 9, end: 13 }}>
                        <LoveIcon/>
                        <Container margin-top-lg>
                          <Heading level={2}>Love</Heading>
                          <Copy>Create meaningful relationships with people who are seeking long-term commitment & companionship.</Copy>
                        </Container>
                      </ProductBenefit.Item>
                    </ProductBenefit>
                  </Container>
                </Grid.Column>
              </Grid>
              <Button onClick={this.openModal}>Sign Up Today</Button>
            </Container>
          </SpaceContainer>
        </Block>
        <Container padding-bottom-xl>
          <Grid>
            <Grid.Column xs={{ start: 2, end: 12 }} sm={{ start: 3, end: 11 }}>
              <Heading level={1}>Why is Trueme so different?</Heading>
              <Container padding-top-lg>
                <Copy>
                  The Trueme relationship platform allows people to show who they really are,
                  without fear of rejection or judgement. We embrace single-parents or people willing
                  to accept a little baggage, because we want to share your unique story. Feel safe to
                  be yourself & take your time to make meaningful connections. We’re with you every
                  step of the way.
                </Copy>
                <Copy bold>
                  To provide the best experience for you, we also:
                </Copy>
              </Container>
            </Grid.Column>
          </Grid>
          <ProductBenefit>
            <ProductBenefit.Item xs={{ start: 2, end: 12 }} sm={{ start: 3, end: 7 }}>
              <FiltersIcon/>
              <Heading level={2}>No Filters</Heading>
              <Copy>Only allow profile pictures without filters</Copy>
            </ProductBenefit.Item>
            <ProductBenefit.Item xs={{ start: 2, end: 12 }} sm={{ start: 7, end: 11 }}>
              <ReviewIcon/>
              <Heading level={2}>Q&A</Heading>
              <Copy>Thoroughly review all new members</Copy>
            </ProductBenefit.Item>
            <ProductBenefit.Item xs={{ start: 2, end: 12 }} sm={{ start: 3, end: 7 }}>
              <MatchIcon/>
              <Heading level={2}>We do the matching</Heading>
              <Copy>Help you determine if someone is a good match for you</Copy>
            </ProductBenefit.Item>
            <ProductBenefit.Item xs={{ start: 2, end: 12 }} sm={{ start: 7, end: 11 }}>
              <DateIcon/>
              <Heading level={2}>Schedule Dates</Heading>
              <Copy>Help schedule dates based on your availability</Copy>
            </ProductBenefit.Item>
          </ProductBenefit>
          <Button onClick={this.openModal}>Sign Up Today</Button>
        </Container>
        <Block type='footer'>
          <SpaceContainer>
            <Container padding-top-xxxl>
              <Grid>
                <Grid.Column xs={{ start: 2, end: 12 }} sm={{ start: 1, end: 13 }} md={{ start: 3, end: 11 }}>
                  <Heading level={1} colour='grey' variant='light'>Become a foundation member & receive lifetime access for <strong className='green'>FREE</strong>.</Heading>
                  <Copy colour='grey' variant='light'>Exclusive to the first 1000 members.</Copy>
                  <ButtonContainer margin-top-xl>
                    <Button onClick={this.openModal}>Sign Up Today</Button>
                  </ButtonContainer>
                </Grid.Column>
              </Grid>
            </Container>
          </SpaceContainer>
        </Block>
        <Footer/>
      </Layout>
    )
  }
}


const mapStateToProps = state => {
  return {
    modal: {
      isOpen: state.modal.open,
    }
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
)(IndexPage)
