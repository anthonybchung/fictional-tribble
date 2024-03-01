import React from 'react'
import {clsx} from 'clsx'

const MenuList = ({closed}) => {
  return (
    <ul className={clsx(
      'w-100 px-4 bg-primary text-quaternary',
      {
        'pt-0 h-0': closed === true,
        'pt-2 h-screen': closed === false,
      }
    )}>

    </ul>
  )
}

export default MenuList