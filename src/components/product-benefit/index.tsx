import * as React from 'react'
import { grid, IGridConfig } from '../../styles'
import { IGrid, IGridItem } from '../grid'
import { ProductBenefitContainer, ProductBenefitItemContainer } from './styles'

class ProductBenefit extends React.Component<IGrid> {
  static defaultProps = {...grid, ...{
    justify: 'center',
    align: 'start',
    textAlign: 'center',
  }}

  static Item = ({ children, xs, sm, md, lg, xl, xxl }: IGridItem) => (<ProductBenefitItemContainer xs={xs} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl} as='li'><div>{children}</div></ProductBenefitItemContainer>)

  render() {
    const { children, textAlign, align, justify, xs, sm, md, lg, xl, xxl }: IGrid = this.props
    return (<ProductBenefitContainer textAlign={textAlign} align={align} justify={justify} xs={xs} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl} as='ul'>{children}</ProductBenefitContainer>)
  }
}

ProductBenefit.Item.defaultProps = grid

export default ProductBenefit
