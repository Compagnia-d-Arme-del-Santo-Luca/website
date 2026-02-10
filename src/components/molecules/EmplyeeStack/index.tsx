import { FC, useEffect, useState } from 'react'
import { Box, IconButton } from '@mui/material'
import ShuffleIcon from '@mui/icons-material/NextPlan'

import { EmplyeeCard, EmployeeCardProps } from 'components/molecules/EmplyeeCard/index.js'
import { EmployeeDescription } from 'components/molecules/EmployeeDescription/index.js'

interface Props {
  items: EmployeeCardProps[]
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>, description: EmployeeDescription) => void

  // Visual offsets
  offsetStep?: number // px shift per card
  maxVisible?: number // how many cards we actually render (performance)
}

const EmplyeeStack: FC<Props> = ({
  offsetStep = 10, // px shift per card
  maxVisible = 6, // how many cards we actually render (performance)
  items: initialItems,
  onClick,
}) => {
  const [items, setItems] = useState(initialItems)

  useEffect(() => {
    setItems(initialItems)
  }, [initialItems])

  const handleTopClick = () => {
    if (items.length) {
      setItems([...items.slice(1), items[0]])
    }
  }

  if (items.length === 0) return null
  if (items.length === 1) return <EmplyeeCard {...items[0]} onClick={onClick} />

  return (
    <Box
      sx={{
        position: 'relative',
        width: 270 + offsetStep * Math.min(initialItems.length - 1, maxVisible),
        height: 360 + offsetStep * Math.min(initialItems.length - 1, maxVisible),
      }}>
      {items.slice(0, maxVisible).map((props, idx) => (
        <EmplyeeCard
          {...props}
          onClick={onClick}
          key={idx}
          sx={{
            position: 'absolute',
            top: idx * offsetStep,
            left: idx * offsetStep,
            zIndex: initialItems.length - idx, // top card gets highest z-index
          }}
        />
      ))}
      <IconButton
        onClick={handleTopClick}
        sx={{
          position: 'absolute',
          color: 'text.primary',
          backgroundColor: 'background.paper',
          '&:hover': { backgroundColor: 'background.paper' },
          padding: 0,
          right: Math.min(initialItems.length - 2, maxVisible - 1) * offsetStep,
          top: -offsetStep,
          zIndex: initialItems.length + 1,
          rotate: '30deg',
        }}>
        <ShuffleIcon fontSize="large" />
      </IconButton>
    </Box>
  )
}

export default EmplyeeStack
