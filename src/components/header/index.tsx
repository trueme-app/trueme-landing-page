import React, { FC } from 'react'
import Logo from '../../assets/images/logo.inline.svg'
import { HeaderContainer, LogoContainer } from './styles'

const Header: FC = ({ children }) => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo/>
      </LogoContainer>
      {children}
    </HeaderContainer>
  )
}

export default Header
