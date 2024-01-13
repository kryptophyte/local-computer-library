import {combineReducers, createStore} from "redux";
import {BookReducer} from "./reducers/BookReducer";
import {SideNavReducer} from "./reducers/SideNavReducer";

let reducers = combineReducers(
    {
        book: BookReducer,
        sideNav: SideNavReducer,
    }
)

let store = createStore(reducers)

export default store