import styled from 'styled-components'
import Wave1 from '../../assets/images/illu-wave-1.svg'
import { above, spacing } from '../../styles'
import { SVGContainer } from '../../styles/shared'

const HeroContainer = styled.article`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: flex-start;
  flex-direction: column;
  min-height: 112rem;
  margin-bottom: ${spacing.lg};

  ${above.xs`
    min-height: 132rem;
  `}

  ${above.sm`
    min-height: 142rem;
  `}

  ${above.md`
    min-height: 112rem;
  `}

  ${above.xl`
    min-height: 125rem;
  `}

  &::after {
    background-image: url(${Wave1});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    content: '';
    height: 112rem;
    position: absolute;
    width: 100%;
    z-index: -1;

    ${above.xs`
      height: 132rem;
    `}

    ${above.sm`
      height: 142rem;
    `}

    ${above.md`
      height: 112rem;
    `}

    ${above.xl`
      min-height: 125rem;
    `}
  }
`

const FamilyContainer = styled(SVGContainer)`
  padding: ${spacing.xl} 0;
`

export {
  FamilyContainer,
  HeroContainer,
}
