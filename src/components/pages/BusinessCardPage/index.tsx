import {
  Box,
  Typography,
  Stack,
  Button,
  Paper,
  Link,
  TypographyProps,
  SvgIcon,
  PaperProps,
  ThemeProvider,
  createTheme,
  SxProps,
  Theme,
} from '@mui/material'
import { Email, Facebook, Print, PhoneInTalk, Public, Instagram } from '@mui/icons-material'

import { Page } from 'components/templates/index.js'
import typography from 'style/typography/index.js'
import palette from 'style/palette/index.js'
import * as env from './envVars.js'
import './index.css'

const TypographyLink = ({ icon: Icon, children, ...props }: TypographyProps<typeof Link, { icon: typeof SvgIcon }>) => (
  <Box
    component={Link}
    rel="noopener noreferrer"
    target="_blank"
    underline="hover"
    color="text.secondary"
    {...props}
    sx={{ display: 'flex', alignItems: 'center', gap: 0.5, ...props.sx }}>
    <Icon
      sx={{
        color: 'text.primary',
        fontSize: '0.7rem',
      }}
    />
    <Typography variant="caption" color="text.secondary" fontSize="0.55rem">
      {children}
    </Typography>
  </Box>
)

const theme = {
  light: createTheme({
    typography: typography,
    palette: palette.light,
  }),
  dark: createTheme({
    typography: typography,
    palette: palette.dark,
  }),
}

type BusinessCardProps = {
  mode?: 'light' | 'dark'
  src: string
  alt?: string
  srcSx?: SxProps<Theme>
} & PaperProps
const BusinessCard = ({ mode = 'dark', src, srcSx, alt, sx, ...props }: BusinessCardProps) => (
  <ThemeProvider theme={theme[mode]}>
    <Paper
      className="print-business-card"
      elevation={1}
      sx={{
        colorScheme: `${mode} !important`,
        backgroundColor: 'background.default',
        width: '85mm',
        height: '55mm',
        padding: '6mm',
        borderRadius: 2,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: mode === 'light' ? 'background.default' : 'white',

        display: 'flex',
        alignItems: 'center',
        gap: 1.5,

        '@media print': {
          backgroundColor: mode === 'light' ? 'white' : 'background.default',
          WebkitPrintColorAdjust: 'exact !important',
          printColorAdjust: 'exact !important',
          elevation: 0,
          borderRadius: 0,
          borderColor: 'transparent',
          gap: 1.5,
        },
        ...sx,
      }}
      {...props}>
      <Box
        component="img"
        src={src}
        alt={alt}
        sx={{
          width: '30%',
          height: 'fit-content',
          objectFit: 'cover',
          // borderRadius: '50%',
          ...srcSx,
        }}
      />

      {/* Right side with content */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
        {props.children}
      </Box>
    </Paper>
  </ThemeProvider>
)

/**
 * BusinessCardPage component - A digital business card
 * Designed to be printable as a standard business card (3.5 x 2 inches)
 */
const BusinessCardPage = () => {
  return (
    <Page>
      <Stack
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          pt: 4,
          gap: 2,
          '@media print': {
            pt: 0,
            gap: 0,
          },
        }}>
        <BusinessCard src="/logo_text.png" alt="logo" srcSx={{ width: '100%' }} />

        <BusinessCard src="/images/qr.svg" alt="Qr Code" mode="light">
          <Stack
            sx={{
              mt: 0.5,
              borderLeft: '1px solid',
              borderColor: 'divider',
              pl: 2,
            }}>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              fontSize="0.55rem"
              fontFamily="Oswald, sans-serif"
              textTransform="uppercase"
              fontWeight={700}>
              {env.NAME}
            </Typography>
            <Typography variant="caption" color="text.secondary" fontSize="0.55rem" mb={0.5}>
              {env.POSITION}
            </Typography>
            {env.PHONE != null && (
              <TypographyLink icon={PhoneInTalk} href={`tel:${env.PHONE.replace(/[^\d+]/g, '').replace(/^\+?/, '+')}`}>
                {env.PHONE}
              </TypographyLink>
            )}
            <TypographyLink icon={Email} href={`mailto:${env.EMAIL}`}>
              {env.EMAIL}
            </TypographyLink>
            <TypographyLink icon={Public} href="https://www.compagniadarmedelsantoluca.it/">
              www.compagniadarmedelsantoluca.it
            </TypographyLink>
            <TypographyLink icon={Facebook} href={`https://facebook.com/${env.FACEBOOK}/`}>
              @{env.FACEBOOK}
            </TypographyLink>
            <TypographyLink icon={Instagram} href={`https://www.instagram.com/${env.INSTAGRAM}/`}>
              @{env.INSTAGRAM}
            </TypographyLink>
          </Stack>
        </BusinessCard>
      </Stack>

      <Box
        sx={{
          ariaLabel: 'Print Business Card',
          my: 7,
          display: 'flex',
          justifyContent: 'center',
          '@media print': {
            display: 'none',
          },
        }}>
        <Button variant="contained" startIcon={<Print />} onClick={() => window.print()}>
          Print Business Card
        </Button>
      </Box>
    </Page>
  )
}

export default BusinessCardPage
