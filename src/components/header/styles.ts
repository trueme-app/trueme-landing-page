import styled from 'styled-components'
import { above, spacing } from '../../styles'
import { Container } from '../../styles/shared'

const HeaderContainer = styled(Container)`
  flex-direction: row;
  justify-content: center;
  padding: ${spacing.lg};

  /* stylelint-disable */
  ${above.sm`
    justify-content: space-between;
    padding: ${spacing.lg};
  `}
  /* stylelint-enable */
`

const LogoContainer = styled.div`
  display: flex;
`

const ButtonContainer = styled.div`
  display: none;

  ${above.sm`
    display: flex;
  `}
`

export {
  HeaderContainer,
  ButtonContainer,
  LogoContainer,
}
