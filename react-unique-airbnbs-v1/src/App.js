import React,{useState} from 'react';
import Navbar from './components/navbar';
import './App.css';
import GlobalStyle from './globalStyles';
import DropDown from './components/DropDown';
import {Routes,Route} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Info from './pages/Info';

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
    <Routes>
      <Route  path='/' element={<Home/>} ></Route>
      <Route  path='/about' element={<About/>} ></Route>
      <Route  path='/homes' element={<Info/>} ></Route>
    </Routes>
    
    </>
  );
}

export default App;
