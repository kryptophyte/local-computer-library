import React from "react";
import {ListMember} from "./ListMember/ListMember"
import styles from '../../css/BookList.module.css';

export class BookListComponent extends React.PureComponent <{dispatch}> {

    render() {
        return (
            <div className={styles.bookList}>
                {/*<div className={'object-center'}>*/}
                <ListMember dispatch={this.props.dispatch}/>
                {/*</div>*/}
            </div>
        );
    }
}