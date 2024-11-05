
import React from 'react'
import Banner from '../components/Banner'
import Feedback from '../components/Feedback'
import PromotionBanner from '../components/PromotionBanner'
import CollectionSection from '../components/Collection.component';



const Home = () => {
  return (
    <div>
      <Banner />
      <PromotionBanner/>
      <CollectionSection />
      <Feedback />
    </div>
  )
}

export default Home;
