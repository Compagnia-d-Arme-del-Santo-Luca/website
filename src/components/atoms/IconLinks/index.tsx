import { Description, Email, Facebook, Instagram, OndemandVideo, School, OpenInNew, OpenInBrowser } from '@mui/icons-material'
import { Badge, Link, LinkProps, SvgIcon } from '@mui/material'

interface IconLinkProps extends LinkProps {
  fontSize?: 'small' | 'large' | 'medium' | 'inherit'
  index?: number
}

interface IconWrapperProps extends IconLinkProps {
  Icon: typeof SvgIcon
}

const IconWrapper: React.FC<IconWrapperProps> = ({ index, fontSize, Icon, sx, ...props }) => {
  if (typeof index === 'undefined') {
    return (
      <Link
        color="inherit"
        rel="noopener noreferrer"
        target="_blank"
        underline="hover"
        sx={theme => ({
          color: 'inherit',
          ':hover': {
            backgroundColor: 'transparent',
            color: theme.palette.primary.main,
          },
          ...sx,
        })}
        {...props}>
        <Icon fontSize={fontSize} />
      </Link>
    )
  }
  return (
    <Link
      color="inherit"
      rel="noopener noreferrer"
      target="_blank"
      underline="hover"
      sx={theme => ({
        color: 'inherit',
        ':hover': {
          backgroundColor: 'transparent',
          color: theme.palette.primary.main,
        },
        ...sx,
      })}
      {...props}>
      <Badge badgeContent={index}>
        <Icon fontSize={fontSize} />
      </Badge>
    </Link>
  )
}

export const DescriptionIconLink = (props: IconLinkProps) => <IconWrapper aria-label="Doc-button" Icon={Description} {...props} />
export const EmailIconLink = (props: IconLinkProps) => <IconWrapper aria-label="Email-button" Icon={Email} {...props} />
export const InstagramIconLink = (props: IconLinkProps) => <IconWrapper aria-label="Instagram-button" Icon={Instagram} {...props} />
export const FacebookIconLink = (props: IconLinkProps) => <IconWrapper aria-label="LinkedIn-button" Icon={Facebook} {...props} />
export const AcademyIconLink = (props: IconLinkProps) => <IconWrapper aria-label="Academy-button" Icon={School} {...props} />
export const VideoIconLink = (props: IconLinkProps) => <IconWrapper aria-label="Video-button" Icon={OndemandVideo} {...props} />
export const ExternalIconLink = (props: IconLinkProps) => <IconWrapper aria-label="External-link-button" Icon={OpenInNew} {...props} />
export const ExternalAppIconLink = (props: IconLinkProps) => <IconWrapper aria-label="External-app-button" Icon={OpenInBrowser} {...props} />
