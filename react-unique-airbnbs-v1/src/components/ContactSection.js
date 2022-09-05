import React from 'react'
import styled from 'styled-components'
import Btn from '../components/Button'
import PropTypes from 'prop-types';

const Container = styled.div`
    width:100%;
    height:100%;
    padding:7rem 0rem;
    background: ${({ primarycolor }) => (primarycolor ? '#CD853F' : '#f2f2f2')};
`

const Form=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    line-height:1.4;
    padding:1rem 2rem;

    h1{
        margin-bottom:4rem;
        font-size:clamp(1.5rem,6vw,2rem);
    }

    input{
        width:60%;
        height:40px;
        margin-bottom:4rem;
        border-radius: ${({ round }) => (round ? '50px' : '0px')};
        
    }
    
    textarea{
        width:60%;
        height:80px;
        margin-bottom:4rem;
        border-radius: ${({ round }) => (round ? '50px' : '0px')};
    }

    
    `
function ContactSection({round,primarycolor,onClick}){
    return(<Container primarycolor={primarycolor}>
        <Form>
        <h1>Contact Us</h1>
          <input type="text" name="Name" placeholder="Name" round={round} data-testid="name"required />
          <input type="email" name="Email" placeholder="Email"  round={round} data-testid="email" required/>
          <textarea name="Message" placeholder="Please type your message here" required round={round}></textarea>
          <Btn primarycolor='false' round='true' label="Submit" onClick={onClick}></Btn>
        </Form>
        </Container>)
    
}

ContactSection.prototype = {
    round:PropTypes.bool,
    primarycolor:PropTypes.bool,
    onClick:PropTypes.func,

}
export default ContactSection