import React from 'react'
import { Box, Button, Chip, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Link, Stack, Typography } from '@mui/material'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'

import type { Event } from './types.js'

interface EventDialogProps {
  event: Event | null
  onClose: () => void
}

const formatDateRange = (date: Date, endDate?: Date): string => {
  const fmt = (d: Date) => d.toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' })
  if (!endDate) return fmt(date)
  if (date.getMonth() === endDate.getMonth() && date.getFullYear() === endDate.getFullYear()) {
    return `${date.getDate()}–${endDate.getDate()} ${date.toLocaleDateString('it-IT', { month: 'long', year: 'numeric' })}`
  }
  return `${fmt(date)} – ${fmt(endDate)}`
}

const EventDialog: React.FC<EventDialogProps> = ({ event, onClose }) => {
  if (!event) return null

  const osmUrl = `https://www.openstreetmap.org/?mlat=${event.location.lat}&mlon=${event.location.lng}#map=15/${event.location.lat}/${event.location.lng}`

  return (
    <Dialog open={!!event} onClose={onClose} maxWidth="sm" fullWidth>
      {event.image && <Box component="img" src={event.image} alt={event.title} sx={{ width: '100%', objectFit: 'cover' }} />}
      <DialogTitle>
        <Typography variant="h5" component="span">
          {event.details?.title ?? event.title}
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Stack spacing={1} sx={{ mb: 2 }}>
          <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
            <LocationOnIcon fontSize="small" color="primary" />
            <Typography variant="body2">
              {event.location.name}, {event.location.city}
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
            <CalendarMonthIcon fontSize="small" color="primary" />
            <Typography variant="body2">{formatDateRange(event.date, event.endDate)}</Typography>
          </Stack>
        </Stack>
        {event.details?.description && (
          <>
            <Divider sx={{ mb: 2 }} />
            <Typography variant="body1" color="text.secondary">
              {event.details.description}
            </Typography>
          </>
        )}
        {event.details?.howToReach && (
          <>
            <Divider sx={{ mb: 2 }} />
            <Typography variant="body1" color="text.secondary">
              {event.details.howToReach}
            </Typography>
          </>
        )}
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 2, justifyContent: 'space-between', gap: 1, flexWrap: 'wrap' }}>
        <Stack direction="row" spacing={1} useFlexGap sx={{ minWidth: 0, flexWrap: 'wrap' }}>
          {event.link && (
            <Chip
              component={Link}
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              label="Sito ufficiale"
              icon={<OpenInNewIcon />}
              clickable
            />
          )}
          <Chip
            component={Link}
            href={event.location.link || osmUrl}
            target="_blank"
            rel="noopener noreferrer"
            label="Apri sulla mappa"
            icon={<LocationOnIcon />}
            clickable
          />
        </Stack>
        <Button onClick={onClose} variant="contained" sx={{ justifySelf: 'flex-end' }}>
          Chiudi
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default EventDialog
