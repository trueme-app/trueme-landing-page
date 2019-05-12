import styled from 'styled-components'
import Wave1 from '../../assets/images/illu-wave-1.svg'
import { above, spacing } from '../../styles'

const HeroContainer = styled.article`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;
  flex-direction: column;

  &::after {
    background-image: url(${Wave1});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    content: '';
    height: 220vh;
    position: absolute;
    width: 100%;
    z-index: -1;

    ${above.sm`
      height: 200vh;
    `}
  }
`

const ButtonContainer = styled.div`
  margin: ${spacing.lg} 0;
`

const FamilyContainer = styled.div`
  display: flex;
  padding: ${spacing.xl} 0;

  svg {
    width: 100%;
    height: 100%;
  }
`

export {
  ButtonContainer,
  FamilyContainer,
  HeroContainer,
}
