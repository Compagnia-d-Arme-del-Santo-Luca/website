import { Link, List, ListItem, Stack, Typography } from '@mui/material'
import DraftsIcon from '@mui/icons-material/Drafts'
import FacebookIcon from '@mui/icons-material/Facebook'
import Instagram from '@mui/icons-material/Instagram'

import { Page } from 'components/templates/index.js'

interface ListItemProps {
  children?: React.ReactNode
  href?: string
}
const ListItemLink: React.FC<ListItemProps> = ({ children, ...props }) => (
  <ListItem>
    <Link
      {...props}
      rel="noopener noreferrer"
      target="_blank"
      underline="hover"
      sx={theme => ({
        color: 'inherit',

        h6: {
          color: theme.palette.text.secondary,
        },
        ':hover': {
          backgroundColor: 'transparent',
          color: theme.palette.primary.main,
          h6: {
            color: theme.palette.primary.dark,
          },
        },
      })}>
      <Stack direction="row" alignItems="center">
        {children}
      </Stack>
    </Link>
  </ListItem>
)

const ContactPage = () => {
  return (
    <Page title="Contatti">
      <Typography align="left" variant="h6">
        Sentiti libero di contattatarci con uno qualsiasi dei seguenti:
      </Typography>
      <List>
        <ListItemLink href="mailto:compagniasantoluca@gmail.com" aria-label="Email link">
          <DraftsIcon fontSize="large" />
          <Typography variant="h6" ml={2}>
            compagniasantoluca
            <wbr />
            @gmail.com
          </Typography>
        </ListItemLink>
        <ListItemLink aria-label="Facebook Link" href="https://facebook.com/compagniadarmedelsantoluca">
          <FacebookIcon fontSize="large" />
          <Typography variant="h6" ml={2}>
            @compagniadarmedelsantoluca
          </Typography>
        </ListItemLink>
        <ListItemLink aria-label="Instagram link" href="https://www.instagram.com/compagnia_darme_santo_luca/">
          <Instagram fontSize="large" />
          <Typography variant="h6" ml={2}>
            @compagnia_darme_santo_luca
          </Typography>
        </ListItemLink>
      </List>
    </Page>
  )
}

export default ContactPage
