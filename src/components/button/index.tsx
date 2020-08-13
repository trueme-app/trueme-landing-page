import * as React from 'react'
import { ClipLoader } from 'react-spinners'
import { colours } from '../../styles'
import { LoadingContainer, StyledButton, VisibilitySwitcher } from './styles'

interface IButton {
  label?: string
  children?: React.ReactNode,
  as?: 'button' | 'a',
  onClick: () => void
  loading?: boolean
}

class Button extends React.Component<IButton> {
  static defaultProps = {
    as: 'button',
    loading: false,
  }

  onClick = () => {
    const { onClick } = this.props

    if (onClick) {
      onClick()
    }
  }

  render() {
    const { label, children, as, loading }: IButton = this.props

    return (
      <StyledButton {...this.props} onClick={this.onClick} as={as}>
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
