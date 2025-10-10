import React from 'react'
import { useState } from 'react'
import "../style.css"
    


const Counter = () => {
  const [count,setCount] = useState(0)
  return (
    <div>
      <h1>{count}</h1>
      <button className='btns-container' onClick={()=> setCount(count+1)}>+</button>
      <button className='btns-container' onClick={()=> setCount(0)}>0</button>
      <button className='btns-container' onClick={()=> setCount(count-1)}>-</button>
    </div>
  )
}

export default Counter