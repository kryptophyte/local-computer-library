import React from "react";
import {books} from "../../../../books";
import {GetBookAction, ChangeBookAction, GetBookPathAction} from "../../../../redux/reducers/BookReducer";
import styles from '../../../css/BookList.module.css';
import {connect} from "react-redux";
import bookState from "../../../../mobx/BookStore";


 export default class ListMember extends React.PureComponent <any> {



    getListMember = () => {
        let buttonArray: any[] =[]
        for( let i=0; i < books.length; i++ ) {

            let a =<li key={`row-${i}`}> <button
                onClick={() => {
                        bookState.changeBook(i)
                    // this.props.changeBook(i)
                    // this.props.getBook(i)
                    // this.props.getBookPath()
                   // this.props.dispatch(ChangeBookAction(i));
                   //  this.props.dispatch(GetBookAction(i));
                   //  this.props.dispatch(GetBookPathAction())
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

// let mapStateToProps = (state) => ({
//         state: state.book
// })
//
// let mapDispatchToProps = (dispatch) => ({
//     changeBook: (i) => dispatch(ChangeBookAction(i)),
//     getBook: (i) => dispatch(GetBookAction(i)),
//     getBookPath: () => dispatch(GetBookPathAction())
// })
//
// const ListMember = connect( mapStateToProps, mapDispatchToProps )(ListMemberComponent)
// export default ListMember