import * as React from 'react';
import logo from './logo.svg';

import * as FaIcons from "react-icons/fa";
import {BrowserRouter as Router ,Switch,Route } from 'react-router-dom';
import Sidebar from './Layouts/Sidebar/Sidebar';
import Footer from './Layouts/Footer/Footer';
import Main from './Layouts/Main/Main';
import Routing from './Layouts/MainMenuRouting';
import Navbar from './Layouts/Navbar/Navbar';


function App() {
  return (
    <div className="App">
     
      <Router>
      <aside>
      <Sidebar/>
      </aside>
      
     {/*} <Main/>*/}
    
    <Routing/>
    
      <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
