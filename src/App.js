import React from 'react';
import {BasicLayout, Card} from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <BasicLayout>
        <Card className='GridItem'/>
        <Card className='GridItem'/>
        <Card className='GridItem'/>
        <Card className='GridItem'/>
        <Card className='GridItem'/>
        <Card className='GridItem'/>
      </BasicLayout>
    </div>
  );
}

export default App;
