import {books} from "../books";
import {action, computed, makeObservable, observable, reaction} from "mobx";

class BookStore {
    _bookId: number = 0
    _bookPath: string;
   //  name: string = books[this.bookId].name;
   //  genre: string = books[this.bookId].genre;
   //  language: string = books[this.bookId].language;
   //  subgenre: string = books[this.bookId].subgenre;

    constructor() {
        makeObservable(this, {
            _bookId: observable,
            name: computed,
            genre: computed,
            language: computed,
            subgenre: computed,

            _bookPath: observable,
            changeBook: action,
            setBookPath: action,
        })
        reaction(() => this.bookId, () => {this.setBookPath()})
    }


    get bookId() {
        return this._bookId
    }

    get bookPath() {
        return this._bookPath
    }

    get name() {
        return books[this.bookId].name;
    }

    get genre() {
        return  books[this.bookId].genre;
    }

    get language() {
        return books[this.bookId].language;
    }

    get subgenre() {

        return books[this.bookId].subgenre;
    }
    // get bookPath() {
    //
    //     if (this.subgenre != '') {
    //         return  `books/${this.genre}/${this.language}/${this.subgenre}/${this.name}.pdf`
    //     }
    //     else {
    //         return  `books/${this.genre}/${this.language}/${this.name}.pdf`
    //     }
    // }
    setBookPath = () => {

        if (this.subgenre != '') {
            this._bookPath = `books/${this.genre}/${this.language}/${this.subgenre}/${this.name}.pdf`
        }
        else {
            this._bookPath = `books/${this.genre}/${this.language}/${this.name}.pdf`
        }
    }
    changeBook = (i) => {

        return this._bookId = i;
    }


}

const bookState = new BookStore()
export default bookState