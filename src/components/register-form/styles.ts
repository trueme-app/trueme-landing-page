import styled from 'styled-components'
import { above, below, borderRadius, colours, focusState, spacing } from '../../styles'
import { Copy } from '../../styles/shared'

const RegisterFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${spacing.xxxl};
  text-align: center;

  /* stylelint-disable */
  ${above.sm`
    margin-top: ${spacing.xxl};
    width: 45rem;
  `}
  /* stylelint-enable */
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;

  /* stylelint-disable */
  ${below.sm`
    margin-top: ${spacing.xxl};
  `}

  ${above.sm`
    flex-direction: row;
    margin: ${spacing.xxl} 0 ${(props) => props.hasError ? spacing.md : spacing.xxl};
  `}
  /* stylelint-enable */
`

const Input = styled.input`
  border: 1px solid ${(props) => props.hasError ? colours.rose.base : colours.grey.mid};
  border-radius: ${borderRadius.md};
  margin-bottom: ${spacing.lg};
  padding: ${spacing.lg};

  &:focus {
    box-shadow: 0 2px 4px -4px ${colours.green.dark};
    outline: none;
  }

  /* stylelint-disable */
  ${above.sm`
    flex: 2;
    margin-bottom: 0;
    margin-right: ${spacing.lg};
  `}
  /* stylelint-enable */
`

export {
  RegisterFormContainer,
  Form,
  Input,
}
