import React, { useState } from 'react'
import MenuList from '../MenuList/MenuList'
import MenuButton from '../MenuButton/MenuButton'

const Navbar = ({listItems, companyName}) => {

  const [closed,setClosed]=useState(true)
  
  const handleClose = ()=>{
    setClosed(prev=>!prev)
  }

  return (
    <nav>
      <h1>{companyName}</h1>
      <MenuList listItems={listItems} closed={closed}/>
      <MenuButton closed={closed} handleClick={handleClose}/>
    </nav>
  )
}

export default Navbar