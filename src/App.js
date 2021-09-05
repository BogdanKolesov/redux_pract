import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
const App = () => {
  const dispatch = useDispatch()

  const cash = useSelector(state => state.cash)
  console.log(cash);

  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash })
  }

  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash })
  }

  return (
    <div>
      <h1>{cash}</h1>
      <button onClick={() => addCash(Number(prompt()))}>+</button>
      <button onClick={() => getCash(Number(prompt()))}>-</button>
    </div>
  );
};

export default App;