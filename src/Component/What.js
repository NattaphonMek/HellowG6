import React, { Component } from 'react'
import Navbar from './Navbar.js'
import styled from 'styled-components'
import './what1.css'

const ColorSpan = styled.div` 
height: 900px;
weight: 1400px;
background-Repeat: no-repeat;
background-Size: 100%;
z-index: 1; 
`
const Font = styled.div`
font-Family: 'Athiti', sans-serif;
color: white ;
font-Size: 24px; 
margin-Left: 400px;
`
const Font1 = styled.div`
font-Family: font-family: 'Quantico', sans-serif;
color: white ;
font-Size: 60px; 
margin-Left: 400px;
`






class What extends Component {
  render() {
    return (
      <ColorSpan >
        <Navbar />
        <div className="prang">          
            <div className=" column content">
            <br /><br /><br />
              <br /><br /><br /><Font1>What ? </Font1><br />
              <br /><br />
            
              <br />
              <Font>
              "HelloShibra" (ฮัลโหลชิ้บร้ะ) หลายๆคนอาจจะสงสัยว่า ฮัลโหลชิ้บร่ะ ฮัลโหลชิ้บร่ะ!<br />
              เนี่ยยมันคืออะไร อ้าาาห์ ฮัลโหลชิ้บร่ะ นั่นนก็คืออ คือ คือ คือ <br />
              "ค่ายฮัลโหลสู่ฝันนักไอที (Helloshibra Camp) คือ ค่ายสำหรับน้อง ๆ ผู้มีความสนใจด้านไอที <br />
              หรือผู้ต้องการค้นหาตนเอง โดยน้อง ๆ จะได้มีโอกาสสัมผัสชีวิตของการเป็นนักไอทีอย่างแท้จริง <br/>
              ณ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี โดย HelloShibra Camp ประกอบด้วยการเรียน <br />
              และลงมือปฏิบัติจริงด้านวิชาการ ความสนุกสนานจากกิจกรรม รวมถึงมิตรภาพจากพี่ ๆ เพื่อน ๆ ในค่ายทุกคน <br /></Font>
            </div>
          </ div>




      </ColorSpan>
    );
  }
}

export default What;
