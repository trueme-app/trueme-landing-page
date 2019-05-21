import * as React from 'react'
import { LoadingContainer, StyledButton, VisibilitySwitcher } from './styles'
import { ClipLoader } from 'react-spinners'
import { colours } from '../../styles'

interface IButton {
  label?: string
  children?: React.ReactNode,
  type?: 'button' | 'a',
}

class Button extends React.Component<IButton> {
  static defaultProps = {
    type: 'button',
  }

  onClick() {
    const { onClick } = this.props

    if (onClick) {
      onClick()
    }
  }

  render() {
    const { label, children, type, loading }: IButton = this.props

    return (
      <StyledButton {...this.props} onClick={() => this.onClick()} as={type}>
        <VisibilitySwitcher visible={loading}>
          <LoadingContainer>
            <ClipLoader size={16} loading={loading} color={colours.grey.light}/>
          </LoadingContainer>
        </VisibilitySwitcher>
        <VisibilitySwitcher visible={!loading}>
          {(label || children)}
        </VisibilitySwitcher>
      </StyledButton>
    )
  }
}

export default Button
