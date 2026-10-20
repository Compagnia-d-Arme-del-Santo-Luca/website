import { Typography, TypographyProps } from '@mui/material'
import { FC } from 'react'

const Subheader: FC<TypographyProps> = props => (
  <Typography
    variant="h5"
    component="h3"
    gutterBottom
    {...props}
    sx={[
      {
        fontFamily: 'Oswald, sans-serif',
      },
      ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
    ]}
  />
)

export default Subheader
