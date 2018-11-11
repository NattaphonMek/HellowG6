import React from 'react'
import styled from 'styled-components'

const Body = styled.div`
background: url('images/who/PixelArtWho.png') center 115% no-repeat #552f68;
    height:100vh;
    width:100vw;
`

const Head = styled.h1`
padding : 12px
color : white;
text-align : center
font-weight: bold
font-family: 'Press Start 2P', cursive;
`
const Images = styled.img`
margin : auto;
height: 550px;

`
const Box = styled.div`
color : white;
padding : 20px
font-size : 25px
text-align : center
font-weight: bold
font-family: 'Press Start 2P', cursive;
z-index: 1;
`
const M = styled.img`
height: 100px;
width: 100px;
padding : 10px
`
const M2 = styled.img`
height: 150px;
width: 150px;
float: right;
`

const Head2 = styled.h1`
color : white;
padding : 20px
text-align : center
font-weight: bold
font-family: 'Press Start 2P', cursive;
`

const Who =(props) => (
<Body>
        <br></br>
        <br></br>
        <Box className="container">
            <div className="row">
                <div class="col-md-5">
                    <Head>
                        <br></br>
                        WHO
                    </Head>
                </div>
    <box1 class="col-md-7">
        <M2 src="/Images/who/M.png"/>
    </box1>
        <div className="row">
            <Box class="col-md-5">
                <Images src="/Images/who/shibadraf2.png"/>
            </Box>
            <Box class="col-md-7">
             <div className="rowpic">
                <M src="/Images/who/download.png"/>
                <div>All People</div>
             </div>
             <br></br>
             <div className="rowpic">
                <M src="/Images/who/download (1).png"/>
                <div>SCI-MATH</div>
             </div>
             <br></br>
               <div className="rowpic">
                <M src="/Images/who/download (2).png"/>
                <div>MATH-ENG</div>
             </div>
            </Box>
            <Box class="col-md-7">
            <br></br>
            <br></br>
             <div className="rowpic">
                <M src="/Images/who/download (3).png"/>
                <div>HIGH SCHOOL<br></br>STUDENT</div>
             </div>
             <br></br>
             <div className="rowpic">
                <M src="/Images/who/download (4).png"/>
                <div>CAMP</div>
             </div>
            </Box>
            </div>    
        </div>
    </Box>
    <br></br>
    </Body>    
    )
    
    export default Who