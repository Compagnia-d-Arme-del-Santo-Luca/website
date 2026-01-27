import { Card, CardContent, CardMedia, CardProps, Typography } from '@mui/material'
import { FC } from 'react'

export interface EmplyeeCardProps extends CardProps {
  name: string
  image: string
  position?: string
}

export const EmplyeeCard: FC<EmplyeeCardProps> = ({ name, position, image, sx, ...props }) => {
  return (
    <Card sx={{ flexShrink: 0, width: 270, height: 360, ...sx }} {...props}>
      <CardMedia component="img" sx={{ minHeight: '140' }} image={image} alt={`${name} image`} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        {position && (
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {position}
          </Typography>
        )}
      </CardContent>
    </Card>
  )
}

export default EmplyeeCard
