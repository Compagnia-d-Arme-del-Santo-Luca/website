import { TypographyVariantsOptions } from '@mui/material'

const typography: TypographyVariantsOptions = {
  // ---------- Global defaults ----------
  fontFamily: '"EB Garamond", serif',

  // ---------- Headings ----------
  h1: {
    fontFamily: '"Cloister Black", cursive',
    fontWeight: 700,
  },
  h2: {
    fontFamily: '"Cloister Black", cursive',
    fontWeight: 700,
  },
  h3: {
    fontFamily: '"Cloister Black", cursive',
    fontWeight: 700,
  },
  // ---------- Buttons ----------
  button: {
    fontFamily: '"MedievalSharp", cursive',
    textTransform: 'none', // keep original caps
    fontWeight: 400,
  },
  // ---------- Caption / Overline ----------
  overline: {
    textTransform: 'uppercase',
  },
}

export default typography
