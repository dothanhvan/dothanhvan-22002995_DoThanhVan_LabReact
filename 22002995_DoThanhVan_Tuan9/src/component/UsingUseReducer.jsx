import React, { useReducer } from 'react';

// Khởi tạo state ban đầu
const initialState = { count: 0 };

// Reducer function
function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            return state;
    }
}

const UsingUseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>UseReducer</h1>
            <br />
            <h1>Count: {state.count}</h1>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
        </div>
    );
};

export default UsingUseReducer;