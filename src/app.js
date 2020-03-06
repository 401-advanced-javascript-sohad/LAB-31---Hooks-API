/* eslint-disable no-unused-vars */
import React from 'react';
import './app.scss';
import ToDo from './modules/todo.js';
import Header from './modules/header.js';
import Footer from './/modules/footer.js';

function App(){

  return (
    <>
      <Header />
      <ToDo />
      <Footer />
    </>
  )
};
export default App;