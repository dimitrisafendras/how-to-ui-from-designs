import React from 'react';
import {Card, BasicLayout} from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <BasicLayout>
        <Card className='Card1'/>
        <Card className='Card2'/>
      </BasicLayout>
    </div>
  );
}

export default App;
