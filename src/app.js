/* eslint-disable no-unused-vars */
import React from 'react';
import './app.scss';
import ToDo from './components/todo.js';
import Header from './components/header.js';
import Footer from './components/footer.js';

function App (){

  return (
    <>
      <Header />
      <ToDo />
      <Footer />
    </>
  );
};
export default App;