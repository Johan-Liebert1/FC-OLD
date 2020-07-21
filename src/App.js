import React from 'react';
import './App.css';
import FlashCard from "./Card"

import dummyData from './seedData'
import RenderCards from './RenderCards';

function App() {
  return (
    <div className="App">
      {/* <FlashCard dummyData={dummyData}/> */}
      <RenderCards dummyData={dummyData}/>
    </div>
  );
}

export default App;
