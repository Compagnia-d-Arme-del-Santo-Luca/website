// src/components/StackedDeck.tsx
import { FC, useEffect, useState } from 'react'
import { Box } from '@mui/material'
import { EmplyeeCard, EmplyeeCardProps } from 'components/molecules/EmplyeeCard/index.js'

interface Props {
  items: EmplyeeCardProps[]

  // Visual offsets
  offsetStep?: number // px shift per card
  maxVisible?: number // how many cards we actually render (performance)
}

const EmplyeeStack: FC<Props> = ({
  offsetStep = 10, // px shift per card
  maxVisible = 6, // how many cards we actually render (performance)
  items: initialItems,
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
  if (items.length === 1) return <EmplyeeCard {...items[0]} />

  return (
    <Box
      onClick={handleTopClick}
      sx={{
        position: 'relative',
        width: 270 + offsetStep * (initialItems.length - 1),
        height: 360 + offsetStep * (initialItems.length - 1),
      }}>
      {items.slice(0, maxVisible).map((props, idx) => (
        <EmplyeeCard
          {...props}
          key={idx}
          sx={{
            cursor: 'pointer',
            position: 'absolute',
            top: idx * offsetStep,
            left: idx * offsetStep,
            zIndex: initialItems.length - idx, // top card gets highest z-index
          }}
        />
      ))}
    </Box>
  )
}

export default EmplyeeStack
