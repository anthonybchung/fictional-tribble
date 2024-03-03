import React from 'react'
import Hamburger from './hamburger'
import Cross from './cross'

const MenuButton = ({closed=true, handleClick}) => {

  const displayIcon = ()=>{
    return closed ? <Hamburger/>:<Cross/>
  }
  return (
    <button className='md:hidden' onClick={handleClick}>
      {displayIcon()}
    </button>
  )
}

export default MenuButton