import React, {useState} from 'react';

import { FaPlus, FaMinus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import './StudentCard.scss';

const StudentCard = ({student}) => {

    // props deconstructed
    const {pic, firstName, lastName, email, company, skill, grades} = student;

    // hooks
    const [showGrades, setShowGrades] = useState(false);

    console.log(showGrades);
    // functions 
    const calculateAverage = (grades) => {

        let sum = 0;

        grades.map(grade => {
            return sum += Number(grade);
        });

        return sum / grades.length;
    }

    const toggleGrades = (event) => {
        // event.stopPropagation() //> when you click on something the website is treated like layers, it ripples through nested elements. it goes all the way back to body, handle what you're supposed to do here, but don't go anywhere further than that
        event.preventDefault();
        setShowGrades(!showGrades);
    }

    return (
        <div className="studentCard">
            <Link to={`/students/${student.id}`} state={{student: student}}>
            <div className="studentCard__profilePic">
                <img src={pic} alt='person'/>
            </div>
            
            <div className="studentCard__info">
                <div className="studentCard__name">
                    {`${firstName}  ${lastName}`}
                </div>
                <div className="studentCard__infoLine">
                    Email: {email}
                </div>
                <div className="studentCard__infoLine">
                    Company: {company}
                </div>
                <div className="studentCard__infoLine">
                    Skill: {skill}
                </div>
                <div className="studentCard__infoLine">
                    Average: {calculateAverage(grades)}%
                </div>
                <div className="studentCard__gradesList" style={{"display": showGrades ? "block" : "none"}}>
                    {grades.map((grade, index) => {
                        return (
                            <div key={index}><span>Test {index+1}:</span><span>{grade}%</span></div>
                        )
                    })}
                </div>
            </div>
            <div className="studentCard__toggleIcons">

                {!showGrades && <FaPlus className="studentCard__toggleIcon" onClick={(event) => toggleGrades(event)} size="1.8em"/>}
                {showGrades && <FaMinus className="studentCard__toggleIcon" onClick={(event) => toggleGrades(event)} size="1.8em" />}
            </div>
            </Link>
        </div>
    )
}

export default StudentCard;