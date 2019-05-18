import styled from 'styled-components'
import { above, colours, spacing } from '../../styles'
import { UnstyledList } from '../../styles/shared'
import { GridColumnContainer, GridContainer } from '../grid/styles'

const ProductBenefitContainer = styled(GridContainer)`
  list-style: none;
  margin: 0;
  padding: ${spacing.xl} 0!important;
`
const ProductBenefitItemContainer = styled(GridColumnContainer)`
  align-items: flex-start;
  padding: ${spacing.lg} 0;

  ${above.sm`
    margin: ${spacing.sm};
  `}

  ${above.md`
    margin: ${spacing.md};
  `}
`

export {
  ProductBenefitContainer,
  ProductBenefitItemContainer,
}
