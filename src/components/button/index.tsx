import * as React from 'react'
import { ClipLoader } from 'react-spinners'
import { colours } from '../../styles'
import { LoadingContainer, StyledButton, VisibilitySwitcher } from './styles'

interface IButton {
  label?: string
  children?: React.ReactNode,
  htmlType?: 'button' | 'a',
}

class Button extends React.Component<IButton> {
  static defaultProps = {
    htmlType: 'button',
  }

  onClick = () => {
    const { onClick } = this.props

    if (onClick) {
      onClick()
    }
  }

  render() {
    const { label, children, htmlType, loading }: IButton = this.props

    return (
      <StyledButton {...this.props} onClick={this.onClick} as={htmlType}>
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
