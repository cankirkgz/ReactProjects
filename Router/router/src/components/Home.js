import React from 'react'
import {useNavigate} from 'react-router-dom'

function Home() {
    const navigator = useNavigate();
  return (
    <div>
        <div>Home</div>
        <button onClick={()=>navigator('/mission')}>Go to Mission</button>
    </div>
  )
}

export default Home