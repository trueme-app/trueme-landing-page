import * as React from 'react'
import { grid, IGridConfig } from '../../styles'
import { IGrid, IGridItem } from '../grid'
import { ValuePropContainer, ValuePropItemContainer } from './styles'

class ValueProp extends React.Component<IGrid> {
  static defaultProps = {...grid, ...{
    justify: 'center',
    align: 'start',
    textAlign: 'center',
  }}

  static Item = ({ children, xs, sm, md, lg, xl, xxl }: IGridItem) => (<ValuePropItemContainer xs={xs} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl} as='li'>{children}</ValuePropItemContainer>)

  render() {
    const { children, textAlign, align, justify, xs, sm, md, lg, xl, xxl }: IGrid = this.props
    return (<ValuePropContainer textAlign={textAlign} align={align} justify={justify} xs={xs} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl} as='ul'>{children}</ValuePropContainer>)
  }
}

ValueProp.Item.defaultProps = grid

export default ValueProp
