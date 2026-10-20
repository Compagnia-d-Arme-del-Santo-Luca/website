import React from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Stack, Typography } from '@mui/material'
import { ExpandMore as ExpandIcon } from '@mui/icons-material'

interface ProjectProps {
  title: string
  subtitle?: React.ReactNode
  children?: React.ReactNode
}
const Project = (props: ProjectProps) => {
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
          borderBottom: '1px solid',
          borderTop: '1px solid',
          bgcolor: 'background.paper', // use summary hover background
          elevation: 1,
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
          },
          '& .MuiAccordionSummary-content': {
            marginLeft: 2,
          },
        }}>
        <div style={{ flex: 1 }}>
          <Typography variant="h5">
            <b>{props.title}</b>
          </Typography>
          <Stack
            direction="row"
            sx={{
              gap: 1,
              alignItems: 'center',
            }}>
            {props.subtitle}
          </Stack>
        </div>
      </AccordionSummary>
      <AccordionDetails>{props.children}</AccordionDetails>
    </Accordion>
  )
}

export default Project
