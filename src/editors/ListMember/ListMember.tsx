import React from "react";
import {books} from "../../books";
import state from "../../redux/state";


export class ListMember extends React.PureComponent <{changeBook}> {





    getListMember = () => {
        let buttonArray: any[] =[]
        for( let i=0; i < books.length; i++ ) {
            let a =<li key={`book-btn-${i}`} > <button onClick={() => this.props.changeBook(i)}> {books[i].name} </button> </li>
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