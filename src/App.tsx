import React from 'react';

import './App.css';
import {IFrameComponent} from './components/iframe/iFrameComponent'
import {SideNavComponent} from "./components/side-navigation/SideNavComponent";


class App extends React.Component <{state, changeBook}> {

    render() {
        return (
            <div className="App">
                <div className={'sideNav'}>
                    <SideNavComponent changeBook={this.props.changeBook} />
                </div>
                <div className={'iFrame'}>
                    <IFrameComponent bookPath={this.props.state.bookPath}/>
                </div>
            </div>
        );
    }
}


// function App() {
//   return (
//     <div className="App">
//         <div className={'sideNav'}>
//             <SideNavComponent  />
//         </div>
//         <div className={'iFrame'}>
//             <IFrameComponent props={1}/>
//         </div>
//     </div>
//   );
// }

export default App;
