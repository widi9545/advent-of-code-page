import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AdventOfCode from './App';

let x = 'William Diment';
const html_element = <h1> hello, {x}</h1>





ReactDOM.render(
    <AdventOfCode />,
  document.getElementById('root')
);

