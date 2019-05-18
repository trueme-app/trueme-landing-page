import styled, { css } from 'styled-components'
import { above, colours, spacing } from '../../styles'

const FooterContainer = styled.footer``

const DancingContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -70px;

  ${above.sm`
    justify-content: flex-end;
    margin-top: 0;
  `}
`

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${above.sm`
    justify-content: flex-start;
  `}
`

const InputContainer = styled.p``

const Input = styled.input`
  background-color: transparent;
  border: 0;
  border-bottom: 1px solid ${colours.green.dark};
  box-shadow: 0;
  padding: ${spacing.md} 0;
  width: 100%;

  &::placeholder {
    color ${colours.green.dark};
  }

  &:focus {
    outline: none;
    box-shadow: 0 2px 4px -4px ${colours.green.dark};
  }
`

const IconContainer = styled.div`
  padding: ${spacing.md} 0;
`

const linkCss = css`
  &:hover {
    svg {
      path {
        fill: ${colours.green.base};
      }
      ellipse {
        stroke: ${colours.green.base};
      }
    }
  }
`

const Facebook = styled.a`
  ${linkCss}
`

const Instagram = styled.a`
  margin-right: ${spacing.md};
  ${linkCss}
`

export {
  DancingContainer,
  Facebook,
  FooterContainer,
  FormContainer,
  IconContainer,
  Input,
  InputContainer,
  Instagram,
}
