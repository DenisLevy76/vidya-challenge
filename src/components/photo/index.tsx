import { getInitial } from '../../utils/get-initials-from-name'
import { PhotoWrapper } from './styles'
import { PhotoProps } from './types'

export const Photo: React.FC<PhotoProps> = ({ name, variant }) => {
  return <PhotoWrapper variant={variant}>{getInitial(name)}</PhotoWrapper>
}
