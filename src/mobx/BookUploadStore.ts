import {action, makeObservable, observable} from "mobx";


class BookUploadStore{
    display: string = 'none'
    book

    constructor() {
        makeObservable(this, {
            display: observable,
            viewPopup: action,
            closePopup: action,
            book: observable
        })
    }
    viewPopup = () => {
        return this.display = "block"
    }

    closePopup = () => {
        return this.display = "none"
    }

    bookUpload =() => {

    }


}

let bookUploadState = new BookUploadStore()

export default bookUploadState