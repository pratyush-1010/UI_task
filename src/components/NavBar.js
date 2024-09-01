import React from 'react'
import { Button } from 'react-bootstrap'
import { IoSearch } from "react-icons/io5";
const NavBar = () => {
  return (
<div className='navv'>
    <div className='navbars'>
        <div>Subscribe</div>
        <h1>Large</h1>
        <div>
        <IoSearch />
        <Button variant="outline-secondary ms-2">Sign up</Button>
        </div>
    </div>
</div>

  )
}

export default NavBar