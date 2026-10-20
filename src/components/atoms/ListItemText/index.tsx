import React from 'react'
import { ListItem, Typography, ListItemProps } from '@mui/material'

interface ListItemTextProps extends ListItemProps {
  title?: string
}
const ListItemText: React.FC<ListItemTextProps> = ({ title, children, ...props }) => (
  <ListItem component={Typography} color="text.secondary" {...props}>
    {title && (
      <Typography
        component="b"
        sx={{
          fontWeight: 700,
          color: 'text.primary',
        }}>
        {title}{' '}
      </Typography>
    )}
    {children}
  </ListItem>
)

export default ListItemText
