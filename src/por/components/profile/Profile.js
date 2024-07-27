import React from 'react'
import profile from './profile.module.css'
import cj from '../../imgs/cj.jpg'
import { BsBell } from 'react-icons/bs'

import { FaRegCircleDot } from 'react-icons/fa6'
function Profile() {
  return (
    <div className='flex items-center justify-between '>
      <div style={{marginRight:'25px'}} className={profile.bell}>
        <FaRegCircleDot fontSize='10px' className={profile.dot}/>
        <BsBell fontSize='1.5rem' className={profile.mainBell}/>
      </div>
      <div className={profile.imgContainer}>
        <img src={cj} className={profile.cj} alt="" />
        <div>
          <h3 className={profile.nam}>Chijioke Igwe</h3>
          <span className={profile.gmail}>chijiokerichard61@gmail.com</span>
        </div>
      </div>
    </div>
  )
}

export default Profile
