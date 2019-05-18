import * as React from 'react'
import { grid, IGrid } from '../../styles'
import { GridColumnContainer, GridContainer } from './styles'

interface IGrid {
  children: React.ReactNode[],
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

interface IGridColumn {
  children?: React.ReactNode[],
  orderXs?: number,
  orderSm?: number,
  orderMd?: number,
  orderLg?: number,
  orderXl?: number,
  orderXxl?: number,
  xs?: IGrid,
  sm?: IGrid,
  md?: IGrid,
  lg?: IGrid,
  xl?: IGrid,
  xxl?: IGrid,
}

class Grid extends React.Component<IGrid> {
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

  static Column = ({
      children,
      'order-xs': orderXs,
      'order-sm': orderSm,
      'order-md': orderMd,
      'order-lg': orderLg,
      'order-xl': orderXl,
      'order-xxl': orderXxl,
      align,
      xs,
      sm,
      md,
      lg,
      xl,
      xxl
    }: IGridColumnProps) => {
    return (<GridColumnContainer
      orderXs={orderXs}
      orderSm={orderSm}
      orderMd={orderMd}
      orderLg={orderLg}
      orderXl={orderXl}
      orderXxl={orderXxl}
      align={align}
      xs={xs}
      sm={sm}
      md={md}
      lg={lg}
      xl={xl}
      xxl={xxl}>{children}</GridColumnContainer>)
  }

  render() {
    const { children, textAlign, align, justify, xs, sm, md, lg, xl, xxl }: IGrid = this.props
    return (<GridContainer textAlign={textAlign} align={align} justify={justify} xs={xs} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl}>{children}</GridContainer>)
  }
}

Grid.Column.defaultProps = {
  align: 'start',
  xs: grid.xs,
  sm: grid.sm,
  md: grid.md,
  lg: grid.lg,
  xl: grid.xl,
  xxl: grid.xxl,
}

export default Grid
