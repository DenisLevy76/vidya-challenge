import '@testing-library/jest-dom'

import { ProductAbout } from '.'
import { renderProvider } from '../../utils/renderProviders'
import { describe, expect, it } from 'vitest'
import { fireEvent } from '@testing-library/react'
import { formatToCurrency } from '../../utils/convert-to-currency'

const productMock = {
  id: 'b1b6d7a3-2a5d-4814-9a67-fcdad094c10a',
  name: 'Lápis Grafite HB',
  price: 0.99,
  description: 'Lápis grafite com dureza HB para escrita suave e precisa.',
  image: 'https://localhost:3000/image',
}

describe('<ProductAbout />', () => {
  it('Should be render the trigger in the document', () => {
    const { getByTestId } = renderProvider(
      <ProductAbout
        children='abrir'
        product={productMock}
      />
    )

    expect(getByTestId('product-about-dialog-trigger')).toBeInTheDocument()
  })

  it('Should open the dialog after click in the trigger', () => {
    const { getByTestId, getByText } = renderProvider(
      <ProductAbout
        children='abrir'
        product={productMock}
      />
    )

    fireEvent.click(getByTestId('product-about-dialog-trigger'))
    expect(getByText('Detalhes do produto')).toBeInTheDocument()
    expect(getByText(productMock.name)).toBeInTheDocument()
    expect(getByTestId('product-price').textContent).toBe(
      formatToCurrency(productMock.price)
    )
    expect(getByTestId('product-image').getAttribute('src')).toBe(
      productMock.image
    )
    expect(getByText(productMock.description)).toBeInTheDocument()
  })
})
