const typeSizes = {
  h1: {
    xs: '1.78rem',
    sm: '2.5rem',
  },
  h2: {
    xs: '1.42rem',
    sm: '1.575rem',
    md: '1.875rem',
  },
  h3: {
    xs: '1rem',
    sm: '1rem',
  },
  body: {
    xs: '1.14rem',
    sm: '1.14rem',
  },
}

const fonts = {
  body: 'Benton Sans',
  heading: 'Butler Medium',
}

const typography = {
  h1: {
    font: fonts.heading,
    size: typeSizes.h1,
    letterSpacing: 1.14,
    lineHeight: 1.16,
  },
  h2: {
    font: fonts.heading,
    size: typeSizes.h2,
    letterSpacing: 1.14,
    lineHeight: 1.25,
  },
  h3: {
    font: fonts.body,
    size: typeSizes.h3,
    letterSpacing: 0,
    lineHeight: 1.25,
  },
  body: {
    font: fonts.body,
    size: typeSizes.body,
    letterSpacing: 0,
    lineHeight: 1.74,
  }
}

export {
  fonts,
  typography,
  typeSizes,
}
