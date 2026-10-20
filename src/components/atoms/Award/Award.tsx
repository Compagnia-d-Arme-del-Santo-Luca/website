import React from 'react'
import { Box, SxProps, Theme, Typography, TypographyProps } from '@mui/material'

type AwardEntryProps = {
  year: string | number
  title: React.ReactNode
  titleProps?: TypographyProps
  organization: React.ReactNode
  location: string
  Component?: React.ElementType
  sx?: SxProps<Theme>
}

const Award = ({ Component = Box, ...props }: AwardEntryProps) => {
  return (
    <Component sx={{ pl: 2, ...props.sx }}>
      <Box
        sx={{
          display: 'flex',
          gap: 1,
          alignItems: { sm: 'flex-start', md: 'center' },
        }}>
        <Typography
          variant="subtitle1"
          sx={{
            color: 'primary.main',
          }}>
          {props.year}
        </Typography>
        <Box
          sx={{
            display: { sm: 'block', md: 'flex' },
            flexGrow: 1,
            columnGap: 1,
            flexWrap: 'wrap',
            alignItems: 'flex-end',
          }}>
          <Typography variant="subtitle1" {...props.titleProps}>
            <b>{props.title}</b>
          </Typography>
          <Typography
            variant="button"
            sx={{
              color: 'text.secondary',
              flexGrow: 1,
            }}>
            {props.organization}
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              color: 'text.secondary',
              flexShrink: 0,
            }}>
            <em>{props.location}</em>
          </Typography>
        </Box>
      </Box>
    </Component>
  )
}

export default Award
