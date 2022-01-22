const initialState = []

const postCustomers = (state = initialState, action) => {
    if(action.type === 'SET_POST'){
        return action.payload
    }

    return state
}

export default postCustomers;