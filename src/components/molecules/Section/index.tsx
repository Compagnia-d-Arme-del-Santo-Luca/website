import React from 'react'
import { Box, BoxProps, Typography } from '@mui/material'

import SectionHeader from 'components/atoms/SectionHeader/index.js'

interface SectionProps extends BoxProps {
  variant?: 'primary' | 'secondary'
  title?: string
  headline?: string
  imageUrl?: string
  imageAlt?: string
  imageCaption?: React.ReactNode
  children?: React.ReactNode
}

const Section: React.FC<SectionProps> = ({ variant = 'primary', imageUrl, imageAlt, imageCaption, children, ...props }) => {
  return (
    <Box
      component="section"
      sx={{
        margin: 0,
        padding: 0,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: variant === 'primary' ? 'background.default' : 'background.paper',
      }}>
      <Box
        {...props}
        sx={{
          py: 5,
          width: theme => theme.breakpoints.values.lg,
          ...props.sx,
        }}>
        {props.title && (
          <SectionHeader
            sx={[
              theme => ({
                paddingBottom: 3,
                [theme.breakpoints.up('md')]: {
                  width: '90em',
                  maxWidth: 'calc(100% - 2em)',
                  mx: 'auto',
                },
              }),
              theme =>
                theme.applyStyles('dark', {
                  paddingBottom: 3,
                  [theme.breakpoints.up('md')]: {
                    width: '90em',
                    maxWidth: 'calc(100% - 2em)',
                    mx: 'auto',
                  },
                }),
            ]}>
            {props.title}
          </SectionHeader>
        )}
        {props.headline && (
          <Typography
            variant="body1"
            color="text.secondary"
            sx={theme => ({
              paddingBottom: 3,
              [theme.breakpoints.up('md')]: {
                width: '90em',
                maxWidth: 'calc(100% - 4em)',
                mx: 'auto',
              },
            })}>
            {props.headline}
          </Typography>
        )}
        <Box
          sx={theme => ({
            display: 'flex',
            justifyContent: 'center',

            [theme.breakpoints.down('md')]: {
              minHeight: '60vh',
              flexDirection: props.title || props.headline ? 'column' : 'column-reverse',
              alignItems: 'align-items',
              gap: 3,
            },

            [theme.breakpoints.up('md')]: {
              mx: 'auto',
              width: '90em',
              maxWidth: 'calc(100% - 4em)',
              flexDirection: variant === 'primary' ? 'row-reverse' : 'row',
              alignItems: 'center',
              gap: 5,
            },
          })}>
          {imageUrl &&
            (imageCaption ? (
              <Box sx={{ flex: 4, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Box component="img" src={imageUrl} alt={imageAlt} width="100%" />
                {imageCaption}
              </Box>
            ) : (
              <Box
                component="img"
                src={imageUrl}
                alt={imageAlt}
                sx={{ width: { xs: '100%', md: '40%' }, flex: 4, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
              />
            ))}
          <Box
            sx={{
              flex: 6,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignContent: 'center',

              gap: 1,
              ...props.sx,
            }}>
            {children}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Section
