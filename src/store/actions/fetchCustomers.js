import axios from "axios";

export const fetchData = () => {
    return (dispatch) => {
        axios.get('https://mitramas-test.herokuapp.com/customers')
        .then((data)=>{
            // console.log(data.data);
            dispatch(setData(data.data.results))
        })
        .catch(err=>{
            console.log(err.message);
        
        })
    }
}

export const setData = (payload) => {
    return{
        type: 'SET_POST', payload
    }
}