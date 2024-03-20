import { Photo } from '../photo'
import { ClientsCardWrapper } from './styles'

export const ClientCard: React.FC = () => {
  return (
    <ClientsCardWrapper>
      <Photo
        name='Império dos Sonhos'
        variant='primary'
      />
      <p className='about'>
        <h3>Energia Verde</h3>
        <span>00.000.000/0000-00</span>
      </p>
    </ClientsCardWrapper>
  )
}
