import styled, { css } from 'styled-components'
import Footer from '../../assets/images/illu-footer.svg'
import Sweep from '../../assets/images/illu-sweep.svg'
import Wave from '../../assets/images/illu-wave.svg'
import { above, spacing } from '../../styles'

const baseCss = css`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  margin-bottom: ${spacing.lg};
  position: relative;
`

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
  justify-content: center;
  min-height: 115rem;

  ${above.sm`
    min-height: 142rem;
  `}

  ${above.md`
    min-height: 106rem;
  `}

  ${above.xl`
    min-height: 126rem;
  `}

  ${above.xxl`
    min-height: 105vw;
  `}
  /* stylelint-enable */

  &::after {
    /* stylelint-disable */
    ${baseAfterCss}
    background-image: url(${Wave});
    height: 115rem;


    ${above.sm`
      height: 142rem;
    `}

    ${above.md`
      height: 106rem;
    `}

    ${above.xl`
      min-height: 126rem;
    `}

    ${above.xxl`
      min-height: 105vw;
    `}
    /* stylelint-enable */
  }
`

const SweepContainer = styled.section`
  /* stylelint-disable */
  ${baseCss}
  align-items: center;
  min-height: 130rem;

  ${above.sm`
    margin-bottom: ${spacing.xxxxl};
    min-height: 70rem;
  `}

  ${above.lg`
    min-height: 83rem;
  `}

  ${above.xl`
    min-height: 80vw;
  `}

  &::after {
    ${baseAfterCss}
    background-image: url(${Sweep});
    height: 140rem;
    top: -10rem;

    ${above.sm`
      top: -7rem;
      height: 83rem;
    `}

    ${above.md`
      top: -2rem;
    `}

    ${above.xl`
      height: 80vw;
    `}
  }
    /* stylelint-enable */
`


const FooterContainer = styled.section`
  /* stylelint-disable */
  ${baseCss}
  align-items: center;
  min-height: 40rem;
  position: relative;
  top: -2rem;

  ${above.md`
    min-height: 50rem;
  `}

  ${above.lg`
    min-height: 63rem;
  `}

  ${above.xl`
    min-height: 55vw;
  `}

  &::after {
    ${baseAfterCss}
    background-image: url(${Footer});
    height: 40rem;

    ${above.md`
      height: 50rem;
    `}

    ${above.lg`
      height: 63rem;
    `}

    ${above.xl`
      height: 55vw;
    `}
  }
  /* stylelint-enable */
`

export {
  WaveContainer,
  SweepContainer,
  FooterContainer,
}
