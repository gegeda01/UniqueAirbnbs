import React from 'react'
import styled from 'styled-components'
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import {Link} from 'react-router-dom';
import {FaTimes} from 'react-icons/fa'
const DropDownContainer = styled.div`
    position:fixed;
    z-index:999;
    width:100%;
    height:100%;
    background:#00cc00;
    display:grid;
    align-items:center;
    top:0;
    left:0;
    transition: 0.3s ease-in-out;
    opacity:${({isOpen})=>(isOpen ? '1' : '0')};
    top:${({isOpen})=>(isOpen ? '0' : '-100%')};
`;

const Icon=styled.div`
    position:absolute;
    top:1.2rem;
    right:1.5rem;
    background: transparent;
    font-size:2rem;
    cursor:pointer;
    outline:none;
`;

const ClosedIcon=styled(FaTimes)`
    color:#000d1a;
`;

const DropDownWrapper=styled.div`

`;

const DropDownMenu=styled.div`
    display:grid;
    grid-template-columns:1fr;
    grid-template-rows:repeat(4,60px);
    text-align:center;
    margin-bottom:4rem;

    @media screen and (max-width:480px){
        grid-template-row: repeat(4,40px);
    }

`;

const DropDownLink=styled(Link)`
    display:flex;
    align-items:center;
    justify-content:center;
    color:#fff;
    font-size:1.5rem;
    text-decoration:none;
    list-style:none;
    cursor:pointer;
    transition:0.2s ease-in-out;

    &:hover{
        color:#000d1a;
    }
`;
const BtnWrap=styled.div`
    display:flex;
    justify-content:center;
`;

const DropDown = ({isOpen,toggle}) => {
  return (
    <DropDownContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <ClosedIcon />
        </Icon>
        <DropDownWrapper>
            <DropDownMenu>
             {menuData.map((item,index) => (
                <DropDownLink to={item.link} key={index}>
                    {item.title}
                </DropDownLink>
            ))}
            </DropDownMenu>
            <BtnWrap>
                <Button round='true' big='true' primarycolor="true"><a
              href='//www.boredpanda.com/coolest-unique-best-rent-houses-airbnb/?utm_source=google&utm_medium=organic&utm_campaign=organic.com'
              rel='noopener noreferrer'
              target='_blank'
            >More</a>
                </Button>
            </BtnWrap>
        </DropDownWrapper>
    </DropDownContainer>

  )
}

export default DropDown