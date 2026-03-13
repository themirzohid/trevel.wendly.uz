import { Navbar } from '@material-tailwind/react'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavbarWithSearch } from '../componet/Navbar'
import { FooterWithSocialLinks } from './Futer'

const Loyault = () => {
  return (
    <div>
        <NavbarWithSearch />
        <Outlet />
        <br />
        <br /> <br /> <br />  
        <FooterWithSocialLinks />
    </div>
  )
}

export default Loyault