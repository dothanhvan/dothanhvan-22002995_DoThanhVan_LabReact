import React, {useState} from 'react'


function BuyItem() {

    const [item, setItem] = useState([])
    const [input, setInput] = useState ('')

    const handleOnchange = (e) => {
        setInput (e.target.value) 
    }

    const handleBuyItem = () => {
        setItem([...item, input])
        setInput('')
    }
       
    return (
        <>
            <div style={{backgroundColor : '#646cff', width: "500px", height: "250px"}}>
                <h1>Bài 4</h1>
                <input type="text"  placeholder='Nhập tên sản phẩm....' onChange={handleOnchange} value={input}/>
                <button onClick={handleBuyItem}>Mua</button>
                <p>Giỏ hàng: {item}</p>
            </div>
        
        </>
    )
}

export default BuyItem