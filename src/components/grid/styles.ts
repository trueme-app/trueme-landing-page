import styled from 'styled-components'
import { above } from '../../styles'

const GridContainer = styled.div`
  align-content: ${(props) => props.align};
  box-sizing: border-box;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(${(props) => props.xs.columns}, 1fr);
  grid-template-rows: auto;
  justify-content: ${(props) => props.justify};
  text-align: ${(props) => props.textAlign};
  width: 100%;

  /* stylelint-disable */
  ${above.sm`
    grid-template-columns: repeat(${(props) => props.sm.columns || props.xs.columns}, 1fr);
    padding: 0 24px;
  `}

  ${above.md`
    grid-template-columns: repeat(${(props) => props.md.columns || props.sm.columns || props.xs.columns}, 1fr);
  `}

  ${above.lg`
    grid-template-columns: repeat(${(props) => props.lg.columns || props.md.columns || props.sm.columns || props.xs.columns}, 1fr);
  `}

  ${above.xl`
    grid-template-columns: repeat(${(props) => props.xl.columns || props.lg.columns || props.md.columns || props.sm.columns || props.xs.columns}, 1fr);
  `}

  ${above.xxl`
    grid-template-columns: repeat(${(props) => props.xxl.columns || props.xl.columns || props.lg.columns || props.md.columns || props.sm.columns || props.xs.columns}, 1fr);
  `}
  /* stylelint-enable */
`

const GridColumnContainer = styled.div`
  align-content: ${(props) => props.align};
  display: grid;
  grid-column: ${(props) => props.xs.start} / ${(props) => props.xs.end};

  /* stylelint-disable */
  ${(props) => props.orderXs ? `order: ${props.orderXs};`:``}

  ${above.sm`
    ${(props) => props.orderSm ? `order: ${props.orderSm};`:``}
    grid-column: ${(props) => props.sm.start || props.xs.start} / ${(props) => props.sm.end || props.xs.end};
  `}

  ${above.md`
    ${(props) => props.orderMd ? `order: ${props.orderMd};`:``}
    grid-column: ${(props) => props.md.start || props.sm.start || props.xs.start} / ${(props) => props.md.end || props.sm.end || props.xs.end};
  `}

  ${above.lg`
    ${(props) => props.orderLg ? `order: ${props.orderLg};`:``}
    grid-column: ${(props) => props.lg.start || props.md.start || props.sm.start || props.xs.start} / ${(props) => props.lg.end || props.md.end || props.sm.end || props.xs.end};
  `}

  ${above.xl`
    ${(props) => props.orderXl ? `order: ${props.orderXl};`:``}
    grid-column: ${(props) => props.xl.start || props.lg.start || props.md.start || props.sm.start || props.xs.start} / ${(props) => props.xl.end || props.lg.end || props.md.end || props.sm.end || props.xs.end};
  `}

  ${above.xxl`
    ${(props) => props.orderXxl ? `order: ${props.orderXxl};`:``}
    grid-column: ${(props) => props.xxl.start || props.xl.start || props.lg.start || props.md.start || props.sm.start || props.xs.start} / ${(props) => props.xxl.end || props.xl.end || props.lg.end || props.md.end || props.sm.end || props.xs.end};
  `}
  /* stylelint-enable */
`

export {
  GridContainer,
  GridColumnContainer,
}
