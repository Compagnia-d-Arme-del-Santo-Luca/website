import React from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Box, Grid, Typography } from '@mui/material'
import { ExpandMore as ExpandIcon } from '@mui/icons-material'

interface CurriculumEntryProps {
  title: string
  dates: string
  company?: string
  location?: string
  children?: React.ReactNode
}

const CurriculumItem = (props: CurriculumEntryProps) => {
  return (
    <Accordion
      disableGutters
      elevation={0}
      sx={{
        bgcolor: 'background.default', // use summary hover background
        flexDirection: 'row-reverse',
        '&:not(:last-child)': {
          borderBottom: 0,
        },
        '&::before': {
          display: 'none',
        },
        '&:hover': {
          borderBottom: '1px solid',
          borderTop: '1px solid',
          bgcolor: 'background.paper', // use summary hover background
          elevation: 1,
          // '& .MuiAccordionSummary-expandIconWrapper .MuiSvgIcon-root': { color: 'primary.dark' }, // use summary hover icon color
        },
        '&.Mui-expanded': {
          bgcolor: 'background.paper', // use summary hover background
          borderBottom: '1px solid',
          borderTop: '1px solid',
          elevation: 1,
          '@media print': {
            bgcolor: 'background.default',
            borderBottom: 0,
            borderTop: 0,
            elevation: 0,
          },
          // '& .MuiAccordionSummary-expandIconWrapper .MuiSvgIcon-root': { color: 'primary.dark' }, // use summary hover icon color
        },
      }}>
      <AccordionSummary
        expandIcon={<ExpandIcon />}
        sx={{
          flexDirection: 'row-reverse',
          '& .MuiAccordionSummary-expandIconWrapper': {
            transform: 'rotate(-90deg)',
          },
          '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
            transform: 'rotate(0deg)',
            '@media print': {
              transform: 'rotate(-90deg)',
            },
          },
          '& .MuiAccordionSummary-content': {
            marginLeft: 2,
          },
        }}>
        <Grid
          container
          direction="row"
          sx={{
            width: 1,
            justifyContent: 'space-between',
            alignItems: 'stretch',
            display: { xs: 'none', sm: 'flex' },
          }}>
          <Grid component={Typography} size={9} variant="h6">
            <b>{props.title}</b>
          </Grid>
          <Grid
            component={Typography}
            size={3}
            variant="h6"
            sx={{
              color: 'primary.main',
              textAlign: 'right',
            }}>
            {props.dates}
          </Grid>
          {typeof props.company !== 'undefined' && (
            <Grid
              component={Typography}
              size={9}
              variant="overline"
              sx={{
                color: 'text.secondary',
              }}>
              {props.company}
            </Grid>
          )}
          {typeof props.location !== 'undefined' && (
            <Grid
              component={Typography}
              size={3}
              variant="subtitle1"
              sx={{
                color: 'text.secondary',
                textAlign: 'right',
              }}>
              <em>{props.location}</em>
            </Grid>
          )}
        </Grid>
        <Box
          sx={{
            display: { xs: 'block', sm: 'none' },
          }}>
          <Typography
            variant="subtitle1"
            sx={{
              color: 'primary.main',
            }}>
            {props.dates}
          </Typography>
          <Typography variant="h6">
            <b>{props.title}</b>
          </Typography>
          {typeof props.company !== 'undefined' && (
            <Typography
              variant="button"
              sx={{
                color: 'text.secondary',
              }}>
              {props.company}
            </Typography>
          )}
          {typeof props.location !== 'undefined' && (
            <Typography
              variant="subtitle2"
              sx={{
                color: 'text.secondary',
              }}>
              <em>{props.location}</em>
            </Typography>
          )}
        </Box>
      </AccordionSummary>
      <AccordionDetails>{props.children}</AccordionDetails>
    </Accordion>
  )
}

export default CurriculumItem
