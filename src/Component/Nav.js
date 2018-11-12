import React from 'react'
import styled from 'styled-components'

const Box = styled.div`
background-color: #ffffff;
display : inline-block;
text-align: center;
height : 80px;
width: 100vw;
box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
position: sticky;
top: 0;
z-index: 10;
float: center;
`
const BoxA = styled.div`
display : inline-block;
text-align: center;
padding : 3px;
width: 100%;
margin: 0.5em;
`
const BoxB = styled.img`
text-align: center;
display : inline-block;
float : left;
z-index:11;

`

const BoxC = styled.button`
font-weight: bold;
font-family: 'Mali', cursive;
background-color: #ffcd3c;
font-size: 15px;
width: 100px;
border-radius : 3px;
color: #603700;
border : 2px solid #5c3c10;
padding : 0.25em 0.25em;
box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
margin: 0.5em;

&:hover {
        background: #0C557F;
}
`
const BoxTeam = styled.a`
font-family: 'Press Start 2P', cursive;
text-align: center;
font-size: 10px;
display : inline-block;
padding : 1em 0.5em;
`
const Navbar =(props) => (
<Box class='navbar navbar-expand'>
<BoxA class="topnavbar">
<a href='#Who' className="Who col-3 nav-link">
Who
</a>
        </BoxA>
</Box>
)

export default Navbar