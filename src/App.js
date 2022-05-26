import './App.css';
import { Header } from './components/Header';
import {Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='projects' element={<Projects/>} />
        <Route path='contact' element={<Contact />} />
        <Route path='resume' element={<Resume/>} />
      </Routes>
    </div>
      
  
    
  );
}

export default App;
