import * as React from 'react'
import { StyledButton } from './styles'

interface IButton {
  label?: string
  children?: React.ReactNode,
  type?: 'button' | 'a',
  hideXs?: boolean,
  hideSm?: boolean,
  hideMd?: boolean,
  hideLg?: boolean,
  hideXl?: boolean,
}

class Button extends React.Component<IButton> {
  static defaultProps = {
    type: 'button',
    hideXs: false,
    hideSm: false,
    hideMd: false,
    hideLg: false,
    hideXl: false,
  }

  render() {
    const { label, children, type, hideXs, hideSm, hideMd, hideLg, hideXl }: IButton = this.props

    return (
      <StyledButton as={type} hideXs={hideXs} hideSm={hideSm} hideMd={hideMd} hideLg={hideLg} hideXl={hideXl}>{label || children}</StyledButton>
    )
  }
}

export default Button
