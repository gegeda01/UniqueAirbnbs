import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Button = styled.div`
    background: ${({ primarycolor }) => (primarycolor ? '#b3ffb3' : '#CD853F')};
    white-space:nowrap;
    outline:none;
    border:none;
    min-width:100px;
    max-width:200px;
    cursor:pointer;
    text-decoration:none;
    transition:0,3s;
    display:flex;
    justify-content:center;
    align-items:center;
    padding: ${({big})=> (big ? '16px 40px' :'14px 24px')};
    color:#fff;
    font-size:${({big})=> (big ? '20px' :'14px')};
    border-radius: ${({ round }) => (round ? '50px' : '0px')};

    &:hover{
        transform:translateY(+2px);
    }
`

function Btn({big,round,label,primarycolor,onClick}){
    return (<Button big={big} round={round} primarycolor={primarycolor} onClick={onClick} data-testid="button">{label}</Button>)
}
Btn.propTypes ={
    big:PropTypes.bool,
    round:PropTypes.bool,
    label:PropTypes.string,
    primarycolor:PropTypes.bool,
    onClick:PropTypes.func,
}

export default Btn

