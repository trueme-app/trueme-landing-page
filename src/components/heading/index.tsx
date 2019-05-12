import * as React from 'react'
import { typography } from '../../styles'
import { HeadingContainer } from './styles'

interface IHeading {
  children: React.ReactNode,
  level: 1 | 2 | 3,
}

class Heading extends React.Component<IHeading> {
  static defaulProps = {
    level: 2
  }

  render() {
    const { level, children } = this.props
    const type = typography[`h${level}`]

    return (
      <HeadingContainer font={type.font} lineHeight={type.lineHeight} letterSpacing={type.letterSpacing} as={`h${level}`}>{children}</HeadingContainer>
    )
  }
}

export default Heading
