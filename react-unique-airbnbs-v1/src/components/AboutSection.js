import React from 'react'
import styled from 'styled-components/'

const Section=styled.section`
    width:100%;
    height:100%;
    padding:4rem 0rem;
    background:#f2f2f2;
`;
const Container = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    line-height:1.4;
    padding:1rem 2rem;

    h1{
        margin-bottom:2rem;
        font-size:clamp(1.5rem,6vw,2rem);
    }
    p{
        margin-bottom:2rem;
        justify-content:flex-start;
    }

    img{
        margin-top:2rem;
        width:50%;
        height:20%;
    }
    
    
`;

const AboutSection = ({heading,paragraphOne,paragraphTwo,image}) => {
  return (
    <Section>
        <Container>
            <h1>{heading}</h1>
            <p>{paragraphOne}</p>
            <p>{paragraphTwo}</p>
            <img src={image} alt="about"/>
        </Container>
    </Section>
  )
}

export default AboutSection