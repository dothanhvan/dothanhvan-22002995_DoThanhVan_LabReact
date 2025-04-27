import { useState } from "react";
import "./Modal.css";

function Modal({ selected, handleCloseModal, fetchData, isCreating }) {
  const [formData, setFormData] = useState({ ...selected });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try {
      const url = isCreating
        ? "https://67deba96471aaaa742856ccc.mockapi.io/data/v1/Customers"
        : "`https://67deba96471aaaa742856ccc.mockapi.io/data/v1/Customers/${formData.id}`";

      const methods = isCreating ? "POST" : "PUT";

      const response = await fetch(url, {
        method: methods,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log(response);

      if (response.ok) {
        alert(isCreating ? "Thêm thành công" : "Cập nhật thành công!");
        handleCloseModal();
        fetchData();
      } else {
        alert("Cập nhật không thành công!");
      }
    } catch (err) {
      console.error("Error: ", err);
      alert("Xảy ra lỗi");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <span className="modal-title">
          {isCreating ? "Thêm mới khách hàng" : "Chi tiết đơn hàng"}
        </span>
        <div className="modal-content">
          <div className="text-view">
            <strong>Customer name: </strong>
            <strong>Company: </strong>
            <strong>Order Value: </strong>
            <strong>Order Date: </strong>
            <strong>Status: </strong>
          </div>
          <div className="input-modal">
            <input
              name="name"
              value={formData.name}
              onChange={(e) => handleChange(e)}
              type="text"
            />
            <input
              name="company"
              value={formData.company}
              onChange={handleChange}
              type="text"
            />
            <input
              name="orderValue"
              value={formData.orderValue}
              onChange={handleChange}
              type="text"
            />
            <input
              name="orderDate"
              value={formData.orderDate}
              onChange={handleChange}
              type="text"
            />
            <input
              name="status"
              value={formData.status}
              onChange={handleChange}
              type="text"
            />
          </div>
        </div>
        <div className="modal-button-group">
          <button onClick={handleSave}>Lưu</button>
          <button onClick={handleCloseModal}>Đóng</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
