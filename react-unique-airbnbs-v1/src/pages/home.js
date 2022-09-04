import React from 'react'
import Hero from '../components/Hero';
import { SliderData } from '../data/SliderData';
import InfoSection from '../components/InfoSection';
import InfoSection2 from '../components/InfoSection2';
import { InfoData,InfoDataTwo,InfoDataThree,InfoDataFour,InfoDataFive } from '../data/InfoData';
import AboutSection from '../components/AboutSection';

const Home = () => {
  return (
    <><Hero slides={SliderData} />
    <AboutSection {...InfoDataFive} />
    <InfoSection {...InfoData} />
    <InfoSection2 {...InfoDataTwo} />
    <InfoSection {...InfoDataThree}/>
    <InfoSection2 {...InfoDataFour}/></>
    
  )
}

export default Home