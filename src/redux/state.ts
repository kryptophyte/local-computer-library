import {books} from "../books";

class Store  {
    _state: {
        bookId : 0,
        bookPath: string,
    }

    book: {
        name: string,
        genre: string,
        language: string,
        subgenre: string,
    }
    _renderApp = (store) => {return 'meow'};
    subscribe = (observer) => {debugger ; this._renderApp = observer}
    changeBook = (i) =>  {
        this._state.bookId = i;
        this._renderApp(this._state)
    }
    setState = (newState) => {
        return this._state = newState
    }
    getState = () => {
        return this._state
    }
    getBookPath = () => {
        this._state.bookPath = `books/${this.book.genre}/${this.book.language}${this.book.subgenre}/${this.book.name}.pdf`
    }
}

let store = new Store();

export default store;

// let state = {
//     book : 0,
// };

// let renderApp;
//
// export const changeBook =(i) => {
//
//     state.book = i
//     renderApp(state)
// }

// export const subscribe = (observer) => {
//         renderApp = observer;
// }

 // export default state;