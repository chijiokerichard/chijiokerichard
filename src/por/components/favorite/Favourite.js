import React from 'react'
import favoriteStyle from './favourite.module.css'
import re1 from '../../user_1/Banana-Bread-IMAGE-IMAGE-22.jpg'
import { BiDotsHorizontalRounded } from 'react-icons/bi'

function RecentView() {
  const { main, containers, img, rH4, rP, dot,line } = favoriteStyle
  return (
    <section className={main}>
      <h1>Favourites</h1>
      <div className={containers}>
        <img className={img} src={re1} alt="" />
        <div className={line}>
          <div>
            <span className={rH4}>ISO Gas stations</span>
            <br />
            <span className={rP}>Available 2Km</span>
          </div>
          <span><BiDotsHorizontalRounded className={dot} /></span>
        </div>
      </div>
      <div className={containers}>
        <img className={img} src={re1} alt="" />
        <div className={line}>
          <div>
            <span className={rH4}>ISO Gas stations</span>
            <br />
            <span className={rP}>Available 2Km</span>
          </div>
          <span><BiDotsHorizontalRounded className={dot} /></span>
        </div>
      </div>
      <div className={containers}>
        <img className={img} src={re1} alt="" />
        <div className={line}>
          <div>
            <span className={rH4}>ISO Gas stations</span>
            <br />
            <span className={rP}>Available 2Km</span>
          </div>
          <span><BiDotsHorizontalRounded className={dot} /></span>
        </div>
      </div>
      <div className={containers}>
        <img className={img} src={re1} alt="" />
        <div className={line}>
          <div>
            <span className={rH4}>ISO Gas stations</span>
            <br />
            <span className={rP}>Available 2Km</span>
          </div>
          <span><BiDotsHorizontalRounded className={dot} /></span>
        </div>
      </div>
      
    </section>
  )
}

export default RecentView
