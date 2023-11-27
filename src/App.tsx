import React from 'react';
import logo from './logo.svg';
import './App.css';
import {IFrameComponent} from './components/iframe/iFrameComponent'

function App() {
  return (
    <div className="App">
     <IFrameComponent props={1}/>
    </div>
  );
}

export default App;
