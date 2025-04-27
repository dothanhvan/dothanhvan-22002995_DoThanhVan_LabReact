import React from "react";
import "./summer-recipe.css";
import meal1 from "../../assets/meal1.png";
import meal2 from "../../assets/meal2.png";
import meal3 from "../../assets/meal3.png";
import meal4 from "../../assets/meal4.png";
import wish from "../../assets/wish.png";

function SummerRecipes() {
  const recipes = [
    { title: "Italian-style tomato", time: "20 minutes", image: meal1 },
    {
      title: "Spaghetti with vegetables",
      time: "25 minutes",
      image: meal2,
    },
    { title: "Lotus delight salad", time: "30 minutes", image: meal3 },
    { title: "Snack cakes", time: "21 minutes", image: meal4 },
  ];

  return (
    <section className="summer-recipes">
      <h2>This Summer Recipes</h2>
      <p>We have all your Independence Day sweets covered.</p>
      <div className="recipe-list">
        {recipes.map((recipe, index) => (
          <div key={index} className="recipe-item">
            <img src={recipe.image} alt={recipe.title} />
            <div className="header-wish">
              <h3>{recipe.title}</h3>
              <img src={wish} alt="wish" className="wish-icon" />
            </div>
            <p>{recipe.time}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SummerRecipes;
