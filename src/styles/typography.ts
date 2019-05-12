const typeSizes = {
  h1: '2.85rem',
  h2: '1.875rem',
  h3: '1rem',
  body: '.8rem',
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
