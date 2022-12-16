import { render } from '@testing-library/react'
import Layout from './Layout'

describe('Layout', () => {
  test('contains header', () => {
    const { getByTestId } = render(<Layout />)
    const header = getByTestId('header')
    expect(header).toBeInTheDocument
  })

  test('contains drawer', () => {
    const { getByTestId } = render(<Layout />)
    const drawer = getByTestId('drawer')
    expect(drawer).toBeInTheDocument
  })
})