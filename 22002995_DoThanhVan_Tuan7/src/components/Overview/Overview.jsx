import "./Overview.css";
import overview from "../../assets/images/overview.png";
import { useEffect, useState } from "react";
import StatisticCard from "../StatisticCard/StatisticCard";
import cart from "../../assets/images/cart.png";
import money from "../../assets/images/money.png";
import avatar from "../../assets/images/avatar.png";

export default function Overview() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://67deba96471aaaa742856ccc.mockapi.io/data/v1/Overview")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2 style={{ paddingLeft: "10px" }}>Loading overview ...</h2>;
  }

  return (
    <div className="overview-container">
      <div className="title">
        <img src={overview}></img>
        <span>Overview</span>
      </div>
      <div className="card-loading">
        {items.map((item, index) => {
          const bgClass = ["pink-bg", "blue-bg", "green-bg"][index % 3];
          const imageButton = [cart, money, avatar][index % 3];
          return (
            <StatisticCard
              key={index}
              item={item}
              bgClass={bgClass}
              imageButton={imageButton}
            ></StatisticCard>
          );
        })}
      </div>
    </div>
  );
}
