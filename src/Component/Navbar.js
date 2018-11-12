// import React from 'react'
// import styled from 'styled-components'

// const Box = styled.div`
// background-color: #ffffff;
// display : inline-block;
// text-align: center;
// height : 80px;
// width: 100vw;
// box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
// position: sticky;
// top: 0;
// z-index: 10;
// float: center;

// `
// const BoxA = styled.span`
// display : inline-block;
// text-align: center;
// padding : 3px
// width: 100%;
// margin: 0.5em;

// `
// const BoxB = styled.img`
// text-align: center;
// display : inline-block;
// float : left;
// z-index:11;

// `

// const BoxC = styled.button`
// font-weight: bold;
// font-family: 'Mali', cursive;
// background-color: #ffcd3c;
// font-size: 15px;
// width: 100px;
// border-radius : 3px;
// color: #603700;
// border : 2px solid #5c3c10;
// padding : 0.25em 0.25em;
// box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
// margin: 0.5em

// &:hover {
//         background: #0C557F;
// }
// `;
// const BoxTeam = styled.a`
// font-family: 'Press Start 2P', cursive;
// text-align: center;
// font-size: 10px;
// display : inline-block;
// padding : 1em 0.5em;
// `
// const Navbar =(props) => (
// <Box class='navbar navbar-expand'>
// <BoxA class="topnavbar">
//         <BoxB scr = '/Images/pawprints.png ' />
//         <BoxC><BoxTeam>Home</BoxTeam></BoxC>
//         <BoxC><BoxTeam>What</BoxTeam></BoxC>
//         <BoxC><BoxTeam>Where</BoxTeam></BoxC>
//         <BoxC><BoxTeam>Who</BoxTeam></BoxC>
//         <BoxC><BoxTeam>When</BoxTeam></BoxC>
//         <BoxC><BoxTeam>FAQs</BoxTeam></BoxC>
//         <BoxC><BoxTeam>Contact</BoxTeam></BoxC>
//         </BoxA>
// </Box>
// )

// export default Navbar

import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
  background-color: #073C5C ;
  height : 90px ;
  width : 100% ;
  position : fixed;
  z-index: 99 ;
  
`

const A = styled.a`
        position: sticky;
  color: #FFFFFF;
  font-size : 16px;
  font-family: 'Press Start 2P', cursive;
  &:hover {
    color: #0C557F ;
    text-decoration: none ;

}
   
`

const Img = styled.img `
width : 100px ;
padding-bottom : 9px ;
margin : 0.5em 0.5em;
` 


 
const Navbar = () => (
  <Nav>
    <nav class="navbar navbar-expand-lg navbar-light ">
    

    <div>
        <Img src = "/Images/pawprints.png" />
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item pr-1">
            <A class="nav-link " href="#home">Home</A>
          </li>
          <li class="nav-item pl-5 ">
            <A class="nav-link" href="#what">What</A>
          </li>
          <li class="nav-item pl-5 ">
            <A class="nav-link" href="#where">Where</A>
          </li>
          <li class="nav-item pl-5 ">
            <A class="nav-link" href="#who">who</A>
          </li>
          <li class="nav-item pl-5 ">
            <A class="nav-link" href="#when">When</A>
          </li>
          <li class="nav-item pl-5 ">
            <A class="nav-link" href="#faqs">FAQs</A>
          </li>
          <li class="nav-item pl-5 ">
            <A class="nav-link" href="#contact">Contact</A>
          </li>
        </ul>
      </div>



    </nav>
    
   
  
  </Nav>
)

export default Navbar