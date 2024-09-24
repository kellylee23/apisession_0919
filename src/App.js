import './App.css';

import React from 'react';
import Disease from './disease'; 
import Region from './region';

import styled from "styled-components";

const StyledFlex = styled.div`
display: flex;
flex-direction: row;
gap: 100px;
justify-content: center;
`;

function App() {
  return (
    <div className="App">
      <div className='header-color'>
        <h1>근로복지공단_업무상질병판정위원회_2023</h1>
      </div>
            
      <StyledFlex>
        <Disease />
        <Region />
      </StyledFlex>

    </div>
  );
}

export default App;