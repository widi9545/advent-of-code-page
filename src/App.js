import React from 'react';
import DayOne from './page1'

import { Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";

import logo from './logo.svg';
import './App.css';



class Header extends React.Component {


render (){
  return (
    <div className="header-link">
      <header className="App-header">
      </header>
    </div>
    );
  }
}



class LinkSelection extends React.Component {


  render (){
    return (
      <div className="body-test">
        <p> Select a page that you would like to load</p>
        <BrowserRouter>
        <Routes>
          <Route path='/DayOne' element={<DayOne />} />
        </Routes>
        </BrowserRouter>
      </div>
      );
    }
  }

  
  

// <> needed for wrapping more than one jsx react component 

class AdventOfCode extends React.Component {


  render (){
    return (

      <>
      <Header />
      <LinkSelection />  
      </>

    );
    }
  }



export default AdventOfCode;
