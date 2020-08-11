import * as React from 'react'
import { typography } from '../../styles'
import { HeadingContainer } from './styles'

interface IHeading {
  children: React.ReactNode,
  level: 1 | 2 | 3 | 4,
  colour?: 'grey' | 'green',
  variant?: 'dark' | 'light',
  as?: 1 | 2 | 3 | 4,
}

class Heading extends React.Component<IHeading> {
  static defaulProps = {
    level: 2,
    colour: 'green',
    variant: 'dark',
    as: 2,
  }

  render() {
    const { level, children, colour, variant, as } = this.props
    const type = typography[`h${as && level !== as ? as : level}`]

    return (
      <HeadingContainer variant={variant} colour={colour} size={type.size} font={type.font} lineHeight={type.lineHeight} letterSpacing={type.letterSpacing} as={`h${level}`}>{children}</HeadingContainer>
    )
  }
}

export default Heading
