import React from 'react';
import './App.css';
import SetTask from './component/SetTask';
import GetTask from './component/GetTask';

function App() {
  return (
    <div className="App">
      <h1 className={'title'} style={{fontFamily: 'Amatic SC', fontWeight: 700, fontSize: 100}}>SleepyTasks</h1>
      <SetTask/>
      <GetTask/>
    </div>
  );
}

export default App;
