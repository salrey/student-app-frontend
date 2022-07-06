import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.scss';

import StudentList from './components/studentList/StudentList';
import StudentDetailsPage from './pages/StudentDetailsPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/students' element={<StudentList />} />
          <Route path='/students/:studentId' element={<StudentDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
