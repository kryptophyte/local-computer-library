import React from 'react';
import logo from './logo.svg';
import './App.css';
import {IFrameComponent} from './components/iframe/iFrameComponent'
import {SideNavComponent} from "./components/side-navigation/SideNavComponent";

function App() {
  return (
    <div className="App">
        <div className={'sideNav'}>
            <SideNavComponent  />
        </div>
        <div className={'iFrame'}>
            <IFrameComponent props={1}/>
        </div>
    </div>
  );
}

export default App;
