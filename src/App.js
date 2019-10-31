import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { increment , decrement, login, logout} from './actions';

function App() {
    const counter = useSelector(state => state.counter);
    const isLoggedIn = useSelector(state => state.isLogged);
    const dispatch = useDispatch();
  return (
    <div className="App">
        <h1>Counter {counter}</h1>
        <button onClick={() => dispatch(increment(5))}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>


        { !isLoggedIn && <button onClick={() => dispatch(login())}>Login</button> }
        { isLoggedIn && <button onClick={() => dispatch(logout())}>Logout</button> }
        { isLoggedIn && <h3>You are logged In</h3> }
    </div>
  );
}

export default App;
