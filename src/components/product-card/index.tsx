import { formatToCurrency } from '../../utils/convert-to-currency'
import { IconButton } from '../icon-button'
import { ProductCardWrapper } from './styles'
import { ProductCardProps } from './types'

export const ProductCard: React.FC<ProductCardProps> = ({
  image,
  name,
  price,
}) => {
  return (
    <IconButton aria-label='Ver detalhes deste produto'>
      <ProductCardWrapper>
        <header>
          <img src={image} />
        </header>
        <div className='about'>
          <h2>{name}</h2>
          <strong>{formatToCurrency(price)}</strong>
        </div>
      </ProductCardWrapper>
    </IconButton>
  )
}
