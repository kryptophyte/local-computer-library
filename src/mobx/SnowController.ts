import {makeAutoObservable} from "mobx";



export class SnowController {

    constructor() {
        makeAutoObservable(this)
    }

    getRndInteger = (max, min) => {
        return Math.floor(Math.random() * (max - min + 1) ) + min
    }

    rndFloat = (max, min) => {
        return (Math.random() * (max - min) + min).toFixed(1)
    }

}