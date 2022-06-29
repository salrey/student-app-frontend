import React, {useEffect, useState} from 'react';
import SearchBar from '../searchBar/SearchBar';
import StudentCard from '../studentCard/StudentCard';
import './StudentList.scss';

const StudentList = () => {
    //hooks
    const [students, setStudents] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

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

    //when searchTerm is updated, this component will re-render 
    //what to do on a re-render? Get all students and then filter if there's a searchTerm.
    let filteredStudents = students 
    if (searchTerm) {
        filteredStudents = students.filter((student) => {
            const fullName = `${student.firstName} ${student.lastName}`
            return fullName.toLowerCase().includes(searchTerm.toLowerCase());
        })
    }

    //return or JSX
    return (
        <div className="studentList">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            
            {filteredStudents.map((student) => {
                return (
                    <div>
                        <StudentCard student={student}/>
                    </div>
                )
            })}

            {filteredStudents.length === 0 && <div className='studentList__noResults'>No Results</div>}
        </div>
    )
}

export default StudentList;

