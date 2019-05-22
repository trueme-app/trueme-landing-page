import styled from 'styled-components'
import { above, typography } from '../../styles'

const SocialProofContainer = styled.div``

const SocialProofItemContainer = styled.blockquote``

const SocialProofQuoteContainer = styled.p`
  font-family: ${typography.h1.font};
  font-size: ${typography.h1.size.xs};
  font-weight: normal;
  letter-spacing: ${typography.h1.letterSpacing}px;
  line-height: ${typography.h1.lineHeight};
  margin: 1rem 0;
  text-align: center;

  &::before {
    content: '“';
  }

  &::after {
    content: '”';
  }

  /* stylelint-disable */
  ${Object.keys(typography.h1.size).map((size) =>
    above[size]`
      font-size: ${typography.h1.size[size]};
    `)
  }
  /* stylelint-enable */
`

const SocialProofSourceContainer = styled.footer`
  text-align: center;

  &::before {
    content: '— ';
  }
`

export {
  SocialProofContainer,
  SocialProofItemContainer,
  SocialProofQuoteContainer,
  SocialProofSourceContainer,
}
