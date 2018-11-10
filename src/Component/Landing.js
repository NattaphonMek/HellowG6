import React from 'react';
import styled from 'styled-components';

const Sdiv = styled.div `
    font-family: 'Press Start 2P', cursive;
    font-size: 87px;
    line-height: 81px;
    margin: 1em 1em;
`
const Bgcolor = styled.div `
    background-color: #0C557F;
`

const Styimg = styled.img `
    margin: 1em 1em;
`

export class Landing extends React.Component {
    render() {
        return (
            <Bgcolor>
              
              <Styimg src='/images/kmutt.png' width='64.53px' height='74.69px' /> 
              <Styimg src='/images/sit.png' width='162px' height='53px' />
                    <Styimg src='/images/alchemist.png' width='52px' height='61px' />
                    

                    <Sdiv>"HELLO SHIBA"</Sdiv>
                    
                    <img src='/images/Shibadraf21.png' />
              
            </Bgcolor>
        )
    }
}
export default Landing;

