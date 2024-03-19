
class SideNavState {
    isClosed: boolean = true;
    width: number = 50;
    buttonText: string = 'open';
}

let initialState = new SideNavState()

export let SideNavReducer = (state = initialState, action) => {

    let copy = {...state}

     switch (action.type) {
         case "TOGGLE_SIDENAV":
             if (copy.isClosed) {
                 copy.isClosed = false;
                 copy.width = 260;
                 copy.buttonText = 'close'
                 return copy
             }
             else {
                 copy.isClosed = true;
                 copy.width = 50;
                 copy.buttonText = 'open'
                 return copy
             }
         // state.isClosed = !state.isClosed;
             // state.width = state.isClosed ? 50 : 260
         default: return state;
     }
}

export const SideNavToggleAction = () => (
    {type: "TOGGLE_SIDENAV"}
)