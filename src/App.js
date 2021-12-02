import React from 'react';
import DayOne from './page1'

import { Router, Routes, Route, Link, Outlet, BrowserRouter } from "react-router-dom";

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
        <>
        <div className="body-test">
          <Routes>
            <Route path='/DayOne' element={<DayOne />} />
          </Routes>
  
        </div>
        </>
        );
      }
    }

    class Home extends React.Component {


      render (){
        return (
          <div>
            <p> hello !</p>
            <li>
              <Link to="DayOne">DayOne</Link>
            </li>
            <Outlet />
    
    
          </div>
    
          );
        }
      }
    
  

// <> needed for wrapping more than one jsx react component 

class AdventOfCode extends React.Component {


  render (){
    return (

      <>    
      <BrowserRouter>
      <LinkSelection /> 
      <Header />
      <Home />
      </BrowserRouter>  
      </>

    );
    }
  }



export default AdventOfCode;
