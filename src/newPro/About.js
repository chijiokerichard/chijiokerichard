import React from 'react'
import cj from '../imgs/cj.jpg'
// import cj from './imgs/page/about-3.png'
// import cj from './imgs/page/about-8.png'
import { useTheme } from './Context'
import { BsArrowRight, BsTwitter } from 'react-icons/bs'
import { FaFacebookF, FaGithub, FaHtml5, FaPython } from 'react-icons/fa'
import { FaCss3, FaInstagram } from 'react-icons/fa6'
import { GrReactjs } from 'react-icons/gr'
import { SiTailwindcss } from 'react-icons/si'
import { TbBrandJavascript } from 'react-icons/tb'

function Home() {
    const { theme } = useTheme()
    return (
        <div className=' col-start-2 col-end-12 z-0 row-start-2 row-end-12 md:flex md:justify-between md:items-center md:px-[3rem]'>
            <div className={`md:h-[350px] relative   md:w-[350px] h-[250px] w-[90%]    justify-center  rounded-full flex items-center`}>
                <div className={`md:h-[350px]   md:w-[350px] h-[250px] im w-[250px] border ${theme === 'light' ? 'border-purple-500 text-purple-500' : 'border-green-300 text-green-300'}   justify-center  rounded-full flex items-center`}>
                    <img src={cj} className='md:w-[300px] md:ml-0  w-[220px] h-[220px] md:h-[300px] rounded-full' alt="" />
                </div>
                <div className='flex flex-col absolute md:left-[100%] left-[85%]  ml-[2rem] top-[15%] md:top-[20%]  bottom-30 md:w-[220px] mx-auto justify-between'>
                    <span className={`w-[30px] md:w-[35px] md:h-[35px] ${theme === 'light' ? 'text-purple-500' : 'text-green-300'}   left-[-20px] h-[30px]  flex items-center justify-center  rounded-full mylink`}>
                        <TbBrandJavascript />
                    </span>
                    <span className={`w-[30px] md:w-[35px] md:h-[35px] ${theme === 'light' ? 'text-purple-500' : 'text-green-300'}   right-[-20px]  h-[30px] flex items-center justify-center  rounded-full mylink`}>
                        <GrReactjs />
                    </span>
                    <span className={`w-[30px] md:w-[35px] md:h-[35px] ${theme === 'light' ? 'text-purple-500' : 'text-green-300'} bottom-[-20px] h-[30px] flex items-center justify-center  rounded-full mylink`}>
                        <FaPython />
                    </span>
                    <span className={`w-[30px] md:w-[35px] md:h-[35px] ${theme === 'light' ? 'text-purple-500' : 'text-green-300'}   top-[-20px] h-[30px] flex items-center justify-center  rounded-full mylink`}>
                        <FaHtml5 />
                    </span>
                    <span className={`w-[30px] md:w-[35px] md:h-[35px] ${theme === 'light' ? 'text-purple-500' : 'text-green-300'}   top-[-20px] h-[30px] flex items-center justify-center  rounded-full mylink`}>
                        <FaCss3 />
                    </span>
                    <span className={`w-[30px] md:w-[35px] md:h-[35px] ${theme === 'light' ? 'text-purple-500' : 'text-green-300'}   top-[-20px] h-[30px] flex items-center justify-center  rounded-full mylink`}>
                        <SiTailwindcss />
                    </span>
                </div>
            </div>
            <div className='flex flex-col md:w-[450px] dd w-full md:text-start text-center   p-3'>
                <h1 className={` text-2xl uppercase ${theme === 'light' ? 'text-purple-500' : ' text-green-300'}`}>About Me</h1>
                <p className='text-3xl my-3'>Incucate New Ideas Into Your Project</p>
                <div className='text-slate-500'>
                    In larger apps, it is common to combine context with a reducer
                    to extract the logic related to some state out of components.
                    In this example, all the “wiring” is hidden in the TasksContext.js,
                </div>
                <div className='md:mb-0 mb-[4rem]'>
                    <div className='md:flex flex my-2 justify-between gap-3'>
                        <div className='md:flex md:flex-col flex-col md:my-5 my-2 md:gap-5 gap-3'>
                            <span className='flex text-slate-500 text-center gap-1'><h1 className='font-bold text-black'>Name:</h1>Chijioke</span>
                            <span className='flex text-slate-500 gap-1'><h1 className='font-bold text-black'>Area:</h1>Frontend</span>
                        </div>
                        <div className='md:flex md:flex-col items-center justify-center md-w-full md:my-5 my-2  mx-auto md:gap-5 gap-2' >
                            <span className='flex text-slate-500 gap-1'><h1 className='font-bold text-black'>Location:</h1> Nigeria</span>
                            <span className='flex text-slate-500 gap-1'><h1 className='font-bold text-black'>Telephone:</h1>08028391376</span>
                        </div>
                    </div>
                    <div className='md:flex flex md:items-center justify-between gap-1   md:justify-between'>
                        <button className={` w-auto py-1 h-[40px] rounded-full md:px-2 px-2 my-2 shadow-lg shadow-orange-500 text-orange-500`}>Download Cv</button>
                        <BsArrowRight className={`md:text-3xl md:flex hidden ${theme === 'light' ? 'text-purple-500' : 'text-green-300'} `} />
                        <div className='flex items-center justify-center md:gap-3 gap-2'>
                            <p className='md:flex hidden'>Follow me</p>
                            <a className={`w-6 h-6 rounded-full flex items-center justify-center shadow-md ${theme === 'light' ? 'shadow-purple-500' : 'shadow-green-500'}`} href="#M"><BsTwitter /></a>
                            <a className={`w-6 h-6 rounded-full flex items-center justify-center shadow-md ${theme === 'light' ? 'shadow-purple-500' : 'shadow-green-500'}`} href="#M"><FaFacebookF /></a>
                            <a className={`w-6 h-6 rounded-full flex items-center justify-center shadow-md ${theme === 'light' ? 'shadow-purple-500' : 'shadow-green-500'}`} href="#M"><FaGithub /></a>
                            <a className={`w-6 h-6 rounded-full flex items-center justify-center shadow-md ${theme === 'light' ? 'shadow-purple-500' : 'shadow-green-500'}`} href="#M"><FaInstagram /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
