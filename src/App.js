import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Layout/Header/Header';
import Courses from './components/Courses/Courses';


function App() {
  return (
<Router>
  <Header/>
  <Routes> 
    <Route path='/' element={<Home/>}/>
    <Route path='/courses' element={<Courses/>}/>
    <Route path='/request' element={<Home/>}/>
    <Route path='/contact' element={<Home/>}/>
    <Route path='/about' element={<Home/>}/>
    
    
  </Routes>
</Router>
  );
}

export default App;
