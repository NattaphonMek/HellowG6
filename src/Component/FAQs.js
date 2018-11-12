import React from 'react'
import styled from 'styled-components'

const Body = styled.div`
background: url('Images/FAQs/orig.png') center 115% no-repeat #f5c286;
height:120vh;
    width:100vw;
`

const Head = styled.h1`
padding : 12px;
color : white;
text-align : center;
font-weight: bold;
font-family: 'Press Start 2P', cursive;
`
const Images = styled.img`
margin : auto;
height: 550px;

`
const Box = styled.div`
`
const M = styled.img`
height: 180px;
width: 600px;
float: right;
padding : 10px;
`
const M2 = styled.img`
height: 150px;
width: 150px;
float: right;
`

const Head2 = styled.h1`
color : white;
padding : 20px;
text-align : center;
font-weight: bold;
font-family: 'Press Start 2P', cursive;
`
const FAQs =(props) => (
<Body>
        <br></br>
        <br></br>
        <Box className="container">
            <div className="row">
                <div class="col-md-5">
                    <Head>
                        <br></br>
                        FAQs
                    </Head>
                </div>
    <box1 class="col-md-7">
        <M2 src="/Images/FAQs/Star.png"/>
    </box1>
        <div className="row">
        <Box class="col-md-7">
             <div className="rowpic">
             <M src="/Images/FAQs/QA1.png"/>
             </div>
             <br></br>
             <br></br>
             <div className="rowpic">
                <M src="/Images/FAQs/QA2.png"/>
             </div>
             <br></br>
             <br></br>
               <div className="rowpic">
               <M src="/Images/FAQs/QA3.png"/>
             </div>
             <br></br>
             <br></br>
               <div className="rowpic">
                <M src="/Images/FAQs/QA4.png"/>
             </div>
            </Box>
            <Box class="col-md-5">
                <Images src="/Images/who/shibadraf2.png"/>
            </Box>
            </div>    
        </div>
    </Box>
    <br></br>
    </Body>        
        )
        
        export default FAQs