import { Dialog, DialogProps, DialogTitle, DialogContent, IconButton, Typography, Stack, Divider } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

export type EmployeeDescription = {
  title: string
  position?: string
  image?: string
  body?: string[]
  captions?: string[]
}

export type EmployeeDescriptionDialogProps = DialogProps & {
  description: EmployeeDescription
}

const EmployeeDescriptionDialog: React.FC<EmployeeDescriptionDialogProps> = ({ description, ...props }) => (
  <Dialog fullWidth {...props}>
    <DialogTitle>
      <Typography variant="h4" component="div">
        {description.title}
      </Typography>
      {description.position && (
        <Typography variant="h6" color="text.secondary">
          {description.position}
        </Typography>
      )}
    </DialogTitle>
    <IconButton
      aria-label="close"
      onClick={props.onClose as React.MouseEventHandler<HTMLButtonElement>}
      sx={{
        position: 'absolute',
        right: 0,
        top: 0,
      }}>
      <CloseIcon />
    </IconButton>
    <DialogContent sx={{ pt: 0 }}>
      <img
        srcSet={description.image}
        src={description.image}
        alt={description.title}
        loading="lazy"
        style={{ width: '100%', objectFit: 'contain' }}
      />
      {description.body &&
        description.body.map((paragraph, idx) => (
          <Typography key={idx} pb={1}>
            {paragraph}
          </Typography>
        ))}
      {description.captions && (
        <>
          <Divider sx={{ my: 2 }} />
          <Stack color="text.secondary" mt={1} gap={1}>
            {description.captions.map((caption, idx) => (
              <Typography key={idx} variant="caption">
                {caption}
              </Typography>
            ))}
          </Stack>
        </>
      )}
    </DialogContent>
  </Dialog>
)

export default EmployeeDescriptionDialog
