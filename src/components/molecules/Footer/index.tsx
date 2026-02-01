import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Box, Link, Stack, Typography } from '@mui/material'
import PolicyIcon from '@mui/icons-material/Policy'
import CookieIcon from '@mui/icons-material/Cookie'

import { EmailIconLink, InstagramIconLink, FacebookIconLink } from 'components/atoms/IconLinks/index.js'

type FooterProps = {
  showCookieConsent?: boolean
}

const Footer: React.FC<FooterProps> = () => {
  const year = new Date().getFullYear()
  return (
    <Box
      id="footer"
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        py: 6,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        '@media print': { py: 3 },
      }}>
      <Stack direction="row" gap={2}>
        <EmailIconLink fontSize="large" href="mailto:compagniasantoluca@gmail.com" />
        <FacebookIconLink fontSize="large" href="https://facebook.com/compagniadarmedelsantoluca/" />
        <InstagramIconLink fontSize="large" href="https://www.instagram.com/compagnia_darme_santo_luca/" />
      </Stack>

      <Typography variant="subtitle2" align="center" color="text.secondary" component="em" mt={3}>
        © {year} Compagnia d'Arme del Santo Luca. All rights reserved.
      </Typography>

      <Stack mt={1}>
        <Link component={RouterLink} to="/privacy#cookie-preferences" color="textSecondary">
          <Stack direction="row" alignItems="center" justifyContent="center" gap={1}>
            <CookieIcon fontSize="inherit" />
            <Typography variant="subtitle2" component="span">
              Cookie Preferences
            </Typography>
          </Stack>
        </Link>
        <Link component={RouterLink} to="/privacy" color="textSecondary">
          <Stack direction="row" alignItems="center" justifyContent="center" gap={1}>
            <PolicyIcon fontSize="inherit" />
            <Typography variant="subtitle2" component="span">
              Privacy Policy
            </Typography>
          </Stack>
        </Link>
      </Stack>

      <Typography variant="subtitle2" align="center" color="text.secondary" component="em" mt={3}>
        Sito realizzato da{' '}
        <Link href="https://www.m-tartari.eu" color="inherit">
          m-tartari
        </Link>
      </Typography>
    </Box>
  )
}

export default Footer
