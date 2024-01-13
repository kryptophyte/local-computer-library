import {books} from "../../books";

 class BookState {
    bookId : number = 0;
    bookPath: string;
    name: string = books[this.bookId].name;
    genre: string = books[this.bookId].genre;
    language: string = books[this.bookId].language;
    subgenre: string = books[this.bookId].subgenre;
}

 let initialState = new BookState()

export let BookReducer = (state = initialState, action) => {
   //debugger
    switch (action.type) {
        case "GET_BOOK":
            state.name = books[action.number].name;
            state.genre = books[action.number].genre;
            state.language = books[action.number].language;
            state.subgenre = books[action.number].subgenre;
            return state;
        case "CHANGE_BOOK":
            state.bookId = action.number;
            return state;
        case "GET_PATH" :
            if (state.subgenre != '') {
                state.bookPath = `books/${state.genre}/${state.language}/${state.subgenre}/${state.name}.pdf`
            }
            else {
                state.bookPath = `books/${state.genre}/${state.language}/${state.name}.pdf`
            }
            return state;
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
