import React from 'react'
import Banner from '../components/Banner'
import Feedback from '../components/Feedback'
import PromotionBanner from '../components/PromotionBanner'

const home = () => {
  return (
    <div>
      <Banner />
      <PromotionBanner/>
      <Feedback />
    </div>
  )
}

export default home