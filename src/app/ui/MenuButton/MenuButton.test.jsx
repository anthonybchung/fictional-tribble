import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import MenuButton from './MenuButton'

describe('MenuButton',()=>{
  it('should render MenuButton component as button',()=>{
    render(<MenuButton/>)
    const menuButton = screen.getByRole('button')
  })

  it('should display a hamburger-icon when closed prop is true',()=>{
    render(<MenuButton closed={true}/>)
    const hamburgerIcon = screen.queryByTitle('Hamburger')
    expect(hamburgerIcon).toBeInTheDocument()
    const crossIcon = screen.queryByTitle('Cross')
    expect(crossIcon).not.toBeInTheDocument()
  })

  it('should not display a hamburder-icon when closed prop is false',()=>{
    render(<MenuButton closed={false}/>)
    screen.debug()
    const hamburgerIcon = screen.queryByTitle('Hamburger')
    expect(hamburgerIcon).not.toBeInTheDocument()
    const crossIcon = screen.queryByTitle('Cross')
    expect(crossIcon).toBeInTheDocument()
  })
})