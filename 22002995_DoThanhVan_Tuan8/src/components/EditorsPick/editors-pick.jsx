import React from "react";
import "./editors-pick.css";
import meal5 from "../../assets/meal5.png";
import meal6 from "../../assets/meal6.png";
import meal7 from "../../assets/meal7.png";
import meal8 from "../../assets/meal8.png";
import ava1 from "../../assets/ava1.png";
import ava2 from "../../assets/ava2.png";
import ava3 from "../../assets/ava3.png";
import ava4 from "../../assets/ava4.png";
import wish from "../../assets/wish.png";

function EditorsPick() {
  const picks = [
    {
      title: "Stuffed sticky rice ball",
      time: "34 minutes",
      image: meal5,
      avatar: ava1,
      content:
        "Stuffed sticky rice balls: A delightful Asian treat with chewy, glutinous rice and a flavorful surprise filling...",
    },
    {
      title: "Strawberry smoothie",
      time: "40 minutes",
      image: meal6,
      avatar: ava2,
      content:
        "Savor the refreshing delight of a strawberry smoothie. Made with ripe strawberries, this creamy blend offers...",
    },
    {
      title: "Latte Art",
      time: "19 minutes",
      image: meal7,
      avatar: ava3,
      content:
        "Latte art is the skillful craft of creating captivating designs on the surface of a latte...",
    },
    {
      title: "Butter fried noodles",
      time: "16 minutes",
      image: meal8,
      avatar: ava4,
      content:
        "Butter fried noodles: Savory noodles cooked in butter for a delicious and satisfying meal...",
    },
  ];

  return (
    <section className="editors-pick">
      <h2>Editor's Pick</h2>
      <p>
        Curated Culinary Delights: Handpicked Favorites by Our Expert Editors!
      </p>
      <div className="pick-list">
        {picks.map((pick, index) => (
          <div key={index} className="pick-item">
            <img src={pick.image} alt={pick.title} />
            <div className="card-content">
              <div className="header-wish">
                <h6>{pick.title}</h6>
                <img src={wish} alt="wish" className="wish-icon" />
              </div>
              <p>{pick.time}</p>
              <img
                src={pick.avatar}
                alt={pick.avatar}
                className="img-avatar"
              ></img>
              <p>{pick.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default EditorsPick;
