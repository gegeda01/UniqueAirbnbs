import React,{useEffect,useState} from 'react';
import styled,{css} from 'styled-components/macro';
import {Link, useLocation} from 'react-router-dom';
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import {FaBars} from 'react-icons/fa';
const Nav = styled.nav`
    height: 40px;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
    position: fixed;
    width: 100%;
    
`;


const NavLink = css`
    color:#fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
    
    &:hover{
        color:#000d1a;
    }
`;
const Logo = styled(Link)`
    font-style: italic;
    ${NavLink}
`; 

const Menubar = styled(FaBars)`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        height:40px;
        width:40px;
        cursor:pointer;
        position:absolute;
        top:15px;
        right:70px;
        transform:translate(-50%,25%);
    }
`;

const NavMenu = styled.div`
    display:flex;
    align-items:center;
    margin-right:-48px;

    @media screen and (max-width: 768px){
        display:none;
        
    }
   
`;

const NavMenuLinks = styled(Link)`
    ${NavLink}
`;

const NavBtn = styled.div`
    display:flex;
    align-items:center;
    margin-right:60px;
    @media screen and (max-width: 768px){
        display:none;
        
    }
`
const Navbar = ({toggle}) => {
 const [navbar, setNavbar] = useState(false);
  const location = useLocation();

  const changeBackground = () => {
    if (window.pageYOffset >= 60) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    const watchScroll = () => {
      window.addEventListener('scroll', changeBackground);
    };

    watchScroll();

    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  let style = {
    backgroundColor:
      navbar || location.pathname !== '/' ? '#CD853F' : 'transparent',
    transition: '0.4s'
  };
  return (
    <Nav style={style}>
        <Logo to="/">Unique Airbnbs</Logo>
        <Menubar onClick={toggle}/>
        <NavMenu>
            {menuData.map((item,index) => (
                <NavMenuLinks to={item.link} key={index}>
                    {item.title}
                </NavMenuLinks>
            ))}
        </NavMenu>
        <NavBtn>
            <Button ><a
              href='//www.boredpanda.com/coolest-unique-best-rent-houses-airbnb/?utm_source=google&utm_medium=organic&utm_campaign=organic.com'
              rel='noopener noreferrer'
              target='_blank'
            >More</a></Button>
        </NavBtn>
    </Nav>
  )
}

export default Navbar