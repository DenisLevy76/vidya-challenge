import '@testing-library/jest-dom'

import { OrderCard } from '.'
import { renderProvider } from '../../utils/renderProviders'
import { describe, expect, it } from 'vitest'
import { theme } from '../../styles/theme'
import { formatToCurrency } from '../../utils/convert-to-currency'

describe('<OrderCard />', () => {
  it('Should be render in the document', () => {
    const { getByText } = renderProvider(
      <OrderCard
        name='Energia Verde'
        nQty={24}
        totalPrice={24.99}
      />
    )

    expect(getByText('Energia Verde')).toBeInTheDocument()
  })

  it('Should use secondary variant of photo component', () => {
    const { getByText } = renderProvider(
      <OrderCard
        name='Energia Verde'
        nQty={24}
        totalPrice={24.99}
      />
    )

    expect(getByText('EV')).toHaveStyle({
      backgroundColor: theme.colors.red,
    })
  })

  it('Should format the price', () => {
    const totalPrice = 24.99

    const { getByTestId } = renderProvider(
      <OrderCard
        name='Energia Verde'
        nQty={24}
        totalPrice={totalPrice}
      />
    )

    expect(getByTestId('price')).toContainHTML(formatToCurrency(totalPrice))
  })

  it('Should display the cart length', () => {
    const quantity = 12

    const { getByText } = renderProvider(
      <OrderCard
        name='Energia Verde'
        nQty={quantity}
        totalPrice={24.99}
      />
    )

    expect(getByText(`Qtd. produtos: ${quantity}`)).toBeInTheDocument()
  })
})
