import styled, { css } from 'styled-components'
import Footer from '../../assets/images/illu-footer.svg'
import Sweep from '../../assets/images/illu-sweep.svg'
import Wave from '../../assets/images/illu-wave.svg'
import { above, spacing } from '../../styles'

const baseCss = css`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  margin-bottom: ${spacing.lg};`

const baseAfterCss = css`
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  content: '';
  position: absolute;
  width: 100%;
  z-index: -1;`

const WaveContainer = styled.section`
  /* stylelint-disable */
  ${baseCss}
  justify-content: flex-start;
  min-height: 112rem;

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
  /* stylelint-enable */

  &::after {
    /* stylelint-disable */
    ${baseAfterCss}
    background-image: url(${Wave});
    height: 112rem;

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
    /* stylelint-enable */
  }
`

const SweepContainer = styled.section`
  /* stylelint-disable */
  ${baseCss}
  min-height: 120rem;

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
    ${baseAfterCss}
    background-image: url(${Sweep});
    height: 120rem;

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
    /* stylelint-enable */
`


const FooterContainer = styled.section`
  /* stylelint-disable */
  ${baseCss}
  min-height: 40rem;

  ${above.md`
    min-height: 50rem;
  `}

  ${above.lg`
    min-height: 70rem;
  `}

  &::after {
    ${baseAfterCss}
    background-image: url(${Footer});
    height: 40rem;

    ${above.md`
      height: 50rem;
    `}

    ${above.lg`
      height: 70rem;
    `}
  }
  /* stylelint-enable */
`

export {
  WaveContainer,
  SweepContainer,
  FooterContainer,
}
