import * as React from 'react'
import { grid, IGrid } from '../../styles'
import { ValuePropContainer, ValuePropItemContainer } from './styles'

interface IValueProp {
  children?: React.ReactNode[],
  justify: 'start' | 'end' | 'center' | 'stretch' | 'space-around' | 'space-between' | 'space-evenly',
  align: 'start' | 'end' | 'center' | 'stretch' | 'space-around' | 'space-between' | 'space-evenly',
  textAlign: 'left' | 'right' | 'center',
  xs?: IGrid,
  sm?: IGrid,
  md?: IGrid,
  lg?: IGrid,
  xl?: IGrid,
  xxl?: IGrid,
}

interface IValuePropItem {
  children?: React.ReactNode[],
  xs?: IGrid,
  sm?: IGrid,
  md?: IGrid,
  lg?: IGrid,
  xl?: IGrid,
  xxl?: IGrid,
}

class ValueProp extends React.Component<IValueProp> {
  static defaultProps = {
    justify: 'center',
    align: 'start',
    textAlign: 'center',
    xs: grid.xs,
    sm: grid.sm,
    md: grid.md,
    lg: grid.lg,
    xl: grid.xl,
    xxl: grid.xxl,
  }

  static Item = ({ children, xs, sm, md, lg, xl, xxl }: IValuePropItem) => (<ValuePropItemContainer xs={xs} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl} as='li'>{children}</ValuePropItemContainer>)

  render() {
    const { children, textAlign, align, justify, xs, sm, md, lg, xl, xxl }: IValueProp = this.props
    return (<ValuePropContainer textAlign={textAlign} align={align} justify={justify} xs={xs} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl} as='ul'>{children}</ValuePropContainer>)
  }
}

ValueProp.Item.defaultProps = {
  xs: grid.xs,
  sm: grid.sm,
  md: grid.md,
  lg: grid.lg,
  xl: grid.xl,
  xxl: grid.xxl,
}

export default ValueProp
