import {action, computed, makeAutoObservable, makeObservable, observable, reaction} from "mobx";

class SideNavStore {
    _width: number = 50;
    _border;
    // buttonText: string = "open"
    isClosed: boolean

    constructor() {
        this._border = { style: 'none'}
        // makeObservable(this, {
        //     _width: observable,
        //     border: observable,
        //     buttonText: computed,
        //     toggleSideNav: action,
        //     isClosed: observable
        // })
        makeAutoObservable(this)
    }

    get width() {
        return this._width
    }
    get border() {
        return this._border
    }

    get buttonText() {
        if (this.width == 50) {
            return "open"
        } else {return "close"}
    }

    setWidth = () => {
        this.isClosed ? this._width = 50 : this._width = 260
    }

    toggleSideNav = () => {
       // this.isClosed ? this.isClosed = false : this.isClosed = true
       //  this.isClosed ? this._width = 50 : this._width = 260
        if (this._width == 50) {
            this._width = 260
            this._border = {color:'white', style: 'solid'}
        } else {this._width = 50;
            this._border = { style: 'none'}
        }
    }
}

const sideNavState = new SideNavStore()
export default sideNavState