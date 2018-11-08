import React from 'react'
import styled from 'styled-components'

const Box = styled.span`
background-color: #ffffff;
display : inline-block;
text-align: center;
width: 100%;
box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`
const BoxA = styled.span`
display : inline-block;
text-align: center;
width: 90%;

`
const BoxB = styled.a`
text-align: center;
display : inline-block;
padding : 12px;
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
font-weight: bold;
text-align: center;
font-size: 24px;
display : inline-block;
padding : 30px;
`
const Navbar =(props) => (
<Box class='navbar navbar-expand'>
<BoxA class="topnavbar">
        <BoxB>Logo.png</BoxB>
        <BoxTeam></BoxTeam>
        <BoxTeam>Home</BoxTeam>
        <BoxTeam>What</BoxTeam>
        <BoxTeam>Who</BoxTeam>
        <BoxTeam>Where</BoxTeam>
        <BoxTeam>When</BoxTeam>
        <BoxTeam>FAQs</BoxTeam>
        <BoxTeam>Contract</BoxTeam>
        <BoxC>ประกาศผล</BoxC>
        </BoxA>
</Box>
)

export default Navbar