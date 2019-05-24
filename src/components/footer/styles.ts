import styled, { css } from 'styled-components'
import { above, colours, spacing } from '../../styles'

const FooterContainer = styled.footer`
  padding-bottom: ${spacing.xxl};
`

const DancingContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -70px;

  ${above.sm`
    justify-content: flex-end;
    margin-top: -55px;
  `}

  ${above.md`
    margin-top: -40px;
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

const InputContainer = styled.div`
  position: relative;
`

const Input = styled.input`
  background-color: transparent;
  border: 0;
  border-bottom: 1px solid ${colours.green.dark};
  border-radius: 0;
  box-shadow: 0;
  padding: ${spacing.md} 0;
  width: 100%;

  &::placeholder {
    color: ${colours.green.dark};
  }

  &:focus {
    box-shadow: 0 2px 4px -4px ${colours.green.dark};
    outline: none;
  }
`

const IconContainer = styled.div`
  padding: ${spacing.md} 0;
`

const linkCss = css`
  &:hover,
  &:focus {
    outline: none;

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

const IconSubmitButton = styled.button`
  background: none;
  border: none;
  bottom: ${spacing.sm};
  margin: 0;
  padding: 0;
  position: absolute;
  right: 0;

  /* stylelint-disable */
  ${(props) => props.disabled ? `
    opacity: 0;
    pointer-events: none;
  ` : ``}
  /* stylelint-enable */

  &:focus {
    outline: none;
    svg {
      path,
      polyline {
        stroke: ${colours.green.base};
      }
    }
  }
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
  IconSubmitButton,
}
