import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'

import MenuList from './MenuList'

describe('MenuList component',()=>{
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

  it('should render MenuList component',()=>{
    render(<MenuList/>)
  })

  it('should have a height: full screen if false is passed',()=>{
    render(<MenuList closed={false}/>)
    const ulElement = screen.getByRole('list')
    expect(ulElement).toHaveClass('pt-2 h-screen')
  })

  it('should have a height:0 if true is passed',()=>{
    render(<MenuList closed={true}/>)
    const ulElement = screen.getByRole('list')
    expect(ulElement).toHaveClass('pt-0 h-0')
  })

  it('should list prop:array',()=>{
    render(<MenuList closed={false} listItems={listItems}/>)
    const liElements = screen.getAllByRole('listitem')
    expect(liElements.length).toBe(3)
  })
})