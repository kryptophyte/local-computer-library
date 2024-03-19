import {books} from "../../books";

 class ReduxBookState {
    bookId : number = 0;
    bookPath: string;
    name: string = books[this.bookId].name;
    genre: string = books[this.bookId].genre;
    language: string = books[this.bookId].language;
    subgenre: string = books[this.bookId].subgenre;
}

 let initialState = new ReduxBookState()

export let BookReducer = (state = initialState, action) => {
    let copy = {...state}
    switch (action.type) {
        case "GET_BOOK":
            copy.name = books[action.number].name;
            copy.genre = books[action.number].genre;
            copy.language = books[action.number].language;
            copy.subgenre = books[action.number].subgenre;
            return copy;
        case "CHANGE_BOOK":
            copy.bookId = action.number;
            return copy;
        case "GET_PATH" :
            if (copy.subgenre != '') {
                copy.bookPath = `books/${copy.genre}/${copy.language}/${copy.subgenre}/${copy.name}.pdf`
            }
            else {
                copy.bookPath = `books/${copy.genre}/${copy.language}/${copy.name}.pdf`
            }
            return copy;
        default: return state;
    }
}

export const ChangeBookAction = (i) => (
    {type: "CHANGE_BOOK",  number: i}
)
export const GetBookPathAction = () => (
    {type: "GET_PATH"}
)
export const GetBookAction = (i) => (
    {type: "GET_BOOK", number: i}
)
