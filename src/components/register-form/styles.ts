import styled from 'styled-components'
import { above, below, borderRadius, colours, focusState, spacing } from '../../styles'

const RegisterFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: ${spacing.xxl};
  text-align: center;

  ${above.sm`
    width: 45rem;
  `}
`

const Form = styled.div`
  display: flex;
  font-size: 1.2rem;
  flex-direction: column;

  ${below.sm`
    margin-top: ${spacing.xxl};
  `}

  ${above.sm`
    flex-direction: row;
    margin: ${spacing.xl} 0;
  `}
`

const Input = styled.input`
  border-radius: ${borderRadius.md};
  border: 1px solid ${colours.grey.mid};
  padding: ${spacing.lg};
  margin-bottom: ${spacing.lg};

  &:focus {
    outline: none;
    box-shadow: 0 2px 4px -4px ${colours.green.dark};
  }

  ${above.sm`
    flex: 2;
    margin-bottom: 0;
    margin-right: ${spacing.lg};
  `}
`

export {
  RegisterFormContainer,
  Form,
  Input,
}
