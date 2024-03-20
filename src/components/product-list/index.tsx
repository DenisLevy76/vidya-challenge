import { useEffect, useState } from 'react'
import { formatToCurrency } from '../../utils/convert-to-currency'
import { IconButton } from '../icon-button'
import { ProductListWrapper } from './styles'
import { ProductListProps } from './types'

export const ProductList: React.FC<ProductListProps> = ({ onValueChange }) => {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount((prev) => prev + 1)
  }
  const handleDecrement = () => {
    count > 0 && setCount((prev) => prev - 1)
  }

  useEffect(() => {
    onValueChange && onValueChange(count)
  }, [count, onValueChange])

  return (
    <ProductListWrapper>
      <img
        src='https://source.unsplash.com/random'
        alt=''
      />

      <div className='product-info'>
        <h3>Produto 1</h3>
        <span>Cód. 1</span>
        <div className='counter'>
          <IconButton
            onClick={handleDecrement}
            disabled={count === 0}
          >
            -
          </IconButton>
          <p>{count}</p>
          <IconButton onClick={handleIncrement}>+</IconButton>
        </div>
      </div>

      <strong className='price'>{formatToCurrency(49.99)}</strong>
    </ProductListWrapper>
  )
}
