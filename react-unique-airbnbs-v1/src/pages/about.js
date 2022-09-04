import React from 'react'
import AboutSection from '../components/AboutSection';
import { InfoDataFive } from '../data/InfoData';

const About = () => {
  return (
    <><AboutSection {...InfoDataFive} /></>
  )
}

export default About