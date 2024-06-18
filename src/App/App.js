import Header from '../Header/Header';
import NewsContainer from '../NewsContainer/NewsContainer';
import mockData from '../mockData.js';
import './App.css';
import { useState } from 'react';

function App() {
  return(
    <>
    <Header data={mockData}/>
    <NewsContainer data={mockData}/>
    </>
  )
}

export default App;
