import React from 'react'
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax'
import { Box, Grid, IconButton, Typography } from '@mui/material'
import { ExpandMore } from '@mui/icons-material'

import { useViewport } from 'components/utils/viewport/index.js'

type AnchorType = 'left' | 'top' | 'right' | 'bottom'

type Props = {
  image: string
  title: string
  caption?: React.ReactNode
  children: React.ReactNode
  mobileImage?: string
  ref?: React.ForwardedRef<HTMLSelectElement>
  anchor?: AnchorType
  scrollTarget?: React.ForwardedRef<HTMLSelectElement>
}

const Description = (props: Props) => {
  switch (props.anchor) {
    case 'bottom':
      return (
        <Box
          sx={theme => ({
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',

            position: 'absolute',
            backgroundColor: theme.palette.mode === 'dark' ? 'hsla(155, 18%, 13%, 0.85)' : 'hsla(0, 0%, 100%, 0.75)',
            backdropFilter: 'blur(8px)',
            bottom: '0',

            borderTopStyle: 'solid',
            borderTopWidth: theme.spacing(0.5),
            borderTopColor: theme.palette.primary.main,
            p: `${theme.spacing(7)} ${theme.spacing(5)} ${theme.spacing(5.5)} ${theme.spacing(5)}`,
          })}>
          <Box maxWidth="xl">
            <Typography variant="h4" mb={3}>
              {props.title}
            </Typography>
            {props.caption}
            <Box mt={3}>{props.children}</Box>
          </Box>
        </Box>
      )
    case 'top':
      return (
        <Box
          sx={theme => ({
            display: 'flex',
            position: 'absolute',

            backgroundColor: theme.palette.mode === 'dark' ? 'hsla(155, 18%, 13%, 0.85)' : 'hsla(0, 0%, 100%, 0.75)',
            backdropFilter: 'blur(8px)',
            top: '0',
            ml: 'auto',
            borderBottomWidth: theme.spacing(0.5),
            // borderTopWidth: '0.35em',
            borderBottomStyle: 'solid',
            borderBottomColor: theme.palette.primary.main,
            p: `${theme.spacing(5)} ${theme.spacing(5)} ${theme.spacing(3)} ${theme.spacing(5)}`,
            // p: '5.1em 3.1em 3.1em 3.1em',
          })}>
          <Grid container spacing={2} maxWidth="xl">
            <Grid size={4}>
              <Typography variant="h4">{props.title}</Typography>
              {props.caption}
            </Grid>
            <Grid size={8}>{props.children}</Grid>
          </Grid>
        </Box>
      )
    case 'right':
      return (
        <Box
          sx={theme => ({
            height: '102%',
            width: '28em',
            position: 'absolute',
            backgroundColor: theme.palette.mode === 'dark' ? 'hsla(155, 18%, 13%, 0.85)' : 'hsla(0, 0%, 100%, 0.75)',
            backdropFilter: 'blur(8px)',
            right: '0',
            borderLeftWidth: theme.spacing(0.5),
            // borderLeftWidth: '0.35em',
            borderLeftStyle: 'solid',
            borderLeftColor: theme.palette.primary.main,
            p: `${theme.spacing(10)} ${theme.spacing(5)} ${theme.spacing(5)} ${theme.spacing(5)}`,
            // p: '5.1em 3.1em 3.1em 3.1em',
          })}>
          <Typography variant="h4">{props.title}</Typography>
          {props.caption}
          <Box mt={3}>{props.children}</Box>
        </Box>
      )
    case 'left':
      return (
        <Box
          sx={theme => ({
            height: '102%',
            width: '28em',
            position: 'absolute',
            backgroundColor: theme.palette.mode === 'dark' ? 'hsla(155, 18%, 13%, 0.85)' : 'hsla(0, 0%, 100%, 0.75)',
            backdropFilter: 'blur(8px)',
            left: '0',
            borderRightWidth: theme.spacing(0.5),
            // borderLeftWidth: '0.35em',
            borderRightStyle: 'solid',
            borderRightColor: theme.palette.primary.main,
            p: `${theme.spacing(10)} ${theme.spacing(5)} ${theme.spacing(5)} ${theme.spacing(5)}`,
            // p: '5.1em 3.1em 3.1em 3.1em',
          })}>
          <Typography variant="h4" mb={3}>
            {props.title}
          </Typography>
          {props.caption}
          <Box mt={3}>{props.children}</Box>
        </Box>
      )
  }
}

const ProjectSpotlight = React.forwardRef<HTMLSelectElement, Props>((props, ref) => {
  const { width } = useViewport()

  return (
    <Box ref={ref}>
      <Box
        component="section"
        sx={theme => ({
          display: width < theme.breakpoints.values.md ? 'none' : 'inline',
          '@media print': { display: 'none' },
        })}>
        <ParallaxProvider>
          <ParallaxBanner
            layers={[
              {
                // translateY: [0, 30],
                // scale: [1, 0.5, 'easeOutCubic'],
                // shouldAlwaysCompleteAnimation: true,
                image: props.image,
                expanded: false,
                speed: -20,
              },
            ]}
            style={{
              // width: '150%',
              // marginLeft: '-25%',
              minHeight: '100vh',
              position: 'relative',

              height: '100vh',
              overflow: 'hidden',
            }}>
            <Description {...props} />
            {props.scrollTarget && (
              <IconButton
                size="large"
                onClick={() => (props.scrollTarget as React.RefObject<HTMLSelectElement | null>).current?.scrollIntoView()}
                sx={{ position: 'absolute', p: 1, bottom: 2, left: '50%', transform: 'translate(-50%, 0)' }}>
                <ExpandMore fontSize="large" />
              </IconButton>
            )}
          </ParallaxBanner>
        </ParallaxProvider>
      </Box>
      <Box
        component="section"
        sx={theme => ({
          display: width >= theme.breakpoints.values.md ? 'none' : 'inline',
          '@media print': {
            display: 'inline',
            height: '100%',
          },
        })}>
        <Box
          component="img"
          sx={{
            width: '100%',
            height: '100%',
            maxHeight: '60vh',
            '@media print': {
              maxHeight: '100%',
              WebkitPrintColorAdjust: 'exact !important',
              printColorAdjust: 'exact !important',
            },
          }}
          src={props.mobileImage ?? props.image}
        />
        <Box
          sx={theme => ({
            mt: theme.spacing(-1.05),
            borderTopStyle: 'solid',
            borderTopWidth: theme.spacing(0.5),
            borderTopColor: theme.palette.primary.main,
            p: `${theme.spacing(7)} ${theme.spacing(5)} ${theme.spacing(5.5)} ${theme.spacing(5)}`,
            '@media print': {
              backgroundColor: 'background.default',
            },
          })}>
          <Typography variant="h4">{props.title}</Typography>
          {props.caption}
          {props.children}
        </Box>
      </Box>
    </Box>
  )
})

export default ProjectSpotlight
