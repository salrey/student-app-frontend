import React from 'react';

import './StudentCard.scss'

const StudentCard = ({student}) => {

    const {pic, firstName, lastName, email, company, skill, grades} = student;

    //functions
    const calculateAverage = (grades) => {
        return grades.reduce((acc, el) => acc += Number(el), 0)/grades.length
    }

    return (
        <div className='studentCard'>
            <div>
                <img src={pic} />
            </div>
            <div className="studentCard__name">
                {`${firstName} ${lastName}`}
            </div>
            <div>
                Email: {email}
            </div>
            <div>
                Company: {company}
            </div>
            <div>
                Skill: {skill}
            </div>
            <div>
                Email: {email}
            </div>
            <div>
                Average: {calculateAverage(grades)}%
            </div>

        </div>
    )
} 

export default StudentCard;