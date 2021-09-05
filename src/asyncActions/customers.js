import { addManyCustomersAction } from "../store/customerReducer"

export const feychCustomers = () => {
    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => dispatch(addManyCustomersAction(json)))
    }
}