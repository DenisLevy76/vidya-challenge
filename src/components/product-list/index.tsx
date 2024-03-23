import { useEffect, useState } from 'react'
import { formatToCurrency } from '../../utils/convert-to-currency'
import { IconButton } from '../icon-button'
import { ProductListWrapper } from './styles'
import { ProductListProps } from './types'

export const ProductList: React.FC<ProductListProps> = ({
  onValueChange,
  id,
  image,
  name,
  price,
  quantity,
}) => {
  const [count, setCount] = useState<number>(quantity || 0)

  const handleIncrement = () => {
    setCount((prev) => prev + 1)
  }
  const handleDecrement = () => {
    count > 0 && setCount((prev) => prev - 1)
  }

  useEffect(() => {
    onValueChange && onValueChange(count)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count])

  return (
    <ProductListWrapper>
      <img
        src={image}
        alt=''
      />

      <div className='product-info'>
        <h3>{name}</h3>
        <span>Cód. {id}</span>
        <div className='counter'>
          <IconButton
            onClick={handleDecrement}
            disabled={count === 0}
          >
            -
          </IconButton>
          <input
            type='text'
            readOnly
            aria-label='Quantidade'
            value={count}
          />
          <IconButton onClick={handleIncrement}>+</IconButton>
        </div>
      </div>

      <strong className='price'>{formatToCurrency(price)}</strong>
    </ProductListWrapper>
  )
}
