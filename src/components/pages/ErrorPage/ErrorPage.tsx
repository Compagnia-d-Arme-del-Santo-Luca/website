import { isRouteErrorResponse, useRouteError } from 'react-router-dom'
import { Typography } from '@mui/material'

import { SectionHeader } from 'components/atoms/index.js'
import { Page } from 'components/templates/index.js'

const ErrorPage: React.FC = () => {
  const error: unknown = useRouteError()
  return (
    <Page sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '90vh' }}>
      <SectionHeader variant="h1" component="h1" sx={{ textTransform: 'none' }}>
        Oops!
      </SectionHeader>
      <Typography variant="h6">Sorry, an unexpected error has occurred.</Typography>
      {isRouteErrorResponse(error) && (
        <Typography
          sx={{
            color: 'text.secondary',
          }}>
          {error.status} {error.data}
        </Typography>
      )}
    </Page>
  )
}

export default ErrorPage
