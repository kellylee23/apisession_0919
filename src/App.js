import './App.css';

import React from 'react';
import SomeComponent from './SomeComponent'; // SomeComponent 경로에 맞게 수정하세요
import SomeComponent2 from './SomeComponent2';



function App() {
  return (
    <div className="App">
      <SomeComponent />
      <div className='main-bg'></div>
      <SomeComponent2 />
      
    </div>
  );
}

export default App;