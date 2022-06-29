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
            <div className='studentCard__profilePic'>
                <img src={pic} alt='person'/>
            </div>
            <div className='studentCard__info'>
                <div className="studentCard__name">
                    {`${firstName} ${lastName}`}
                </div>
                <div className='studentCard__details'>
                    Email: {email}
                </div>
                <div className='studentCard__details'>
                    Company: {company}
                </div>
                <div className='studentCard__details'>
                    Skill: {skill}
                </div>
                <div className='studentCard__details'>
                    Average: {calculateAverage(grades)}%
                </div>
            </div>
        </div>
    )
} 

export default StudentCard;