import * as React from 'react'
import Logo from '../../assets/images/logo.inline.svg'
import Button from '../button'
import { ButtonContainer, HeaderContainer, LogoContainer } from './styles'

class Header extends React.Component {
  render() {
    return (
      <HeaderContainer>
        <LogoContainer>
          <Logo/>
        </LogoContainer>
        <ButtonContainer>
          <Button>Sign up today</Button>
        </ButtonContainer>
      </HeaderContainer>
    )
  }
}

export default Header
