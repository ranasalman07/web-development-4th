import React from 'react'
import './Second.css';
import { useState } from 'react';
function Second() {

let [isPressed, handleIsPressed] = useState(0)
function handleIsPressed (){
    isPressed=isPressed+1;
}

  return (
    <>
    <div className='second-1'> Second</div>
    <button onClick={handleIsPressed}>The Button is Clicked {isPressed} times</button>
    </>
  )
}

export default Second