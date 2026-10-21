import React from 'react'
import { Box, Button, Chip, Stack, Typography, useTheme } from '@mui/material'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import InfoIcon from '@mui/icons-material/InfoOutlined'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { divIcon } from 'leaflet'
import 'leaflet/dist/leaflet.css'

import type { Event } from './types.js'

/** Creates a numbered teardrop pin SVG as a Leaflet divIcon */
const makeNumberedIcon = (n: number, color: string, isPast: boolean) => {
  const fill = isPast ? '#9e9e9e' : color
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="42" viewBox="0 0 32 42">
      <path d="M16 0 C7.163 0 0 7.163 0 16 C0 28 16 42 16 42 C16 42 32 28 32 16 C32 7.163 24.837 0 16 0 Z"
            fill="${fill}" stroke="white" stroke-width="1.5"/>
      <text x="16" y="20" font-family="sans-serif" font-size="13" font-weight="bold"
            fill="white" text-anchor="middle" dominant-baseline="middle">${n}</text>
    </svg>`
  return divIcon({
    html: svg,
    className: '',
    iconSize: [32, 42],
    iconAnchor: [16, 42],
    popupAnchor: [0, -44],
  })
}

interface MapViewProps {
  events: Event[]
  onSelect: (event: Event) => void
}

const formatDateRange = (date: Date, endDate?: Date): string => {
  const fmt = (d: Date) => d.toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' })
  if (!endDate) return fmt(date)
  if (date.getMonth() === endDate.getMonth() && date.getFullYear() === endDate.getFullYear()) {
    return `${date.getDate()}–${endDate.getDate()} ${date.toLocaleDateString('it-IT', { month: 'long', year: 'numeric' })}`
  }
  return `${fmt(date)} – ${fmt(endDate)}`
}

const isUpcoming = (date: Date) => date >= new Date()

const CENTER: [number, number] = [43.5, 12.5] // roughly central Italy

const MapView: React.FC<MapViewProps> = ({ events, onSelect }) => {
  const theme = useTheme()
  const primaryColor = theme.palette.primary.main
  const today = new Date()

  const sorted = [...events].sort((a, b) => b.date.getTime() - a.date.getTime())

  return (
    <Box
      sx={{
        px: { xs: 2, md: 4, lg: 0 },
        pb: 4,
        '& .leaflet-container': {
          height: { xs: 420, md: 560 },
          width: '100%',
          borderRadius: 2,
          border: `1px solid ${theme.palette.divider}`,
        },
      }}>
      <MapContainer center={CENTER} zoom={6} scrollWheelZoom style={{ height: 560, width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>'
          url={`https://basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png?key=${import.meta.env.VITE_EV_CARTO_KEY}`}
        />
        {sorted.map((event, idx) => (
          <Marker
            key={event.id}
            position={[event.location.lat, event.location.lng]}
            icon={makeNumberedIcon(sorted.length - idx, primaryColor, event.date < today)}>
            <Popup>
              <Stack sx={{ gap: 0.5, justifyContent: 'flex-end' }}>
                <Stack direction="row" sx={{ gap: 1, justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <Typography variant="h6" component="h2" sx={{ flexGrow: 1 }}>
                    {event.title}
                  </Typography>
                  {!isUpcoming(event.date) && <Chip label="Passato" size="small" color="default" />}
                </Stack>
                <Stack direction="row" sx={{ gap: 0.5, alignItems: 'center' }}>
                  <LocationOnIcon fontSize="small" />
                  <Typography variant="caption">
                    {event.location.name}
                    <br /> {event.location.city}
                  </Typography>
                </Stack>
                <Stack direction="row" sx={{ gap: 0.5, alignItems: 'center', mb: 0.5 }}>
                  <CalendarMonthIcon fontSize="small" />
                  <Typography variant="caption">{formatDateRange(event.date, event.endDate)}</Typography>
                </Stack>
                <Button startIcon={<InfoIcon />} size="small" variant="contained" onClick={() => onSelect(event)}>
                  Dettagli
                </Button>
              </Stack>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </Box>
  )
}

export default MapView
