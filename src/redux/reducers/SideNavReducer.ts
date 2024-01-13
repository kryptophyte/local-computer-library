
class SideNavState {
    isClosed: boolean = true;
    width: number = 50;
    buttonText: string = 'open';
}

let initialState = new SideNavState()

export let SideNavReducer = (state = initialState, action) => {
     switch (action.type) {
         case "TOGGLE_SIDENAV":
             if (state.isClosed) {
                 state.isClosed = false;
                 state.width = 260;
                 state.buttonText = 'close'
                return state
             }
             else {
                 state.isClosed = true;
                 state.width = 50;
                 state.buttonText = 'open'
                 return state
             }
             // state.isClosed = !state.isClosed;
             // state.width = state.isClosed ? 50 : 260
         default: return state;
     }
}

export const SideNavToggleAction = () => (
    {type: "TOGGLE_SIDENAV"}
)