import React from 'react';
import styled from 'styled-components';

const Sdiv = styled.div `
    font-family: 'Press Start 2P', cursive;
    font-size: 87px;
    line-height: 81px;
    margin: 0.275em 0.5em;
    color: white;
`
const Bgcolor = styled.div `
    background-color: #0C557F;
    background-size: cover;
    height:100vh;
    width:100vw;
`

const Styimg = styled.img `
    margin: 2em 1em;
`
const Shiba = styled.img`
    height:63vh;
    width:63vw;
`

export class Landing extends React.Component {
    render() {
        return (
            <Bgcolor>
              
              <Styimg src='/Images/kmutt.png' width='64.53px' height='74.69px' /> 
              <Styimg src='/Images/sit.png' width='162px' height='53px' />
                    <Styimg src='/Images/alchemist.png' width='52px' height='61px' />
                    

                    <Sdiv>"HELLO SHIBA"</Sdiv>
                    
                    <Shiba src='/Images/Shibadraf21.png' />
                    
            </Bgcolor>
        )
    }
}
export default Landing;

