import React from 'react'
import { Box, Card, CardActionArea, CardContent, CardMedia, Chip, Stack, Typography } from '@mui/material'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import InfoOutlined from '@mui/icons-material/InfoOutlined'

import type { Event } from './types.js'

interface ListViewProps {
  events: Event[]
  onSelect: (event: Event) => void
}

const formatDateRange = (date: Date, endDate?: Date): string => {
  const fmt = (d: Date) => d.toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' })
  if (!endDate) return fmt(date)
  if (date.getMonth() === endDate.getMonth() && date.getFullYear() === endDate.getFullYear()) {
    return `${date.getDate()}-${endDate.getDate()} ${date.toLocaleDateString('it-IT', { month: 'long', year: 'numeric' })}`
  }
  return `${fmt(date)} - ${fmt(endDate)}`
}

const isUpcoming = (date: Date) => date >= new Date()

const EventCard: React.FC<{ event: Event; onSelect: (event: Event) => void }> = ({ event, onSelect }) => {
  return (
    <Card
      key={event.id}
      elevation={2}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        opacity: isUpcoming(event.date) ? 1 : 0.6,
        // Cards must be allowed to shrink on phones. The previous fixed
        // width (30% of the `lg` breakpoint) was wider than small screens.
        width: '100%',
        minWidth: 0,
        boxSizing: 'border-box',
      }}>
      <CardActionArea
        onClick={() => onSelect(event)}
        sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'stretch', justifyContent: 'flex-end' }}>
        {event.image && <CardMedia component="img" height={160} image={event.image} alt={event.title} />}
        <CardContent>
          <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
            <Typography variant="h6" component="h2" sx={{ flexGrow: 1, minWidth: 0, mr: 1, overflowWrap: 'anywhere' }}>
              {event.title}
            </Typography>
            {!isUpcoming(event.date) && <Chip label="Passato" size="small" color="default" />}
          </Stack>
          <Stack direction="row" sx={{ minWidth: 0, alignItems: 'center', justifyContent: 'space-between' }}>
            <Box sx={{ minWidth: 0 }}>
              <Stack direction="row" spacing={0.5} sx={{ alignItems: 'center', mb: 0.5 }}>
                <CalendarMonthIcon fontSize="small" color="primary" />
                <Typography variant="body2" color="text.secondary" sx={{ overflowWrap: 'anywhere' }}>
                  {formatDateRange(event.date, event.endDate)}
                </Typography>
              </Stack>
              <Stack direction="row" spacing={0.5} sx={{ alignItems: 'center' }}>
                <LocationOnIcon fontSize="small" color="primary" />
                <Typography variant="body2" color="text.secondary" sx={{ overflowWrap: 'anywhere' }}>
                  {event.location.city}
                </Typography>
              </Stack>
            </Box>
            <InfoOutlined sx={{ color: 'text.secondary', flexShrink: 0, ml: 1 }} />
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

const ListView: React.FC<ListViewProps> = ({ events, onSelect }) => {
  const eventGroups = React.useMemo(() => {
    const groups: { upcoming: Event[]; past: Event[] } = { upcoming: [], past: [] }

    for (const event of events) {
      if (isUpcoming(event.date)) {
        groups.upcoming.push(event)
      } else {
        groups.past.push(event)
      }
    }

    groups.upcoming.sort((a, b) => a.date.getTime() - b.date.getTime())
    groups.past.sort((a, b) => b.date.getTime() - a.date.getTime())

    return groups
  }, [events])
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, width: '100%', minWidth: 0, pb: 4 }}>
      {eventGroups.upcoming.length > 0 && (
        <>
          <Typography variant="h5" sx={{ textAlign: 'center', mt: 4, mb: 2 }}>
            Prossimi eventi
          </Typography>
          <Box
            role="region"
            aria-label="prossimi eventi"
            sx={{
              display: 'grid',
              width: '100%',
              minWidth: 0,
              gridTemplateColumns: { xs: 'minmax(0, 1fr)', sm: 'repeat(2, minmax(0, 1fr))', lg: 'repeat(3, minmax(0, 1fr))' },
              gap: 3,
            }}>
            {eventGroups.upcoming.map(event => (
              <EventCard key={event.id} event={event} onSelect={onSelect} />
            ))}
          </Box>
        </>
      )}
      {eventGroups.past.length > 0 && (
        <>
          <Typography variant="h5" sx={{ textAlign: 'center', mt: 4, mb: 2 }}>
            Eventi passati
          </Typography>
          <Box
            role="region"
            aria-label="eventi passati"
            sx={{
              display: 'grid',
              width: '100%',
              minWidth: 0,
              gridTemplateColumns: { xs: 'minmax(0, 1fr)', sm: 'repeat(2, minmax(0, 1fr))', lg: 'repeat(3, minmax(0, 1fr))' },
              gap: 3,
            }}>
            {eventGroups.past.map(event => (
              <EventCard key={event.id} event={event} onSelect={onSelect} />
            ))}
          </Box>
        </>
      )}
    </Box>
  )
}

export default ListView
