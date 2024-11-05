
import React from 'react'
import Banner from '../components/Banner'
import Feedback from '../components/Feedback'
import PromotionBanner from '../components/PromotionBanner'
import CollectionSection from '../components/Collection.component';
import NewsletterBox from '../components/NewsLetterBox'


const Home = () => {
  return (
    <div>
      <Banner />
      <PromotionBanner/>
      <CollectionSection />
      <Feedback />
      <NewsletterBox/>
    </div>
  )
}

export default Home;
