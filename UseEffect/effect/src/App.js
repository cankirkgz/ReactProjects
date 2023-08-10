import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';

function App() {
  const [can, setcan] = useState(0)
  const [tuba, settuba] = useState(0)
  useEffect(() => {
    console.log(can);
  })
  return (
    <div className="App">
      <div className='can-div'>
        <button onClick={()=>setcan(can+1)}>Can ++</button>
        <div>Can: {can}</div>
      </div>
      <div className='tuba-div'>
        <button onClick={()=>settuba(tuba+1)}>Tuba ++</button>
        <div>Tuba: {tuba}</div>
      </div>
    </div>
  );
}

export default App;
