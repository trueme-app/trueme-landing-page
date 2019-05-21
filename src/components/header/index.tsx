import * as React from 'react'
import Logo from '../../assets/images/logo.inline.svg'
import Button from '../button'
import { ButtonContainer, HeaderContainer, LogoContainer } from './styles'

interface IHeader {
  children?: React.ReactNode[]
}

class Header extends React.Component<IHeader> {
  render() {
    const { children } = this.props
    return (
      <HeaderContainer>
        <LogoContainer>
          <Logo/>
        </LogoContainer>
        {children}
      </HeaderContainer>
    )
  }
}

export default Header
