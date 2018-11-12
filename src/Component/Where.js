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
padding : 12px;
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
padding : 20px;
text-align : center;
font-weight: bold;
font-family: 'Press Start 2P', cursive;
`

const Where = (props) => (
    <Body>
        <br></br>
        <br></br>
        <Box className="container">
            <div className="row">
                <div class="col-lg-5">
                    <Head>
                        <br></br><br />
                        
                    </Head>
                </div>
            </div>
            {/* <div className="col-lg-7">
                <div className="col-lg-7">
                    <M2 src="/Images/where/maps-and-flags.png" />
                </div>

                <div className="col-lg-6">
                    <br /><br /><br />
                    คณะเทคโนโลยีสารสนเทศ
                    มหาวิทยาลัยเทคโนโลย๊พระจอมเกล้าธนบุรี
                            </div>
            </div> */}
        </Box>
        <br></br>
    </Body>

)

export default Where