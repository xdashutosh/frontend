import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Layout/Header/Header';
import Courses from './components/Courses/Courses';
import Footer from './components/Layout/Footer/Footer';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Forgotpass from './components/Auth/Forgotpass';
import Resetpass from './components/Auth/Resetpass';
import Contact from './components/Contactus/Contact';
import Reqcourse from './components/RequestCourse/Reqcourse';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/courses" element={<Layout><Courses /></Layout>} />
        <Route path="/login" element={<Layout><Login /></Layout>} />
        <Route path="/register" element={<Layout><Register /></Layout>} />
        <Route path="/forgetpassword" element={<Forgotpass/>} />
        <Route path="/resetpass/:token" element={<Resetpass/>} />
        <Route path="/contactus" element={<Contact/>} />
        <Route path="/reqcourse" element={<Reqcourse/>} />

      </Routes>
    </Router>
  );
}

function Layout({ children }) {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
}

export default App;
