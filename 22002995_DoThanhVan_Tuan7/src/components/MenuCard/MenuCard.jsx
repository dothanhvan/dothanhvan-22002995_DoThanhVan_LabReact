import "./MenuCard.css";
import { useNavigate } from "react-router-dom";

function MenuCard({ image, name, isActive, onClick }) {
  const navigate = useNavigate();

  const handleClickActive = () => {
    onClick(name);
    navigate(`/${name}`);
  };

  console.log();

  return (
    <div
      className={`menu-card-container ${isActive ? "active" : ""}`}
      onClick={handleClickActive}
    >
      <img src={image}></img>
      <span>{name}</span>
    </div>
  );
}

export default MenuCard;
