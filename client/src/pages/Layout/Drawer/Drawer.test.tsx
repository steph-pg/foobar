import { render } from "@testing-library/react"
import Drawer from "./Drawer"

describe('Drawer', () => { 
  test('should render', () => { 
    const { getByTestId } = render(<Drawer />)
    const drawer = getByTestId('drawer')
    expect(drawer).toBeInTheDocument
   })
})