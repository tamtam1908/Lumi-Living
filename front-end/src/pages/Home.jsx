import React from 'react'
import Banner from '../components/Banner'
import Feedback from '../components/Feedback'
import PromotionBanner from '../components/PromotionBanner'
import NewsletterBox from '../components/NewsLetterBox'

const home = () => {
  return (
    <div>
      <Banner />
      <PromotionBanner/>
      <Feedback />
      <NewsletterBox/>
    </div>
  )
}

export default home