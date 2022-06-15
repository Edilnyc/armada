import React from 'react'

import Sectionbenefits from '../../components/Sectionbenefits/Sectionbenefits'
import Sectionrequest from '../../components/Sectionrequest/Sectionrequest'

import './About.css'
import AboutCom from './../../components/AboutCom/AboutCom';
import AboutDo from '../../components/AboutDo/AboutDo'


export default function About() {
  return (
    <div>
     
      <AboutCom/>
      <AboutDo/>
      <Sectionbenefits/>
      <Sectionrequest/>
      
    </div>
  )
}
