import React from 'react'
import styled from 'styled-components'

const Body = styled.div`
background: url('Images/where/fuji.png');
position: center;
height:100vh;
width:100vw;
background-size: cover;
`

const Head = styled.h1`
padding : 12px
font-size : 50px
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
`
const M = styled.img`
height: 82px;
width: 400px;
`
const Map = styled.img`
width: 520px;
`
const M2 = styled.img`
height: 50px;
width: 50px;
float: right;
`

const Head2 = styled.h1`
color : white;
padding : 20px
text-align : center
font-weight: bold
font-family: 'Press Start 2P', cursive;
`

const Where =(props) => (
    <Body>
        <br></br>
        <br></br>
        <Box className="container">
            <div className="row">
                <div class="col-lg-5">
                    <Head>
                        <br></br>
                        WHERE
                    </Head>
                </div>
                <div class="col-lg-7">
                </div>
            <div className="row">
                <Box class="col-lg-6">
                    <Images src="/Images/where/Shibadrafwhere.png"/>
                </Box>
                <Box class="col-lg-8">
                    <Map src="/Images/where/map.png"/>
                    <br></br>
                    <br></br>  
                <div className="row">
                <div className="col-lg-1">
                <M2 src="/Images/where/maps-and-flags.png"/>
                </div><div className="col-lg-4">
                <M src="/Images/where/IT.png"/>
                </div>
                </div>   
                </Box>
                </div>    
            </div>
        </Box>
        <br></br>
        </Body>    
      
        )
        
        export default Where