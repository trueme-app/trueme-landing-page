import styled from 'styled-components'
import { above, typography } from '../../styles'

const SocialProofContainer = styled.div``

const SocialProofItemContainer = styled.blockquote``

const SocialProofQuoteContainer = styled.p`
  font-family: ${typography.h2.font};
  font-size: ${typography.h2.size.xs};
  font-weight: normal;
  letter-spacing: ${typography.h2.letterSpacing}px;
  line-height: ${typography.h2.lineHeight};
  margin: 1rem 0;
  text-align: center;

  ${Object.keys(typography.h2.size).map((size) =>
    above[size]`
      font-size: ${typography.h2.size[size]};
    `)
  }

  &::before {
    content: '“';
  }

  &::after {
    content: '”';
  }
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
