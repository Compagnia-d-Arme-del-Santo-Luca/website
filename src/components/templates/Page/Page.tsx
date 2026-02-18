import React from 'react'
import { Box, BoxProps, Container, Divider, Typography } from '@mui/material'

import { Footer, Toolbar } from 'components/molecules/index.js'

interface PageProps extends BoxProps {
  showCookieConsent?: boolean
}

/**
 * React function component that implements the default page template.
 * @see BoxProps from '@mui/material' for props
 */
const Page: React.FC<PageProps> = ({ title, children, showCookieConsent, ...props }) => {
  React.useEffect(() => {
    if (title) {
      document.title = `Compagnia d'Arme del Santo Luca - ${title}`
    }
  }, [title])

  return (
    <Box
      aria-label="page"
      sx={{
        '@media print': { backgroundColor: 'background.default' },
        flexGrow: 1,
      }}>
      <Toolbar />
      {title && (
        <>
          <Typography
            id="page-title"
            variant="h1"
            aria-label="page-title"
            textAlign="center"
            sx={{
              mx: 'auto',
              pt: 10,
              pb: 6,
            }}>
            {title}
          </Typography>
          <Divider
            variant="middle"
            sx={theme => ({
              borderColor: 'primary.main',
              borderStyle: 'solid',
              borderWidth: 2,
              mx: 'auto',
              mb: 4,
              maxWidth: 'calc(60% - 2.5em)',
              [theme.breakpoints.up('md')]: {
                width: theme => theme.breakpoints.values.sm,
              },
              [theme.breakpoints.down('sm')]: {
                maxWidth: '75vw',
              },
            })}
          />
        </>
      )}
      <Container
        id="page-content"
        component="main"
        sx={{
          mt: { xs: 8, md: 12 },
          mb: 4,
          minHeight: '80vh',
          mx: 'auto',
          maxWidth: { xs: '100%', md: 'calc(100% - 4em)' },
          width: theme => theme.breakpoints.values.lg,
          ...props.sx,
        }}>
        {children}
      </Container>
      <Footer showCookieConsent={showCookieConsent} />
    </Box>
  )
}

export default Page
