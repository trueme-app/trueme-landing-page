const grid = {
  xs: {
    start: 1,
    end: 13,
    columns: 12,
  },
  sm: {},
  md: {},
  lg: {},
  xl: {},
  xxl: {},
}

interface IGrid {
  start: number,
  end: number,
  columns?: number,
}

export {
  grid,
  IGrid,
}
