/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';
// import './index.css';



function Main (){
  return (
    <>
      <App />
    </>
  );
}


const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
