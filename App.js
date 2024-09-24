import React from 'react';
import Navbar from './Navbar';
import Clinic from './Clinic';
import Grad from './Grad';
import Content from './Content';
import Footer from './Footer';
import './App.css';


function App() {
  return (
    <div>
     <Navbar/>
     <Clinic/>
     <Grad/>
     <Content/>
     <Footer/>
    </div>
  );
}

export default App;
