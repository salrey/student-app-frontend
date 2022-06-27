import React, {useEffect, useState} from 'react';
import StudentCard from '../studentCard/StudentCard';

const StudentList = () => {
    //hooks
    const [students, setStudents] = useState([])

    const url = 'https://student-app-backend-with-tests.herokuapp.com/students'
    //functions 
    useEffect(() => {
        //reach out to the backend 
        fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setStudents(data.students)
        })
        //get our students 
        //update our students hook with the new data
        
    }, []) //> empty array means run on mount

    //return or JSX
    return (
        <div>
            {students.map((student) => {
                return (
                    <div>
                        {/* {student.firstName} */}
                        <StudentCard student={student}/>
                    </div>
                )
            })}
        </div>
    )
}

export default StudentList;

