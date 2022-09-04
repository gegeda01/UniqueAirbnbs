import React from 'react'
import InfoSection from '../components/InfoSection';
import InfoSection2 from '../components/InfoSection2';
import { InfoData,InfoDataTwo,InfoDataThree,InfoDataFour } from '../data/InfoData';
const Info = () => {
  return (
    <>
    <InfoSection {...InfoData} />
    <InfoSection2 {...InfoDataTwo} />
    <InfoSection {...InfoDataThree}/>
    <InfoSection2 {...InfoDataFour}/>
    </>
  )
}

export default Info