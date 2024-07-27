import React from 'react'
import cj from './imgs/page/about-5.png'
import { useTheme } from './Context'
import { BsTiktok, BsWhatsapp } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
import { CgInstagram } from 'react-icons/cg'
import './css/home.css'

function Home() {
    const {theme} = useTheme()
    return (
        <div className=' col-start-2 col-end-12 md:mt-[-3rem] md:mb-0  z-0  row-start-2 row-end-12  mb-[3rem]  h-[90vh] md:flex md:flex-row  items-center md:justify-between justify-center md:px-20 px-1'>
            <div>
                <div className='md:text-start text-center'>
                    <p className='text-3xl font-extralight'>Hi am,</p>
                    <h1 className='md:text-6xl text-4xl my-2'>Igwe <span className={`${theme === 'light'?'text-purple-500':'text-green-300'}`}>Chijioke</span> </h1>
                    <span className='text-2xl font-extralight'>A frontend web developer</span>
                    <p className='md:w-[290px] w-full px-1 mt-6 font-mono text-slate-500'>delivering top nutch services is my number one piority am at your servivce</p>
                </div>
                <div className='flex items-center md:justify-start justify-center gap-3 md:mt-10 my-[40px]'>
                    <button className={`${theme === 'light'? 'bg-purple-500': 'bg-green-300'} text-white rounded-full w-[100px] p-1`}>services</button>
                    <button className='bg-white rounded-full w-[100px]  shadow-orange-500  im p-1 text-orange-500'>let's connect</button>
                </div>
            </div>
            <div className={`md:h-[350px] md:mx-0 mx-auto relative md:w-[350px] h-[270px] im w-[270px] border-2 ${theme === 'light'?  'border-purple-500 text-purple-500' :'border-green-300 text-green-300'}  justify-center  rounded-full flex items-center`}>
                <img src={cj} className='md:w-[300px] w-[240px] h-[240px] md:h-[300px] rounded-full' alt="" />
                <span className='w-[30px] md:w-[35px] md:h-[35px] absolute link left-[-20px] h-[30px]  flex items-center justify-center  rounded-full mylink'>
                <BsWhatsapp/> 
                </span>
                <span className='w-[30px] md:w-[35px] md:h-[35px] absolute link right-[-20px]  h-[30px] flex items-center justify-center  rounded-full mylink'>
                <FaFacebook/>
                </span>
                <span className='w-[30px] md:w-[35px] md:h-[35px] absolute link bottom-[-20px] h-[30px] flex items-center justify-center  rounded-full mylink'>
                <CgInstagram/> 
                </span>
                <span className='w-[30px] md:w-[35px] md:h-[35px] absolute link top-[-20px] h-[30px] flex items-center justify-center  rounded-full mylink'>
                <BsTiktok/>
                </span>
            </div>
        </div>
    )
}

export default Home
