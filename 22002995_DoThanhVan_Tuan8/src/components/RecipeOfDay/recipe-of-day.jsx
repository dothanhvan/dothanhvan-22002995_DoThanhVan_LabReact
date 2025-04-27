import React from "react";
import "./recipe-of-day.css";

function RecipeOfTheDay() {
  return (
    <section className="recipe-of-the-day">
      <div className="recipe-card">
        <h3>Salad Caprese</h3>
        <p>
          Classic Italian Salad Caprese: ripe tomatoes, fresh mozzarella, herbs,
          olive oil, and balsamic vinegar.
        </p>
        <button>View now</button>
      </div>
    </section>
  );
}

export default RecipeOfTheDay;
