import { formatToCurrency } from '../../utils/convert-to-currency'
import { IconButton } from '../icon-button'
import { ProductCardWrapper } from './styles'

export const ProductCard: React.FC = () => {
  return (
    <IconButton aria-label='Ver detalhes deste produto'>
      <ProductCardWrapper>
        <header>
          <img src='https://source.unsplash.com/random' />
        </header>
        <div className='about'>
          <h2>Lapis</h2>
          <strong>{formatToCurrency(9.99)}</strong>
        </div>
      </ProductCardWrapper>
    </IconButton>
  )
}
