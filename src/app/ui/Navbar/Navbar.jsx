'use client'

import React, { useEffect, useState } from 'react'
import MenuList from '../MenuList/MenuList'
import MenuButton from '../MenuButton/MenuButton'

const Navbar = ({listItems, companyName}) => {

  const [closed,setClosed]=useState(true)
  
  const handleClose = ()=>{
    setClosed(prev=>!prev)
  }

  useEffect(()=>{
    if(closed){
      document.body.classList.add('overflow-auto')
      document.body.classList.remove('overflow-hidden')
    }else{
      document.body.classList.add('overflow-hidden')
      document.body.classList.remove('overflow-auto')
    }
  },[closed])

  return (
    <nav className='h-12 w-screen px-6 bg-primary text-quaternary flex flex-row items-center justify-between'>
      <h1>{companyName}</h1>
      <MenuList listItems={listItems} closed={closed}/>
      <MenuButton closed={closed} handleClick={handleClose}/>
    </nav>
  )
}

export default Navbar