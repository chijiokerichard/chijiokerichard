import React from 'react'
import { BsBell, BsSearch } from 'react-icons/bs'
import { FaRegCircleDot } from 'react-icons/fa6'
import profile from './css/about.module.css'
import cj from '../imgs/cj.jpg'
import { useSelected, useTheme, useToggle } from './Context'
import { FaBars } from 'react-icons/fa'

function Header() {
    const { theme } = useTheme()
    const {toggle,setToggle} = useToggle()
    const {selected} = useSelected()
    return (
        <div className={`  col-start-2 col-end-12 md:z-6 z-10 mx-auto bg-white shadow-md ${theme === 'light' ? 'shadow-purple-500' : 'shadow-green-300'} row-start-1 row-end-2 md:left-[225px] fixed w-[100%] h-[70px] md:h-[100px]`}>
            <form className='flex  items-center h-full justify-between px-3 md:w-[83%] w-full '>
                <div className='md:flex hidden items-center justify-between w-[40%] gap-4 col-start-1 col-end-2'>
                    <h1 className={`text-xl uppercase w-[100px] text-center shadow-orange-500 text-orange-500 shadow-md`}>{selected}</h1>
                    <div className={`bg-white rounded-full px-1 h-[45px] flex items-center justify-center
                     w-[350px] shadow-md text-black ${theme === 'dark' ? 'shadow-green-300' : 'shadow-purple-500'}`}>
                        <input className={` w-[87%] flex h-[32px] outline-none 
                        ${theme === 'light' ? 'placeholder:text-purple-500' : 'placeholder:text-green-300'}`} placeholder='search' />
                        <button className={`w-[33px] h-[33px] shadow-md rounded-full flex 
                        items-center text-center justify-center my-auto text-xl ${theme === 'light' ? 'shadow-purple-500 text-purple-500' : 'shadow-green-300 text-green-300'}`}><BsSearch /></button>
                    </div>
                </div>
                <div className='md:flex flex md:items-center items-center md:justify-end justify-between w-full'>
                    <div className='flex items-center justify-center'>
                        <div style={{ marginRight: '25px' }} className={`h-[40px] w-[40px] rounded-full shadow-md text-black
                     ${theme === 'dark' ? 'shadow-green-300' : 'shadow-purple-500'} relative`}>
                            <FaRegCircleDot fontSize='10px' className={`  cursor-pointer ${theme === 'light' ? 'text-purple-500' : 'text-green-300'}  ${profile.dot}`} />
                            <BsBell fontSize='1.5rem' className={`${theme === 'light' ? ' text-purple-500' : ' text-green-300'} ${profile.mainBell}`} />
                        </div>
                        <div className='flex items-center justify-center gap-2'>
                            <img className='w-[50px] h-[50px] rounded-full' src={cj} alt="" />
                            <div>
                                <h1 className={`font-serif font-bold
                             ${theme === 'dark' ? ' text-green-300' :
                                        ' text-purple-500'}`}><span className='md:flex hidden'>Chijioke Igwe</span> <span className='md:hidden flex'>hi, Igwe</span></h1>
                                <span className={`font-serif p-1 md:flex hidden
                               text-center
                               ${theme === 'dark' ? ' text-green-300' :
                                        ' text-purple-500'}`}>chijiokerichard61@gmail.com</span>
                            </div>
                        </div>
                    </div>
                    <div className='md:hidden text-end flex w-[40px] h-[40px] justify-center rounded-full shadow-inner bg-white shadow-slate-300 p-[4px]'>
                    <FaBars className='text-3xlr text-center w-[26px] cursor-pointer h-[26px] text-purple-500' onClick={()=>setToggle(!toggle)}/>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Header
