import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { feychCustomers } from './asyncActions/customers';
import { addCustomerAction, removeCustomerAction } from './store/customerReducer';
const App = () => {
  const dispatch = useDispatch()

  const cash = useSelector(state => state.cash.cash)
  console.log(cash);

  const customers = useSelector(state => state.customers.customers)

  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash })
  }

  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash })
  }


  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    }
    dispatch(addCustomerAction(customer))
  }


  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer))
  }


  return (
    <div>
      <h1>{cash}</h1>
      <button onClick={() => addCash(Number(prompt()))}>+</button>
      <button onClick={() => getCash(Number(prompt()))}>-</button>
      <button onClick={() => addCustomer(prompt())}>ДОБАВИТЬ КЛИЕНТА</button>
      <button onClick={() => getCash(Number(prompt()))}>УДАЛИТЬ КЛИЕНТА</button>
      <button onClick={() => dispatch(feychCustomers())}>Получить клиентов из базы</button>



      {customers.length > 0 ?
        <div>
          {customers.map(customer =>
            <div onClick={() => removeCustomer(customer)}>{customer.name}</div>
          )}
        </div>
        : <div>No data</div>
      }
    </div>
  );
};

export default App;