import React from 'react'
import styled from 'styled-components'

const Box = styled.div`
background-color: #ffffff;
display : inline-block;
text-align: center;
height :80px
width: 100%;
box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
position: sticky;
top: 0;
z-index: 1071;
`
const BoxA = styled.span`
display : inline-block;
text-align: center;
padiing : 10px
width: 85%;

`
const BoxB = styled.img`
text-align: center;
display : inline-block;
float : left;
`

const BoxC = styled.button`
font-weight: bold;
font-family: 'Mali', cursive;
background-color: #ffcd3c;
font-size: 15px;
width: 100px;
border-radius : 4px;
color: #603700;
border : 3px solid #5c3c10;
padding : 8px;
box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`
const BoxTeam = styled.a`
font-family: 'Press Start 2P', cursive;
font-weight: bold;
text-align: center;
font-size: 18px;
display : inline-block;
padding : 20px;
`
const Navbar =(props) => (
<Box class='navbar navbar-expand'>
<BoxA class="topnavbar">
        <BoxB scr ="./images/pawprints.png "/>
        <BoxTeam>Home</BoxTeam>
        <BoxTeam>What</BoxTeam>
        <BoxTeam>Where</BoxTeam>
        <BoxTeam>Who</BoxTeam>
        <BoxTeam>When</BoxTeam>
        <BoxTeam>FAQs</BoxTeam>
        <BoxTeam>Contract</BoxTeam>
        </BoxA>
</Box>
)

export default Navbar