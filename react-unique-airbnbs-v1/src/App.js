import React,{useState} from 'react';
import Navbar from './components/navbar';
import './App.css';
import GlobalStyle from './globalStyles';
import Hero from './components/Hero';
import { SliderData } from './data/SliderData';
import DropDown from './components/DropDown';
import InfoSection from './components/InfoSection';
import InfoSection2 from './components/InfoSection2'
import { InfoData } from './data/InfoData';
import {InfoDataTwo} from './data/InfoData2'

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
    <InfoSection {...InfoData}/>
    <InfoSection2 {...InfoDataTwo}/>
    </>
  );
}

export default App;
