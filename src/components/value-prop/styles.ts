import styled from 'styled-components'
import { above, colours, spacing } from '../../styles'
import { UnstyledList } from '../../styles/shared'
import { GridColumnContainer, GridContainer } from '../grid/styles'

const ValuePropContainer = styled(GridContainer)`
  list-style: none;
  margin: 0;
  padding: ${spacing.xxl} 0!important;
`
const ValuePropItemContainer = styled(GridColumnContainer)`
  align-items: center;
  background-color: ${colours.grey.base};
  border-radius: 13px;
  margin: ${spacing.sm} 0;
  min-height: 4.1rem;
  padding: 0 ${spacing.lg};

  /* stylelint-disable */
  ${above.sm`
    margin: ${spacing.sm};
  `}
  /* stylelint-enable */
`

export {
  ValuePropContainer,
  ValuePropItemContainer,
}
