import { useEffect, useState } from 'react'
import { Box, Dialog, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

const SHOW_DELAY_MS = 3000
// Local midnight after Oct 25th, so the event is promoted through the whole day.
const EXPIRES_AT = new Date(2026, 9, 26)

const EventDialog = () => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (Date.now() >= EXPIRES_AT.getTime()) return
    const timer = setTimeout(() => setOpen(true), SHOW_DELAY_MS)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Dialog open={open} onClose={() => setOpen(false)} maxWidth={false} aria-label="Open Day event">
      <IconButton
        aria-label="Close"
        onClick={() => setOpen(false)}
        sx={{ position: 'absolute', top: 4, right: 4, bgcolor: 'background.paper', '&:hover': { bgcolor: 'background.paper' } }}>
        <CloseIcon />
      </IconButton>
      <Box
        component="img"
        src="/images/20261024_banner_open_day.webp"
        alt="Open Day, October 24th"
        sx={{
          display: 'block',
          width: 'auto',
          height: 'auto',
          maxWidth: 'calc(100vw - 64px)',
          maxHeight: 'calc(100vh - 64px)',
          objectFit: 'contain',
        }}
      />
    </Dialog>
  )
}

export default EventDialog
