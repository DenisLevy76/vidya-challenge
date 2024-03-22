import { ClientAboutDialog } from '../client-about-dialog'
import { Photo } from '../photo'
import { ClientsCardWrapper } from './styles'
import { ClientCardProps } from './types'

export const ClientCard: React.FC<ClientCardProps> = ({ CNPJ, name }) => {
  return (
    <ClientAboutDialog CNPJ={CNPJ}>
      <ClientsCardWrapper>
        <Photo
          name={name}
          variant='primary'
        />
        <span className='about'>
          <h3>{name}</h3>
          <span>{CNPJ}</span>
        </span>
      </ClientsCardWrapper>
    </ClientAboutDialog>
  )
}
