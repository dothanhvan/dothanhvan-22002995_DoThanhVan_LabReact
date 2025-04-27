import React,{ useState } from "react";


function Hidden() {
    const [hidden, setHidden] = useState(true)

    const handleChangeReadMore = () => {
        if(hidden === true){
            setHidden(false)
            document.getElementsByTagName('p')[0].innerText = "Thu gọn"
        }else{
            setHidden(true)
            document.getElementsByTagName('p')[0].innerText = "Đọc thêm"
        }
       
    }

    return (
        <>
            <div style={{backgroundColor: '#ffff5d', width : "500px", height : "250px"}}>
                <h1>Bài 3</h1>
                <span>Sau khi Điện Kremlin công bố thành phần đoàn Liên bang Nga </span>
                <span hidden = {hidden} >chuẩn bị tới Saudi Arabia đàm phán về kết thúc xung đột Ukraine,
                    dư luận bất ngờ khi không thấy sự góp mặt của các quan chức ngoại
                    giao và quốc phòng.</span>
                <p onClick={handleChangeReadMore} style={{backgroundColor:"#918686", width: "20%", margin: "0px auto"}}>Đọc thêm...</p>
            </div>
        </>
    )
}

export default Hidden