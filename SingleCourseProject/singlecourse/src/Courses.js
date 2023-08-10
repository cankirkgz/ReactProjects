import Course from "./Course";
import { useState } from "react";
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'

function Courses({courses, removeCourse}) {
    const [index, setindex] = useState(0);
    const {content,title,price} = courses[index];
    console.log(index);
    const checkIndex = (index, isNext) => {
        if (isNext){
            if (index === courses.length){
                return (0);
            }
        } else {
            if (index < 0){
                return (courses.length - 1);
            }
        }
        return (index);
    }
    const prevCourse = () => {
        setindex(() => {
            let newIndex = index - 1;
            return checkIndex(newIndex, false);
        })
    }
    const nextCourse = () => {
        setindex(() => {
            let newIndex = index + 1;
            return checkIndex(newIndex, true);
        })
    }
    const getRandomCourse = () => {
        let randomIndex = Math.floor(Math.random() * courses.length);
        while (randomIndex === index){
            randomIndex = Math.floor(Math.random() * courses.length);
        }
        setindex(randomIndex);
    }
    return ( 
    <div className="courses-div">
        <div className="random-course-title">
            <h2>Kurslarım</h2>
            <button className="card-button" onClick={getRandomCourse}>
                Rastgele Kurs Ata
            </button>
        </div>
        <div className="courses-content-div">
            <button className="icon-div" onClick={prevCourse}>
                <FaChevronLeft/>
            </button>
            <div className="course-card">
                <div className="card-title-price">
                    <h2 className="card-title">{title}</h2>
                    <h4 className="card-price">{price} TL</h4>
                </div>
                <p>{content}</p>
            </div>
            <button className="icon-div" onClick={nextCourse}>
                <FaChevronRight/>
            </button>
        </div>
    </div> 
    );
}

export default Courses;