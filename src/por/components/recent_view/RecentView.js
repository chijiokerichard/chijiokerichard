import React from 'react'
import recentViewStyle from './recent_view.module.css'
import re1 from '../../user_1/Egg-fried-rice-2.jpg'
import { BiDotsHorizontalRounded} from 'react-icons/bi'

function RecentView() {
  const { main, containers, img,rH4,rP,dot,line } = recentViewStyle
  return (
    <section className={main}>
      <h1>Rcently Viewed</h1>
      <div className={containers}>
        <img className={img} src={re1} alt="" />
        <div className={line}>
          <div>
          <span className={rH4}>ISO Gas stations</span>
          <br/>
          <span className={rP}>Available 2Km</span>
          </div>
        <span><BiDotsHorizontalRounded className={dot}/></span>
        </div>
      </div>
      <div className={containers}>
        <img className={img} src={re1} alt="" />
        <div className={line}>
          <div>
          <span className={rH4}>ISO Gas stations</span>
          <br/>
          <span className={rP}>Available 2Km</span>
          </div>
        <span><BiDotsHorizontalRounded className={dot}/></span>
        </div>
      </div>
      <div className={containers}>
        <img className={img} src={re1} alt="" />
        <div className={line}>
          <div>
          <span className={rH4}>ISO Gas stations</span>
          <br/>
          <span className={rP}>Available 2Km</span>
          </div>
        <span><BiDotsHorizontalRounded className={dot}/></span>
        </div>
      </div>
      <div className={containers}>
        <img className={img} src={re1} alt="" />
        <div className={line}>
          <div>
          <span className={rH4}>ISO Gas stations</span>
          <br/>
          <span className={rP}>Available 2Km</span>
          </div>
        <span><BiDotsHorizontalRounded className={dot}/></span>
        </div>
      </div>
      
    </section>
  )
}

export default RecentView
