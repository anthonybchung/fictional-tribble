import React from 'react'
import {clsx} from 'clsx'
import Link from 'next/link'

const MenuList = ({closed, listItems=[]}) => {

  const displayListItems = listItems.map((item)=>{
      return (
        <li className='my-4 mr-8 text-right' key={item.name}>
          <Link href={item.link}>{item.name}</Link>
        </li>
      )
    })
  return (
    <ul className={clsx(
      'w-screen px-4 bg-primary text-quaternary flex flex-col content-end absolute top-12 left-0 overflow-hidden',
      {
        'pt-0 h-0': closed === true,
        'pt-2 h-screen': closed === false,
      }
    )}>
      {displayListItems}
    </ul>
  )
}

export default MenuList