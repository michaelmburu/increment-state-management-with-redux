

// Any action that changes state of our entire application
// Counter button click action
export const counterButtonClicked = (amount) => ({
    type: 'COUNTER_BUTTON_CLICKED',
    payload: {amount} // How much we should increment the counter by
})