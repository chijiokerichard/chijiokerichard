// import React from 'react'

// function Order() {
//   return (
//     <div>
//       <h1>Order</h1>


//     </div>
//   )
// }

// export default Order

import React from 'react'
import navbarStyle from './navbar.module.css'
import { CiSettings } from 'react-icons/ci'
import { CgProfile } from 'react-icons/cg'
import { BiCart, BiHome } from 'react-icons/bi'
import { FaCcDiscover } from 'react-icons/fa'
import { MdLightMode } from 'react-icons/md'
import { FiLogOut } from 'react-icons/fi'
import { BsMoon } from 'react-icons/bs'


function Navbar() {
    const { firstUl, nav, secondUl, bright, logo, logout } = navbarStyle
    return (
        <nav className={nav}>
            <div className={logo} style={{ fontWeight: 'bolder' }}>
                <span style={{ color: 'blue', marginLeft: '2rem' }}>Gas</span><span>Hub</span>
            </div>
            <div>
                <div className={firstUl}>
                    <li><BiHome />Home</li>
                    <li><FaCcDiscover />Discover</li>
                    <li><BiCart />Orders</li>
                    <li><CgProfile />Profile</li>
                    <li><CiSettings />Settings</li>
                </div>
            </div>
            <div>
                <li className={`text-danger d-flex align-items-center ${logout}`}><FiLogOut /> Logout</li>
            </div>
            <div className={secondUl}>
                <div className={bright}>
                    <li><span><MdLightMode /> Light</span></li>
                    <li><span><BsMoon /> Dark</span></li>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
