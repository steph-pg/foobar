import { render } from '@testing-library/react'
import { Home } from './'

describe('Homepage', () => { 
  test('should renders', () => { 
    const homepage = render(<Home />)
    const title = homepage.getByText('Home')

    expect(title).toBeInTheDocument
  })
})