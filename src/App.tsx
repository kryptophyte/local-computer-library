import React from 'react';
import styles from './ui/css/App.module.css';
import {BookComponent} from './ui/components/BookView/BookComponent'
import {SideNavComponent} from "./ui/components/SideNavigation/SideNavComponent";
import {BookListComponent} from "./ui/components/BookList/BookListComponent";
import {HeaderComponent} from "./ui/components/Header/HeaderComponent";


class App extends React.Component <{ state, dispatch }> {

    render() {
        return (
            <div className={styles.App}>
                <div className={styles.sideNav}>
                    <SideNavComponent width={this.props.state.sideNav.width}/>
                </div>
                <div className={styles.header}>
                    <HeaderComponent buttonText={this.props.state.sideNav.buttonText} dispatch={this.props.dispatch}/>
                </div>
                        <div className={styles.bookList}>
                            <BookListComponent dispatch={this.props.dispatch}/>
                        </div>
                        <div className={styles.bookContainer}>
                            <BookComponent bookPath={this.props.state.book.bookPath}/>
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
//             <BookComponent props={1}/>
//         </div>
//     </div>
//   );
// }

export default App;
