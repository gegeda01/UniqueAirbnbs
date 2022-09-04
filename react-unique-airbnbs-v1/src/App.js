import React,{useState} from 'react';
import Navbar from './components/navbar';
import './App.css';
import GlobalStyle from './globalStyles';
import Hero from './components/Hero';
import { SliderData } from './data/SliderData';
import DropDown from './components/DropDown';
import InfoSection from './components/InfoSection';
import InfoSection2 from './components/InfoSection2';
import { InfoData,InfoDataTwo,InfoDataThree,InfoDataFour,InfoDataFive } from './data/InfoData';
import AboutSection from './components/AboutSection';


function App() {
  const [isOpen,setIsOpen] = useState(false)

  const toggle= () =>{
    setIsOpen(!isOpen);
  };
  return (
    <>
    <GlobalStyle/>
    <Navbar toggle={toggle} />
    <DropDown isOpen={isOpen} toggle={toggle}/>
    <Hero slides={SliderData} />
    <AboutSection {...InfoDataFive} />
    <InfoSection {...InfoData} />
    <InfoSection2 {...InfoDataTwo} />
    <InfoSection {...InfoDataThree}/>
    <InfoSection2 {...InfoDataFour}/>
    </>
  );
}

export default App;
