import styled from 'styled-components'
import { above, colours, spacing } from '../../styles'
import { UnstyledList } from '../../styles/shared'
import { GridColumnContainer, GridContainer } from '../grid/styles'

const ValuePropContainer = styled(GridContainer)`
  list-style: none;
  margin: 0;
  padding: ${spacing.xl} 0!important;
`
const ValuePropItemContainer = styled(GridColumnContainer)`
  align-items: center;
  background-color: ${colours.grey.base};
  border-radius: 13px;
  min-height: 4.1rem;
  padding: 0 ${spacing.lg};

  ${above.sm`
    margin: ${spacing.sm};
  `}

  ${above.md`
    margin: ${spacing.md};
  `}
`

export {
  ValuePropContainer,
  ValuePropItemContainer,
}
