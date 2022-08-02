
// How state of the application should change when a particular action occurs.

export const numberOfClicksReducer = (state = 0, action) => {
    const {type} = action; // Get type of action that occured

    // Iterate over the action and run the action
    switch(type) {
        case 'COUNTER_BUTTON_CLICKED':
            return state + action.payload.amount;
        default:
            return state;
    }
}

