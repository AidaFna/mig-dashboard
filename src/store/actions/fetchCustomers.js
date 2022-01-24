import axios from "axios";

export const fetchCustomers = () => {
    const token = localStorage.getItem("token");
  const config = {
    headers: { Authorization: ` ${token}` },
  };
    return (dispatch) => {
        axios.get('https://mitramas-test.herokuapp.com/customers', config)
        .then(({data})=>{
            // console.log(data.data);
            dispatch(setCustomers(data.data))
        })
        .catch(err=>{
            console.log(err);
        
        })
    }
}

export const setCustomers = (payload) => {
    return{
        type: 'SET_CUSTOMERS', payload
    }
}