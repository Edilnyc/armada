import React from 'react'
import './Home.css'
import Banner from '../../components/Banner/Banner'

import Sectionservice from '../../components/Sectionservice/Sectionservice'
import Sectionjob from '../../components/Sectionjob/Sectionjob'
import Sectionprice from '../../components/Sectionprice/Sectionprice'
import Sectionclients from '../../components/Sectionclients/Sectionclients'
import Sectioncommands from '../../components/Sectioncommands/Sectioncommands'
import Sectionrequest from '../../components/Sectionrequest/Sectionrequest'
export default function Home() {
  return (
    <div>
      
      <Banner/>
      <Sectionservice/>
      <Sectionjob/>
      <Sectionprice/>
      <Sectionclients/>
      <Sectioncommands/>
      <Sectionrequest/>
      
    </div>
  )
}
