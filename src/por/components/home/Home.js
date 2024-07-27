import React from 'react'
import homeStyle from './home.module.css'
import { BsClock } from 'react-icons/bs'
import { BiArrowFromLeft, BiStar } from 'react-icons/bi'
import { CiLocationOn } from 'react-icons/ci'

function Home({product}) {
    const { grid, main, imgStyle, firstH1, border, menu,black,green,scroll } = homeStyle

    const data = product.map((pro)=> <div className={border} key={pro.id}>
    <img className={imgStyle} src={pro.img} alt={pro.id} />
    <div>
        <span style={{ fontSize: '20px', fontWeight: 'bold' }}>{pro.Name}</span>
        <div>
            <div className='flex items-center justify-between w-[75%]'>
                <span style={{fontSize: '20px', fontWeight: 'bold' }} className={pro.status?green:black}> {pro.status?'• Available':"• Unavailable"}</span>
                <span style={{ color: '#f3e13de3' }} className='flex items-center justify-center'>  <BiStar />{pro.rating}</span>
            </div>
            <div className='flex items-center justify-between w-[75%]'>
                <span className='flex items-center justify-center'><BsClock />{pro.time} min</span>
                <span className='flex items-center justify-center'>  <CiLocationOn />{pro.location}km</span>
            </div>
        </div>
    </div>
</div>)
    const instock = product.filter(pro=>pro.status === true)
    const available = instock.map(pro=><div className={border}>
        <img className={imgStyle} src={pro.img} alt="" />
        <div>
            <span style={{ fontSize: '20px', fontWeight: 'bold' }}>{pro.Name}</span>
            <div>
            <div className='flex items-center justify-between w-[75%]'>
                <span style={{fontSize: '20px', fontWeight: 'bold' }} className={pro.status?green:black}> {pro.status?'• Available':"• Unavailable"}</span>
                <span style={{ color: '#f3e13de3' }} className='flex items-center justify-center'>  <BiStar />{pro.rating}</span>
            </div>
            <div className='flex item-center justify-between w-[75%]'>
                <span className='flex items-center justify-center'><BsClock />{pro.time} min</span>
                <span className='flex items-center justify-center'>  <CiLocationOn />{pro.location}km</span>
            </div>
        </div>
        </div>
    </div>)
    return (
        <div className={scroll}>

        <main className='grid grid-cols-1 place-items-end'>
            <div>
                <div className='flex items-center center content-between ' style={{ width: '95%' }}>
                    <h1 className={`${firstH1} flex items-center justify-between w-full`}>Gas stations near you</h1> <span style={{ fontSize: '20px' }}><span className='flex items-center text-blue-700' style={{ textDecoration: 'none', fontFamily: 'serif' }}>Discover <BiArrowFromLeft className='ml-3' /></span></span>
                </div>
                <div className='grid lg:grid-cols-3 items-center justify-items-center gap-3 mb-[3rem]' >
                    {data}
                </div>
            </div>
            <div>
                <div className='lg:flex items-center center content-between sm:hidden '>
                    <h1 className={firstH1}>Available gas Stations</h1>
                </div>
                    <div className={menu}>
                        <span>All</span>
                        <span>Petro</span>
                        <span>Disel</span>
                        <span>Cooking gas</span>
                        <span>Kerosene</span>
                    </div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 xxl:grid-cols-2 items-center justify-center gap-3 mb-[3rem]'>
                    {available}
                </div>
            </div>
        </main>
        </div>
    )
}

export default Home
