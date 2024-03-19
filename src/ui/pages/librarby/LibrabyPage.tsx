import React from "react";
import styles from '../../css/App.module.css';
import {BookListComponent} from "../../components/BookList/BookListComponent";
import BookComponent from "../../components/BookView/BookComponent";

class LibrabyPage extends React.Component {

    render() {
        return (<div>
            <div className={styles.bookList}>
                <BookListComponent/>
            </div>
            <div className={styles.bookContainer}>
                {/*<UploadPopupComponent/>*/}
                <BookComponent />
            </div>
        </div>)
    }
}

export default LibrabyPage