import styled from 'styled-components'
import Wave from '../../assets/images/illu-wave.svg'
import Sweep from '../../assets/images/illu-sweep.svg'
import { above, spacing } from '../../styles'

const WaveContainer = styled.section`
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
    background-image: url(${Wave});
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

const SweepContainer = styled.section`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;
  flex-direction: column;
  min-height: 120rem;
  margin-bottom: ${spacing.xl};

  ${above.sm`
    min-height: 70rem;
  `}

  ${above.md`
    min-height: 75rem;
  `}

  ${above.lg`
    min-height: 85rem;
  `}

  &::after {
    background-image: url(${Sweep});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    content: '';
    position: absolute;
    height: 120rem;
    width: 100%;
    z-index: -1;

    ${above.sm`
      height: 70rem;
    `}

    ${above.md`
      height: 75rem;
    `}

    ${above.lg`
      height: 85rem;
    `}
  }
`

export {
  WaveContainer,
  SweepContainer,
}
