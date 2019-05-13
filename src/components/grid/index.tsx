import * as React from 'react'
import { grid, IGrid } from '../../styles'
import { GridColumnContainer, GridContainer } from './styles'

interface IGrid {
  children: React.ReactNode[],
  justify: 'start' | 'end' | 'center' | 'stretch' | 'space-around' | 'space-between' | 'space-evenly'
  align: 'start' | 'end' | 'center' | 'stretch' | 'space-around' | 'space-between' | 'space-evenly'
  textAlign: 'left' | 'right' | 'center'
}

interface IGridColumn {
  children: React.ReactNode[],
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

  static Column = ({ children, align, xs, sm, md, lg, xl, xxl }: IGridColumnProps) => {
    return (<GridColumnContainer align={align} xs={xs} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl}>{children}</GridColumnContainer>)
  }

  render() {
    const { children, textAlign, align, justify, xs, sm, md, lg, xl, xxl }: IGridProps = this.props
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
