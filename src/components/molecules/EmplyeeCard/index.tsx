import { FC, useMemo } from 'react'
import { Card, CardActionArea, CardContent, CardMedia, CardProps, Typography } from '@mui/material'

import { EmployeeDescription } from 'components/molecules/EmployeeDescription/index.js'

export type EmployeeCardProps = Omit<CardProps, 'onClick'> & {
  name: string
  image: string
  position?: string
  description?: Partial<EmployeeDescription>
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>, description: EmployeeDescription) => void
}

export const EmplyeeCard: FC<EmployeeCardProps> = ({ name, position, image, description = {}, sx, onClick, ...props }) => {
  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    onClick(event, {
      title: name,
      image: image,
      position: position,
      ...description,
    })
  }
  const content = useMemo(
    () => [
      <CardMedia component="img" sx={{ minHeight: '140' }} image={image} alt={`${name} image`} />,
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        {position && (
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {position}
          </Typography>
        )}
      </CardContent>,
    ],
    [name, position, image]
  )
  return (
    <Card sx={{ flexShrink: 0, width: 270, height: 360, ...sx }} {...props} onClick={handleClick}>
      <CardActionArea>{content}</CardActionArea>
    </Card>
  )
}

export default EmplyeeCard
