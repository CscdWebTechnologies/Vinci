import React from 'react'
import '../assets/styles/banner.css'

const Banner = () => {
  return (
    <div className='banner__main'>
      <div className='banner__wrapper'>
        <div className='banner__texts'>
          <h2 className='banner__texts_title'>$335B</h2>
          <p className='banner__texts_para'>Quarterly volume traded</p>
        </div>
        <div className='banner __texts'>
          <h2 className='banner__texts_title'>100+</h2>
          <p className='banner__texts_para'>Countries supported</p>
        </div>
        <div className='banner __texts'>
          <h2 className='banner__texts_title'>56+M</h2>
          <p className='banner__texts_para'>Verified users</p>
        </div>
      </div>
    </div>
  )
}

export default Banner
