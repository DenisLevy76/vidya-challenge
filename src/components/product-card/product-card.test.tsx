import '@testing-library/jest-dom'

import { ProductCard } from '.'
import { renderProvider } from '../../utils/renderProviders'
import { describe, expect, it } from 'vitest'
import { formatToCurrency } from '../../utils/convert-to-currency'

describe('<ProductCard />', () => {
  it('Should be render in the document', () => {
    const { getByText } = renderProvider(
      <ProductCard
        image=''
        name='Lapis'
        price={3.5}
      />
    )

    expect(getByText('Lapis')).toBeInTheDocument()
  })

  it('Should format the price to BRL', () => {
    const price = 3.5
    const { container } = renderProvider(
      <ProductCard
        image=''
        name='Lapis'
        price={price}
      />
    )
    expect(container.querySelector('.about > strong')?.textContent).toBe(
      formatToCurrency(price)
    )
  })
})
