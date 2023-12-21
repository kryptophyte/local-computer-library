

let state = {
    book : 0,
};

let renderApp;

export const changeBook =(i) => {

    state.book = i
    renderApp(state)
}

export const subscribe = (observer) => {
        renderApp = observer;
}

 export default state;