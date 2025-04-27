import React, {useState} from 'react'

function Counter() {
  
    const [counter, setCounter] = useState(0)
    
    const handleIncrease = () => {
        setCounter(counter + 1)
    }

    const handleDecrease = () => {
        setCounter(counter - 1)
    }

    

    return (
      <>
        <div style={{backgroundColor: 'pink', width : "500px", height: "250px"}}>
            <h1>Bài 1</h1>
            <h1>{counter}</h1>
            <button onClick={handleIncrease}>Tăng</button>
            <button onClick={handleDecrease}>Giảm</button>
            <button onClick={()=>setCounter(0)}>Reset</button>
           
        </div>
        
       
      </>
    )
  }



export default Counter