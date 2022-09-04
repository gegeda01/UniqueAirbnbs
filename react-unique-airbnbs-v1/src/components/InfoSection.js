import React from 'react'
import styled from 'styled-components'
import { Button } from './Button';

const Section=styled.section`
    width:100%;
    height:100%;
    padding:4rem 0rem;
`;
const Container = styled.div`
    padding: 3rem calc(100vw-1300px)/2;
    display:grid;
    grid-template-columns:1fr 1fr;
    grid-template-rows:800px;

    @media screen and (max-width: 768px){
        grid-template-columns:1fr;
    }
`;

const Left=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;
    line-height:1.4;
    padding:1rem 2rem;
    order: ${({reverse})=>(reverse ? '2' : '1')};

    h1{
        margin-bottom:1rem;
        font-size:clamp(1.5rem,6vw,2rem);
    }
    p{
        margin-bottom:2rem;
    }
`;

const Right=styled.div`
    padding:1rem 2rem;
    order: ${({reverse})=>(reverse ? '1' : '2')};
    display:flex;
    justify-content:center;
    align-itmes:center;

    @media screen and (max-width:768px){
        order: ${({reverse})=>(reverse ? '2' : '1')};
    }

    img{
        width:100%;
        height:100%;
        object-fit:cover;

        @media screen and (max-width:768px){
            width:90%;
            height:90%;
        }
    }
`;
const InfoSection = ({heading,paragraphOne,paragraphTwo,buttomLabel,reverse,image,delay,redirect}) => {
  return (
    <Section>
        <Container>
            <Left>
            <h1>{heading}</h1>
            <p>{paragraphOne}</p>
            <p>{paragraphTwo}</p>
            <Button ><a href= {redirect} rel='noopener noreferrer'
              target='_blank'>{buttomLabel}</a></Button>
            </Left>
            <Right reverse={reverse}>
                <img src={image} alt="homes" data-aos='zoom-out'
            data-aos-duration='1000'
            data-aos-once='true'
            data-aos-delay={delay}
            data-aos-anchor-placement='center bottom'/>
            </Right>
         </Container>
    </Section>
   
  )
}

export default InfoSection