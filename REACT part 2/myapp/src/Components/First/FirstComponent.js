import React from 'react'
import './First.css'
const FirstComponent = (props) => {
  return (
    <>
    <div className='First-1'>
      FirstComponent
    </div>
    <h1>REACT {props.abc}</h1>
    {console.log(props.abc)}
    </>
  )
}

export default FirstComponent