import React from 'react';
import {AppLayout, Header, Main, Sidebar} from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <AppLayout>
        <Header/>
        <Sidebar/>
        <Main/>
      </AppLayout>
    </div>
  );
}

export default App;