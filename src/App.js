import React from 'react';

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



class Body extends React.Component {


  render (){
    return (
      <div className="body-test">
        <p> hello there!</p>

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
      <Body />      
      </>
    );
    }
  }



export default AdventOfCode;
