import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/counterSlide';

const UsingRedux = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div style={{ textAlign: 'center', marginTop: 50 }}>
            <h1>Redux</h1>
            <br />
            <h1>Count: {count}</h1>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(increment())}>+</button>
        </div>
    );
};

export default UsingRedux;