import React from 'react'
import { useNavigate } from 'react-router-dom'

function Mission() {
    const navigator = useNavigate();
  return (
    <div>
        <div>Mission</div>
        <button onClick={()=>navigator('/')}>Go Back</button>
    </div>
  )
}

export default Mission