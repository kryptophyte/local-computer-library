import React from "react";
import {books} from "../../../../books";
import {GetBookAction, ChangeBookAction, GetBookPathAction} from "../../../../redux/reducers/BookReducer";
import styles from '../../../css/BookList.module.css';


export class ListMember extends React.PureComponent <{dispatch}> {



    getListMember = () => {
        let buttonArray: any[] =[]
        for( let i=0; i < books.length; i++ ) {
            let a =<li key={`row-${i}`}> <button
                onClick={() => {
                    this.props.dispatch(ChangeBookAction(i));
                    this.props.dispatch(GetBookAction(i));
                    this.props.dispatch(GetBookPathAction())
                }
            }>
                <p className={styles.book}>{books[i].name}</p> </button> </li>
            buttonArray.push(a)
        }
        return buttonArray
    }

//{books[i].name}

    render() {
        return(
            <ul>
                {this.getListMember()}
            </ul>)
    }
}