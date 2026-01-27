import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {
  AppBar,
  AppBarProps,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
  TypographyProps,
  styled,
  useScrollTrigger,
  useTheme,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

const TypographyLink = styled(Typography)(({ theme }) => ({
  role: 'link',
  textDecoration: 'none',
  ...(theme.palette.mode === 'dark' && {
    color: 'inherit',
    ':hover': {
      color: theme.palette.primary.main,
    },
  }),
  ...(theme.palette.mode === 'light' && {
    color: theme.palette.text.primary,
    ':hover': {
      color: theme.palette.primary.dark,
    },
  }),
}))
const AppBarLink = (props: TypographyProps & { to: string }) => <TypographyLink component={RouterLink} variant="h6" {...props} />
const DrawerButton = styled(ListItemButton<typeof RouterLink>)(({ theme }) => ({
  textTransform: 'none',
  color: 'inherit',
  ':hover': {
    backgroundColor: 'transparent',
    color: theme.palette.primary.main,
  },
}))

interface CustomToolbarProps extends AppBarProps {
  drawerWidth?: number
  window?: Window
}
const CustomToolbar: React.FC<CustomToolbarProps> = ({ drawerWidth = 240, window, ...props }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const theme = useTheme()

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ?? undefined,
  })

  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState)
  }

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={theme => ({
        height: '100%',
        textAlign: 'center',
        ...(theme.palette.mode === 'light' && { backgroundColor: 'background.default' }),
      })}>
      <Typography
        variant="h6"
        sx={{
          // fontFamily: '"Cloister Black", cursive',
          textAlign: 'left',
          m: 2,
        }}>
        Compagnia d'Arme <small>del</small>
        <br /> Santo Luca
      </Typography>
      <Divider />
      <List>
        <ListItem key="Home" disablePadding>
          <DrawerButton component={RouterLink} to="/">
            <ListItemText primary="Home" />
          </DrawerButton>
        </ListItem>
        <ListItem key="Personaggi" disablePadding>
          <DrawerButton component={RouterLink} to="/people">
            <ListItemText primary="Personaggi" />
          </DrawerButton>
        </ListItem>
        <ListItem key="Contatti" disablePadding>
          <DrawerButton component={RouterLink} to="/contacts">
            <ListItemText primary="Contatti" />
          </DrawerButton>
        </ListItem>
      </List>
    </Box>
  )

  return (
    <>
      <AppBar
        elevation={theme.palette.mode === 'light' ? 1 : 0}
        {...props}
        sx={{
          backgroundColor: 'transparent',
          '@media print': { backgroundColor: 'background.default' },
          ...(trigger && {
            backgroundColor: 'hsla(155, 18%, 13%, 0.75)',
            backdropFilter: 'blur(8px)',
            boxShadow: theme.shadows[4],
          }),
          ...(theme.palette.mode === 'light' && {
            backgroundColor: 'hsla(0, 0%, 100%, 0.75)',
            backdropFilter: 'blur(8px)',
          }),
          transition: theme.transitions.create('background-color', {
            duration: theme.transitions.duration.shorter,
            easing: theme.transitions.easing.easeInOut,
          }),
          ...props.sx,
        }}>
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            // maxWidth: '100%',
            // [theme.breakpoints.up('md')]: { width: theme => theme.breakpoints.values.lg, mx: 'auto' },
          }}>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: { md: 'none' },
              position: 'absolute',
              backgroundColor: 'primary',
              '@media print': { display: 'none' },
            }}>
            <MenuIcon />
          </IconButton>

          <AppBarLink
            to="/"
            sx={theme => ({
              [theme.breakpoints.down('md')]: { mx: 'auto' },
              [theme.breakpoints.up('md')]: { mr: 'auto' },
            })}>
            Compagnia d'Arme del Santo Luca
          </AppBarLink>
          <Stack component="div" direction="row" spacing={2} sx={{ display: { xs: 'none', md: 'flex', alignItems: 'center' } }}>
            <AppBarLink to="/">Home</AppBarLink>
            <AppBarLink to="/people">Personaggi</AppBarLink>
            <Button component={RouterLink} to="/contacts" color="primary" variant="contained" sx={{ textTransform: 'none' }}>
              <Typography variant="h6">Contattaci</Typography>
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={theme => ({
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            backgroundColor: theme.palette.mode === 'dark' ? 'hsla(155, 18%, 13%, 0.85)' : 'hsla(0, 0%, 100%, 0.75)',
            backdropFilter: 'blur(8px)',
          },
        })}>
        {drawer}
      </Drawer>
    </>
  )
}

export default CustomToolbar
