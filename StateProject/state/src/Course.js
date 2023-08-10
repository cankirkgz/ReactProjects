import Angular from './images/angular.jpg'
import Bootstrap5 from './images/bootstrap5.png'
import Ccsharp from './images/ccsharp.png'
import Kompleweb from './images/kompleweb.jpg'
import './Course.css';

const courseMap = {
    Angular,
    Bootstrap5,
    Ccsharp,
    Kompleweb
}
function Course({courseName}) {
    return ( 
    <div className='course-div'>
        <img className="course" src={courseMap[courseName]}></img>
    </div> 
    );
}

export default Course;