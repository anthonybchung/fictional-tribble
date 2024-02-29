import React from 'react'
import Hamburger from './hamburger'
import Cross from './cross'

const MenuButton = ({closed=true}) => {

  const displayIcon = ()=>{
    return closed ? <Hamburger/>:<Cross/>
  }
  return (
    <button>
      {displayIcon()}
    </button>
  )
}

export default MenuButton