import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'

import Navbar from './Navbar'
import userEvent from '@testing-library/user-event'
import { list } from 'postcss'

describe('Navbar',()=>{
  const listItems=[
    {
      name: "Projects",
      link: "/projects"
    },
    {
      name: "Hobbies",
      link: "/hobbies",
    },
    {
      name: "Contact Me",
      link: "/contact_me"
    }
  ]

  it('renders component',()=>{
    render(<Navbar/>)
  })

  it('get an array from prop and pass it to MenuList',()=>{
    render(<Navbar listItems={listItems}/>)
    const liElements = screen.queryAllByRole('listitem')
    expect(liElements.length).toBe(3)
  })

  it('should contain a state(default:true and pass it to MenuButton',()=>{
    render(<Navbar listItems={listItems}/>)
    const hamburgerIcon = screen.queryByTitle('Hamburger')
    expect(hamburgerIcon).toBeInTheDocument()
  })

  it('should pass a handler to change the state when clicked.',async()=>{
    render(<Navbar listItems={listItems}/>)
    const hamburgerIcon = screen.queryByTitle('Hamburger')
    expect(hamburgerIcon).toBeInTheDocument()
    await userEvent.click(screen.getByRole('button'))
    const crossIcon = screen.queryByTitle('Cross')
    expect(crossIcon).toBeInTheDocument()

  })

  it('should pass the state to MenuList',async()=>{
    render(<Navbar listItems={listItems}/>)
    const ulElement = screen.getByRole('list')
    expect(ulElement).toHaveClass('h-0')
    expect(ulElement).not.toHaveClass('h-screen')
    await userEvent.click(screen.getByRole('button'))
    expect(ulElement).toHaveClass('h-screen')
    expect(ulElement).not.toHaveClass('h-0')
  })

  it('should accept a prop:string for Company Name',()=>{
    render(<Navbar listItems={listItems} companyName='Hello World'/>)
    const companyName = screen.queryByText(/hello world/i)
    expect(companyName).toBeInTheDocument()
  })
})