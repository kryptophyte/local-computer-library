import {books} from "../books";
class BookState {
    bookId : number = 0;
    bookPath: string;
    name: string = books[this.bookId].name;
    genre: string = books[this.bookId].genre;
    language: string = books[this.bookId].language;
    subgenre: string = books[this.bookId].subgenre;
}
class Store {
    _state = new BookState()

    constructor() {
    this.getBookPath()
    }

    _callSubscriber = (store) => {return 'meow'};
    subscribe = (observer) => { this._callSubscriber = observer}
    changeBook = (i) =>  {
        this._state.bookId = i;
        this._state.name = books[i].name;
        this._state.genre = books[i].genre;
        this._state.language = books[i].language;
        this._state.subgenre = books[i].subgenre;
        this.getBookPath()
        this._callSubscriber(this._state)
    }
    setState = (newState) => {
        return this._state = newState
    }
    getState = () => {
        return this._state
    }
    getBookPath = () => {
        if (this._state.subgenre != '') {
            return this._state.bookPath = `books/${this._state.genre}/${this._state.language}/${this._state.subgenre}/${this._state.name}.pdf`
        }
        else {
            return this._state.bookPath = `books/${this._state.genre}/${this._state.language}/${this._state.name}.pdf`
        }

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