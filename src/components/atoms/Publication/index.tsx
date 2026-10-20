import React from 'react'
import { Box, SxProps, Theme, Typography, TypographyProps } from '@mui/material'

import { ExternalIconLink } from 'components/atoms/IconLinks/index.js'

type AwardEntryProps = {
  year: string | number
  title: string
  authors: React.ReactNode
  location: string
  href?: string
  titleProps?: TypographyProps
  Component?: React.ElementType
  sx?: SxProps<Theme>
}

const Publication = ({ Component = Box, ...props }: AwardEntryProps) => {
  return (
    <Component sx={{ pl: 2, ...props.sx }}>
      <Box
        sx={{
          display: 'flex',
          gap: 1,
          alignItems: 'flex-start',
        }}>
        <Typography
          variant="subtitle1"
          sx={{
            color: 'primary.main',
          }}>
          {props.year}
        </Typography>
        <Typography
          sx={{
            color: 'text.secondary',
          }}>
          {props.authors},{' '}
          <Typography
            component="span"
            sx={{
              color: 'text.primary',
            }}>
            <b>{props.title}</b>
          </Typography>
          , In: {props.location}
          {typeof props.href !== 'undefined' && <ExternalIconLink fontSize="inherit" href={props.href} sx={{ color: 'text.secondary' }} />}
        </Typography>
      </Box>
    </Component>
  )
}

export default Publication
