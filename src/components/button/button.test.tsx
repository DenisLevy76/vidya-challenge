import '@testing-library/jest-dom'

import { Button } from '.'
import { renderProvider } from '../../utils/renderProviders'
import { describe, expect, it, vi } from 'vitest'
import { fireEvent } from '@testing-library/react'

describe('<Button />', () => {
  it('Should be render in the document', () => {
    const { getByText } = renderProvider(<Button>Click me</Button>)

    expect(getByText('Click me')).toBeInTheDocument()
  })

  it('Should be render with "Click me" text', () => {
    const { getByText } = renderProvider(<Button>Click me</Button>)

    expect(getByText('Click me')).toHaveTextContent('Click me')
  })

  it('Should call onClick function on user mouse click', () => {
    const onClick = vi.fn()
    const { getByText } = renderProvider(
      <Button onClick={onClick}>Click me</Button>
    )

    fireEvent.click(getByText('Click me'))

    expect(onClick).toBeCalledTimes(1)
  })

  it('Should have padding 5px 1.5rem in small size', () => {
    const { getByText } = renderProvider(<Button size='small'>Click me</Button>)

    expect(getByText('Click me')).toHaveStyle({
      padding: '5px 1.5rem',
    })
  })
})
