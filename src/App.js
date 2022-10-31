import Table from './components/Table';
import React from 'react';
import './App.css';
import Boarder from './components/Boarder';
import ButtonsBar from './components/ButtonsBar';
import ColumnNavbar from './components/ColumnNavbar';
import MiddleButtons from './components/MiddleButtons';
import Navbar from './components/Navbar'
import Navigation from './components/Navigation';

function App() {
  return (
    <React.Fragment>
       <Navbar/>
       <hr/>
       <br/>
       <ButtonsBar/>
       <hr/>
       <br/>
       <MiddleButtons/>
       <Boarder/>
       <br/>
       <ColumnNavbar/>
       <br/>
       <Table/>
    </React.Fragment>
  
 
  );
}

export default App;
