import React from 'react'
import { Box, Tab, Tabs, Typography } from '@mui/material'
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
  // const [selectedTab, setSelectedTab] = React.useState<ViewTab>('list')
  const [selectedEvent, setSelectedEvent] = React.useState<Event | null>(null)

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

      {tab === 'list' && <ListView events={events} onSelect={setSelectedEvent} />}
      {tab === 'map' && (
        <React.Suspense fallback={null}>
          <MapView events={events} onSelect={setSelectedEvent} />
        </React.Suspense>
      )}

      <EventDialog event={selectedEvent} onClose={() => setSelectedEvent(null)} />
    </Page>
  )
}

export default EventsPage
