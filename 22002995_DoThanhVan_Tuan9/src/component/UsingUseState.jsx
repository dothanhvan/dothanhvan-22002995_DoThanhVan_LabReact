import React, { useState } from 'react';


const UsingUseState = () => {
    const [count, setCount] = useState(0)

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>UseState</h1>
            <br />
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(prev => prev - 1)}>-</button>
            <button onClick={() => setCount(prev => prev + 1)}>+</button>
        </div>
    );
};

export default UsingUseState;