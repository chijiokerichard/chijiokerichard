import React from 'react'
import availableStyle from './available.module.css'
import img from '../../user_1/2-ingredient-chocolate-bread-6a.jpg'
import img1 from '../../user_1/5b9c4bde1f00002d00212a17.jpg'
import img2 from '../../user_1/SFS_ultimate_chocolate_milkshake_046_ckxyhg.jpg'
import { BsClock } from 'react-icons/bs'
import { CiLocationOn } from 'react-icons/ci'
import { BiStar } from 'react-icons/bi'


function Available() {
    const {grid, imgStyle,secondH1, border } = availableStyle
    return (
        <main>
            <h1 className={secondH1}>Available Gas stations</h1>
            <section className={grid}>
                <div className={border}>
                    <img className={imgStyle} src={img} alt="" />
                    <div>
                        <span style={{ fontSize: '20px', fontWeight: 'bold' }}>Ra. p station</span>
                        <div>
                        <div className='d-flex align-items-center justify-content-between w-75'>
                    <span style={{color:'greenyellow', fontSize:'20px', fontWeight:'bold'}}>• Available</span>
                    <span style={{color:'yellow'}} className='d-flex align-items-center justify-content-center'>  <BiStar/>4.1</span>
                    </div>
                            <div className='d-flex align-items-center justify-content-between w-75'>
                        <span className='d-flex align-items-center justify-content-center'><BsClock/>5 min</span>
                        <span className='d-flex align-items-center justify-content-center'>  <CiLocationOn/>1km</span>
                    </div>
                        </div>
                    </div>
                </div>
                <div className={border}>
                    <img className={imgStyle} src={img1} alt="" />
                    <div>
                        <span style={{ fontSize: '20px', fontWeight: 'bold' }}>Ra. p station</span>
                        <div>
                        <div className='d-flex align-items-center justify-content-between w-75'>
                    <span style={{color:'greenyellow', fontSize:'20px', fontWeight:'bold'}}>• Available</span>
                    <span style={{color:'yellow'}} className='d-flex align-items-center justify-content-center'>  <BiStar/>4.1</span>
                    </div>
                            <div className='d-flex align-items-center justify-content-between w-75'>
                        <span className='d-flex align-items-center justify-content-center'><BsClock/>5 min</span>
                        <span className='d-flex align-items-center justify-content-center'>  <CiLocationOn/>1km</span>
                    </div>
                        </div>
                    </div>
                </div>
                <div className={border}>
                    <img className={imgStyle} src={img2} alt="" />
                    <div>
                        <span style={{ fontSize: '20px', fontWeight: 'bold' }}>Ra. p station</span>
                        <div>
                        <div className='d-flex align-items-center justify-content-between w-75'>
                    <span style={{color:'greenyellow', fontSize:'20px', fontWeight:'bold'}}>• Available</span>
                    <span style={{color:'yellow'}} className='d-flex align-items-center justify-content-center'>  <BiStar/>4.1</span>
                    </div>
                            <div className='d-flex align-items-center justify-content-between w-75'>
                        <span className='d-flex align-items-center justify-content-center'><BsClock/>5 min</span>
                        <span className='d-flex align-items-center justify-content-center'>  <CiLocationOn/>1km</span>
                    </div>
                        </div>
                    </div>
                </div>

            </section>
        </main>
    )
}

export default Available
