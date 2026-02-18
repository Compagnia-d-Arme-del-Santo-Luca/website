import { Typography, TypographyProps } from '@mui/material'
import { FC } from 'react'

const Header: FC<TypographyProps> = props => <Typography variant="h4" component="h2" gutterBottom {...props} />

export default Header
