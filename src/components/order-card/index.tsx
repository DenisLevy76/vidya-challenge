import { formatToCurrency } from '../../utils/convert-to-currency'
import { Photo } from '../photo'
import { OrderCardWrapper } from './styles'

export const OrderCard: React.FC = () => {
  return (
    <OrderCardWrapper>
      <Photo
        name='Império dos Sonhos'
        variant='secondary'
      />
      <p className='about'>
        <h3>Império dos Sonhos</h3>
        <span>Qtd. produtos: 123</span>
      </p>
      <strong className='price'>{formatToCurrency(49.99)}</strong>
    </OrderCardWrapper>
  )
}
