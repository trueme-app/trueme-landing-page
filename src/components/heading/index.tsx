import * as React from 'react'
import { typography } from '../../styles'
import { HeadingContainer } from './styles'

interface IHeading {
  children: React.ReactNode,
  level: 1 | 2 | 3,
  colour: 'grey' | 'green',
  variant: 'dark' | 'light',
}

class Heading extends React.Component<IHeading> {
  static defaulProps = {
    level: 2,
    colour: 'green',
    variant: 'dark',
  }

  render() {
    const { level, children, colour, variant } = this.props
    const type = typography[`h${level}`]

    return (
      <HeadingContainer variant={variant} colour={colour} size={type.size} font={type.font} lineHeight={type.lineHeight} letterSpacing={type.letterSpacing} as={`h${level}`}>{children}</HeadingContainer>
    )
  }
}

export default Heading
