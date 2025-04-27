import React from "react";
import "./recipe-video.css";
import meal9 from "../../assets/meal9.png";
import meal10 from "../../assets/meal10.png";
import meal11 from "../../assets/meal11.png";
import meal12 from "../../assets/meal12.png";
import wish from "../../assets/wish.png";

function RecipeVideos() {
  const videos = [
    {
      title: "Salad with cabbage and shrimp",
      time: "32 minutes",
      image: meal9,
    },
    {
      title: "Salad of cove beans",
      time: "20 minutes",
      image: meal10,
    },
    {
      title: "Sunny-side up fried egg",
      time: "16 minutes",
      image: meal11,
    },
    {
      title: "Lotus delight salad",
      time: "20 minutes",
      image: meal12,
    },
  ];

  return (
    <section className="recipe-videos">
      <h2>Recipes With Videos</h2>
      <p>Cooking Up Culinary Creations with Step-by-Step Videos</p>
      <div className="video-list">
        {videos.map((video, index) => (
          <div key={index} className="video-item">
            <img src={video.image} alt={video.title} />
            <div className="header-wish">
              <h3>{video.title}</h3>
              <img src={wish} alt="wish" className="wish-icon" />
            </div>
            <p>{video.time}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RecipeVideos;
