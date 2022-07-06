import React, { useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import StudentCard from '../components/studentCard/StudentCard';

import './StudentDetailsPage.scss'

const StudentDetailsPage = ()  => {
    let params = useParams();
    let location = useLocation();
    const [student, setStudent] = useState({})

    const studentId = params.studentId

    console.log(params)

    useEffect (() => {
        if (location.state?.student) {
            setStudent(location.state?.student)
        } else {
            const singleStudentURL = 'https://student-app-backend-with-tests.herokuapp.com/students/' + studentId
            fetch(singleStudentURL)
                .then((response) => response.json())
                .then((data) => {
                    setStudent(data);
                })
        }

    }, [])

    return (
        <div className="studentDetailsPage">
            {Object.keys(student).length > 0 && <StudentCard student={student} />}
        </div>
    )
}

export default StudentDetailsPage