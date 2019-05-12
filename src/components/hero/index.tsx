import * as React from 'react'
import Family from '../../assets/images/illu-family.inline.svg'
import { Container } from '../../styles/shared'
import Button from '../button'
import Grid from '../grid'
import Heading from '../heading'
import ValueProp from '../value-prop'
import { ButtonContainer, FamilyContainer, HeroContainer } from './styles'

class Hero extends React.Component {
  render() {
    return (
      <Container>
        <HeroContainer>
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
          <ButtonContainer>
            <Button hideMd={true}>Sign up today</Button>
          </ButtonContainer>
          <Grid>
            <Grid.Column xs={{ start: 2, end: 11 }} md={{ start: 4, end: 9 }}>
              <FamilyContainer>
                <Family/>
              </FamilyContainer>
            </Grid.Column>
          </Grid>
          <Grid>
            <Grid.Column xs={{ start: 2, end: 12 }} md={{ start: 4, end: 10 }}>
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
        </HeroContainer>
      </Container>
    )
  }
}

export default Hero
