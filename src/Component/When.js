import React, { Component } from 'react'
import styled from 'styled-components'

const Body = styled.div`
background: url('Images/when/PixelArt1.png') #df6d6a;
position: center;
height:100vh;
width:100vw;
background-size: cover;
`
const Head = styled.h1`
padding : 12px
color : white;
text-align : center
font-weight: bold
font-family: 'Press Start 2P', cursive;
`
const Images = styled.img`
height: 550px;

`
const Box = styled.div`
`
const M = styled.img`
height: 130px;
width: 130px;
float: left;
`
const M2 = styled.img`
height: 150px;
width: 150px;
float: right;
`

const Head2 = styled.div`
color : white;
padding : 10px
font-size : 20px
text-align : center
font-weight: bold
font-family: 'Press Start 2P', cursive;
`

const When =(props) => (
  <Body>
      <br></br>
      <br></br>
      <Box className="container">
          <div className="row">
              <div class="col-lg-5">
              <M2 src="/Images/when/sun.png"/>
                  <Head>
                      <br></br>
                      WHEN
                  </Head>
              </div>
              <div class="col-lg-7">
              </div>
          <div className="row">
              <Box class="col-lg-5">
                  <Images src="/Images/where/Shibadrafwhere.png"/>
              </Box>
              <Box class="col-md-2">
             <div className="rowpic">
             <M src="/Images/download6.png"/>
             </div>
             <div className="rowpic">
                <M src="/Images/download6.png"/>
             </div>
               <div className="rowpic">
               <M src="/Images/download6.png"/>
             </div>
             <div className="rowpic">
               <M src="/Images/download6.png"/>
             </div>
            </Box>
            <Box class="col-md-5">
            <br></br>
                <Head2> เปิดรับสมัคร<br></br>10 ต.ค. 61 </Head2>
            <br></br>
            <br></br>
                <Head2> ปิดรับสมัคร<br></br>11 ต.ค. 61 </Head2>
                <br></br>
            <br></br>
                <Head2> เปิดกิจกรรม<br></br>12 ต.ค. 61 </Head2>
                <br></br>
                <br></br>
                <Head2> ปิดกิจกรรม<br></br>13 ต.ค. 61 </Head2>           
            </Box>
              
              </div>    
          </div>
      </Box>
      <br></br>
      </Body>    
    
      )
      
export default When;