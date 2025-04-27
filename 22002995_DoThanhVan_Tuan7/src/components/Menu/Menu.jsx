import "./Menu.css";
import logo from "../../assets/images/logo.png";
import project from "../../assets/images/project.png";
import teams from "../../assets/images/teams.png";
import integration from "../../assets/images/integration.png";
import messages from "../../assets/images/messages.png";
import analytics from "../../assets/images/analytics.png";
import dashboard from "../../assets/images/dashboard.png";
import updated from "../../assets/images/updated.png";
import MenuCard from "../MenuCard/MenuCard";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Menu() {
  const list = [
    "Dashboard",
    "Projects",
    "Teams",
    "Analytics",
    "Messages",
    "Integrations",
  ];

  const [activeItem, setActiveItem] = useState("Dashboard");
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname.replace("/", "");
    if (currentPath) {
      setActiveItem(currentPath);
    } else {
      setActiveItem("Dashboard");
    }
  }, [location.pathname]);

  return (
    <div className="menu-container">
      <div className="menu-title">
        <img src={logo}></img>
        <p>Logo</p>
      </div>
      <div className="menu-content">
        {list.map((item, index) => {
          const image = [
            dashboard,
            project,
            teams,
            analytics,
            messages,
            integration,
          ][index];
          return (
            <MenuCard
              key={index}
              image={image}
              name={item}
              isActive={item === activeItem}
              onClick={setActiveItem}
            ></MenuCard>
          );
        })}
      </div>
      <div className="update-announce">
        <img src={updated}></img>
      </div>
    </div>
  );
}
