import React from 'react'
import Favourite from '../favorite/Favourite'
import RecentView from '../recent_view/RecentView'
import viewsStlye from './view.module.css'


function Views() {
  return (
    <div className={viewsStlye.view}>
        <RecentView/>
      <Favourite/>
    </div>
  )
}

export default Views

