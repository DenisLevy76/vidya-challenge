import { formatToCurrency } from '../../utils/convert-to-currency'
import { Photo } from '../photo'
import { OrderCardWrapper } from './styles'
import { OrderCardProps } from './types'

export const OrderCard: React.FC<OrderCardProps> = ({
  nQty,
  name,
  totalPrice,
}) => {
  return (
    <OrderCardWrapper>
      <Photo
        name={name}
        variant='secondary'
      />
      <p className='about'>
        <strong>{name}</strong>
        <span>Qtd. produtos: {nQty}</span>
      </p>
      <strong className='price'>{formatToCurrency(totalPrice)}</strong>
    </OrderCardWrapper>
  )
}
