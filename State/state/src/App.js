import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [first, setfirst] = useState(0);
  const handleClick = ()=>{
    setfirst(first+1);
  }
  return (
    <div className="App">
      <button onClick={handleClick}>Kurs ekle</button>
      <div>Kurs sayısı: {first}</div>
    </div>
  );
}

export default App;
