import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Courses from './Courses';
import Loading from './Loading';

function App() {
  const [courses, setcourses] = useState([])
  const [loading, setloading] = useState(true)
  const fetchCourses =  async () => {
    setloading(true);
    try{
      const response = await axios.get('http://localhost:3004/courses');
      setcourses(response.data);
      setloading(false);
    }catch(error){
      setloading(false);
    }
  }
  useEffect(() => {
    fetchCourses();
  }, [])
  const deleteCourse = (id) => {
    const afterDeletedCourses = courses.filter((course) => course.id !== id)
    setcourses(afterDeletedCourses);
  }
  return (
    <div className="App">
      {loading ? (<Loading/>) : 
      ( 
        <>
          {
          courses.length === 0 ? (
          <div className='no-course-div'>
            <h2>Hiç kurs kalmadı!</h2>
            <button className='card-button' onClick={() => {fetchCourses()}}>Yenile</button>
          </div>) :
          <Courses courses={courses} removeCourse={deleteCourse}/>
          }
        </>
      )}
    </div>
  );
}

export default App;
