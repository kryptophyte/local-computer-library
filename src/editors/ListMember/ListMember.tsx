import React from "react";
import {books} from "../../books";
import {state} from "../../redux/state";

export class ListMember extends React.PureComponent {

    setBookState = (i: number) => {
        return state.books = i;
    }

    getListMember = () => {
        let buttonArray: any[] =[]
        for( let i=0; i < books.length; i++ ) {
            let a =<li> <button onClick={() => this.setBookState(i)}> {books[i].name} </button> </li>
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