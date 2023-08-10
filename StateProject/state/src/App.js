import Course from './Course'
import './App.css';
import {useState} from 'react';

function getRandomCourse(){
  const courseArray = ['Angular', 'Bootstrap5', 'Ccsharp', 'Kompleweb'];
  return courseArray[Math.floor(Math.random()*courseArray.length)]
}
function App() {
  const [first, setfirst] = useState([])
  const handleClick = () => {
    setfirst([...first, getRandomCourse()])
  }
  const courseList = first.map((course,index) => {
      return <Course key={index} courseName={course}/>
    });
  return (
    <div className="App">
      <button className='app-button' onClick={handleClick}>Kurs Ekle</button>
      <div className='course-list'>{courseList}</div>
    </div>
  );
}

export default App;
