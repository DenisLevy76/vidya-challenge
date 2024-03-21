import { formatToCurrency } from '../../utils/convert-to-currency'
import { ProductCardWrapper } from './styles'
import { ProductCardProps } from './types'

export const ProductCard: React.FC<ProductCardProps> = ({
  image,
  name,
  price,
}) => {
  return (
    <ProductCardWrapper>
      <header>
        <img src={image} />
      </header>
      <div className='about'>
        <h2>{name}</h2>
        <strong>{formatToCurrency(price)}</strong>
      </div>
    </ProductCardWrapper>
  )
}
