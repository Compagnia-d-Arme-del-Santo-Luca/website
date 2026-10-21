import React from 'react'
import { Box, FormControl, InputLabel, MenuItem, Select, Tab, Tabs, Typography } from '@mui/material'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import MapIcon from '@mui/icons-material/Map'

import { Page } from 'components/templates/index.js'
import type { Event } from './types.js'
import { events } from './events.js'
import EventDialog from './EventDialog.js'
import ListView from './ListView.js'

const MapView = React.lazy(() => import('./MapView.js'))

type ViewTab = 'list' | 'map'

const EventsPage = () => {
  const [tab, setTab] = React.useState<ViewTab>('list')
  const [selectedEvent, setSelectedEvent] = React.useState<Event | null>(null)
  const currentYear = new Date().getFullYear()
  const [selectedYear, setSelectedYear] = React.useState(currentYear)
  const years = React.useMemo(
    () => [...new Set([currentYear, ...events.map(event => event.date.getFullYear())])].sort((a, b) => b - a),
    [currentYear]
  )
  const selectedEvents = React.useMemo(() => events.filter(event => event.date.getFullYear() === selectedYear), [selectedYear])

  return (
    <Page
      title="Eventi"
      sx={{
        width: '100%',
        maxWidth: theme => theme.breakpoints.values.lg,
        boxSizing: 'border-box',
        px: { xs: 2, sm: 3, md: 4 },
        mx: 'auto',
      }}>
      <Typography>
        Vieni a trovarci! Partecipiamo a rievocazioni storiche, fiere e manifestazioni in tutta Italia, portando la nostra passione per il Medioevo in
        ogni angolo del paese. Consulta il calendario per non perdere le nostre prossime avventure!
      </Typography>
      <Box>
        <Tabs value={tab} onChange={(_, v: ViewTab) => setTab(v)} centered aria-label="vista eventi">
          <Tab icon={<FormatListBulletedIcon />} iconPosition="start" label="Lista" value="list" />
          <Tab icon={<MapIcon />} iconPosition="start" label="Mappa" value="map" />
        </Tabs>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', py: 2 }}>
        <FormControl size="small" sx={{ minWidth: 160 }}>
          <InputLabel id="event-year-label">Anno</InputLabel>
          <Select
            labelId="event-year-label"
            id="event-year"
            value={selectedYear}
            label="Anno"
            onChange={event => setSelectedYear(Number(event.target.value))}>
            {years.map(year => (
              <MenuItem key={year} value={year}>
                {year}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      {tab === 'list' && <ListView events={selectedEvents} onSelect={setSelectedEvent} />}
      {tab === 'map' && (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, width: '100%', minWidth: 0, mb: 2, mt: 2 }}>
          <React.Suspense fallback={null}>
            <MapView events={selectedEvents} onSelect={setSelectedEvent} />
          </React.Suspense>
        </Box>
      )}

      <EventDialog event={selectedEvent} onClose={() => setSelectedEvent(null)} />
    </Page>
  )
}

export default EventsPage
