const initialState = []

const postCustomers = (state = initialState, action) => {
    if(action.type === 'SET_CUSTOMERS'){
        return action.payload
    }

    return state
}

export default postCustomers;