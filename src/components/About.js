import React from 'react'
import { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';

function BasicExample() {
 const[myStyle, setMyStyle] = useState({
    backgroundColor : 'white',
    color : 'black',
    border : "1px solid white"
 })
 const[btnText, setBtntext] = useState('Enable dark mode')
  const toggleStyle = ()=>{
   if(myStyle.color ==='black'){
    setMyStyle(
        {
            backgroundColor : 'black',
            color : 'white'
         } )
         setBtntext('Enable light mode')
        }
        else
        {
            setMyStyle({
                backgroundColor : 'white',
                color: 'black'
            })
            setBtntext('Enable black mode')

    }
   }


  return (
<div className="container"  style={myStyle} >

    <Accordion defaultActiveKey="0" style={myStyle}>
        <h1 className='my-3'>About Us</h1>
      <Accordion.Item eventKey="0"  style={myStyle}>
        <Accordion.Header style={myStyle} >Accordion Item #1</Accordion.Header>
        <Accordion.Body  style={myStyle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1"style={myStyle}>
        <Accordion.Header style={myStyle}>Accordion Item #2</Accordion.Header>
        <Accordion.Body  style={myStyle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <div className="container my-3">
      <Button onClick={toggleStyle} variant="primary">{btnText}</Button>{' '}
      </div>
    </Accordion>
</div>
  );
}

export default BasicExample;