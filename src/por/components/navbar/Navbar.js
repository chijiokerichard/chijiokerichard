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
    return (
        <nav className='md:grid grid-rows-[100px] hidden  items-start lg:fixed w-[256px] border h-full border-t-0 border-l-0 border-b-0 pr-3 mr-[2rem]'>
            <div className='text-4xl row-start-1 row-end-4 pt-6 flex items-center justify-center gap-4' style={{ fontWeight: 'bolder' }}>
                <span style={{ color: 'blue', marginLeft: '2rem' }}>Gas</span><span className='text-red-700'>Hub</span>
            </div>
            <div className='row-start-4 row-end-5 grid grid-cols-1 grid-row-[30% auto] justify-stretch items-center list-none gap-1'>
                <li className='flex gap-1 items-center justify-start rounded-md border-4 bg-slate-300  border-t-0 border-b-0 border-r-0 border-red-600'><BiHome />Home</li>
                <li className='flex gap-1 items-center justify-start rounded-md border-0 hover:bg-slate-300  border-t-0 border-b-0 border-r-0 '><FaCcDiscover />Discover</li>
                <li className='flex gap-1 items-center justify-start rounded-md border-0 hover:bg-slate-300  border-t-0 border-b-0 border-r-0'><BiCart />Orders</li>
                <li className='flex gap-1 items-center justify-start rounded-md border-0 hover:bg-slate-300  border-t-0 border-b-0 border-r-0'><CgProfile />Profile</li>
                <li className='flex gap-1 items-center justify-start rounded-md border-0 hover:bg-slate-300  border-t-0 border-b-0 border-r-0'><CiSettings />Settings</li>
            </div>
            <div className='grid grid-cols-1 grid-rows-[50px]'>
                <li className={`text-red-600 flex items-center row-start-2 row-end-3`}><FiLogOut /> Logout</li>
                <div className='grid grid-cols-2 grid-rows-[100%] rounded-md list-none 
                justify-start h-[30px] bg-[#e7e1e1] pr-3 row-start-3 row-end-6 items-center'>
                    <li> <span className='flex items-center shadow-md bg-white w-[40px] h-[30px] rounded-md'><MdLightMode /> Light</span></li>
                    <li ><span className='flex items-center'><BsMoon /> Dark</span></li>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
