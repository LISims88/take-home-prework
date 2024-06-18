import Header from '../Header/Header';
import NewsContainer from '../NewsContainer/NewsContainer';
import mockData from '../mockData';
import './App.css';
import { useState } from 'react';

function App() {
  return(
    <>
    <Header data={mockData}/>
    <NewsContainer/>
    </>
  )
}

export default App;
