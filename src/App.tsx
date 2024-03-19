import React from 'react';
import styles from './ui/css/App.module.css';
import BookComponent from './ui/components/BookView/BookComponent'
import SideNavComponent from "./ui/components/SideNavigation/SideNavComponent";
import {BookListComponent} from "./ui/components/BookList/BookListComponent";
import HeaderComponent from "./ui/components/Header/HeaderComponent";
import UploadPopupComponent from "./ui/components/UploadPopUp/UploadPopupComponent";
import Snowflakes from "./ui/editors/Snowflakes/Snowflakes";
import {Route, Routes} from "react-router-dom";
import LibrabyPage from "./ui/pages/librarby/LibrabyPage";
import ChuvashCounterPage from "./ui/pages/parsrr/ChuvashCounterPage";



class App extends React.Component  {

    render() {
        return (

            <div className={styles.App}>
                <div className={styles.sideNav}>
                    <SideNavComponent/>
                </div>
                <div className={styles.header}>
                    <HeaderComponent />
                </div>
                <Routes>
                <Route path={'/library'} Component={LibrabyPage}/>
                <Route path={'/'} Component={ChuvashCounterPage}/>
                {/*        <div className={styles.bookList}>*/}
                {/*            <BookListComponent/>*/}
                {/*        </div>*/}
                {/*        <div className={styles.bookContainer}>*/}
                {/*            <UploadPopupComponent/>*/}
                {/*            <BookComponent />*/}
                {/*        </div>*/}
                </Routes>
                <Snowflakes/>
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
