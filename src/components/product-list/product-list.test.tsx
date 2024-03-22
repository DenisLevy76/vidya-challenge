import '@testing-library/jest-dom'

import { ProductList } from '.'
import { renderProvider } from '../../utils/renderProviders'
import { describe, expect, it, vi } from 'vitest'
import { fireEvent } from '@testing-library/react'
import { formatToCurrency } from '../../utils/convert-to-currency'

describe('<ProductList />', () => {
  it('Should be render in the document', () => {
    const { getByText } = renderProvider(
      <ProductList
        id='123'
        image=''
        name='Caneta'
        price={2.99}
      />
    )

    expect(getByText('Caneta')).toBeInTheDocument()
  })

  it('Should increase the quantity count', () => {
    const onValueChange = vi.fn()

    const { getByText } = renderProvider(
      <ProductList
        id='123'
        image=''
        name='Caneta'
        price={2.99}
        onValueChange={onValueChange}
      />
    )

    fireEvent.click(getByText('+'))

    expect(onValueChange).toBeCalledWith(1)
  })

  it('Should decrease the quantity count', () => {
    const onValueChange = vi.fn()

    const { getByText } = renderProvider(
      <ProductList
        id='123'
        image=''
        name='Caneta'
        price={2.99}
        onValueChange={onValueChange}
      />
    )

    fireEvent.click(getByText('+'))
    expect(onValueChange).toBeCalledWith(1)
    fireEvent.click(getByText('-'))
    expect(onValueChange).toBeCalledWith(0)
  })

  it('Should show the count value in the input', () => {
    const { container, getByText } = renderProvider(
      <ProductList
        id='123'
        image=''
        name='Caneta'
        price={2.99}
      />
    )

    fireEvent.click(getByText('+'))
    expect(
      container.querySelector('input[type="text"]')?.getAttribute('value')
    ).toBe('1')
    fireEvent.click(getByText('-'))
    expect(
      container.querySelector('input[type="text"]')?.getAttribute('value')
    ).toBe('0')
  })

  it('Should show price formatted', () => {
    const price = 2.99
    const { container } = renderProvider(
      <ProductList
        id='123'
        image=''
        name='Caneta'
        price={price}
      />
    )

    expect(container.querySelector('.price')?.textContent).toBe(
      formatToCurrency(price)
    )
  })
})
