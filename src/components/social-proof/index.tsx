import * as React from 'react'
import { SocialProofContainer, SocialProofItemContainer, SocialProofQuoteContainer, SocialProofSourceContainer } from './styles'

interface ISocialProof {
  children?: SocialProof.Item[],
}

interface ISocialProofItem {
  children?: React.ReactNode[]
}

class SocialProof extends React.Component<ISocialProof> {
  static Item = ({ children }: ISocialProofItem) => (<SocialProofItemContainer>{children}</SocialProofItemContainer>)
  static Quote = ({ children }: ISocialProofItem) => (<SocialProofQuoteContainer>{children}</SocialProofQuoteContainer>)
  static Source = ({ children }: ISocialProofItem) => (<SocialProofSourceContainer>{children}</SocialProofSourceContainer>)

  render() {
    const { children }: ISocialProofItem = this.props
    return(<SocialProofContainer>{children}</SocialProofContainer>)
  }
}

export default SocialProof
