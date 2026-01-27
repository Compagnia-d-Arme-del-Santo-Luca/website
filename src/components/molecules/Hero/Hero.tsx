import React from 'react'
import { Avatar, Box, IconButton, Stack, Typography } from '@mui/material'
import ExpandMore from '@mui/icons-material/ExpandMore'

import { EmailIconLink, InstagramIconLink, FacebookIconLink } from 'components/atoms/IconLinks/index.js'

const Hero = (props: { scrollTarget?: React.ForwardedRef<HTMLSelectElement> }) => {
  return (
    <Box
      sx={theme => ({
        position: 'relative',

        minHeight: '100vh',
        boxShadow: '0 0.25em 0.5em 0 rgba(0, 0, 0, 0.25)',

        backgroundImage: 'url("images/banner2.webp")',
        backgroundPosition: 'center center',
        backgroundAttachment: { xs: 'scroll !important', md: 'fixed' },
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        wrap: 'wrap',

        ...(theme.palette.mode === 'dark' && {
          backgroundImage: 'url("images/banner2.png")',
        }),
        ...(theme.palette.mode === 'light' && {
          backgroundImage: 'url("images/banner2.png")',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,

            backgroundImage: 'inherit',
            backgroundPosition: 'center center',
            backgroundAttachment: 'inherit',
            backgroundSize: 'cover',

            filter: 'blur(5px)',
          },
        }),
      })}>
      <Box
        color="white"
        sx={theme => ({
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '3em',
          zIndex: 1,

          [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            textAlign: 'center',
            padding: '2em',
          },
          [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
            textAlign: 'right',
            padding: '6em',
          },
        })}>
        <Box>
          <Typography component="h1" variant="h1" maxWidth="md">
            Compagnia d'Arme{' '}
            <Typography component="small" variant="h2">
              del
            </Typography>{' '}
            Santo Luca
          </Typography>
          <Typography variant="h3">Ferrara</Typography>
          <Stack
            direction="row"
            gap={2}
            mt={2}
            justifyContent={{ xs: 'center', md: 'end' }}
            color={t => (t.palette.mode === 'light' ? 'inherit' : 'text.secondary')}>
            <EmailIconLink fontSize="large" sx={{ ':hover': { color: 'text.primary' } }} href="mailto:compagniasantoluca@gmail.com" />
            <FacebookIconLink fontSize="large" sx={{ ':hover': { color: 'text.primary' } }} href="https://facebook.com/compagniadarmedelsantoluca/" />
            <InstagramIconLink
              fontSize="large"
              sx={{ ':hover': { color: 'text.primary' } }}
              href="https://www.instagram.com/compagnia_darme_santo_luca/"
            />
          </Stack>
        </Box>
        <Avatar
          alt="Avatar"
          src="logo.png"
          variant="square"
          sx={{
            display: 'inline-block',
            verticalAlign: 'middle',
            height: { xs: '8em', md: '18em' },
            width: { xs: '8em', md: '18em' },
          }}
        />
      </Box>

      {props.scrollTarget && (
        <IconButton
          size="large"
          onClick={() => (props.scrollTarget as React.RefObject<HTMLElement | null>).current?.scrollIntoView()}
          sx={{
            position: 'absolute',
            p: 1,
            bottom: 2,
            left: '50%',
            transform: 'translate(-50%, 0)',
            color: t => (t.palette.mode === 'light' ? 'white' : 'text.primary'),
          }}>
          <ExpandMore fontSize="large" />
        </IconButton>
      )}
    </Box>
  )
}

export default Hero
