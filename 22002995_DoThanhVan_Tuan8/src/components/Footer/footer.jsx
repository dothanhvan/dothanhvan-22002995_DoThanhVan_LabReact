import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="about-us">
        <h3>About Us</h3>
        <p>
          Welcome to our website, a wonderful place to explore and learn how to
          cook like a pro.
        </p>
        <input type="email" placeholder="Enter your email" />
        <button>Send</button>
      </div>
      <div>
        <div className="links">
          <h3>Learn More</h3>
          <ul>
            <li>Our Cooks</li>
            <li>See Our Features</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="shop">
          <h3>Shop</h3>
          <ul>
            <li>Gift Subscription</li>
            <li>Send Us Feedback</li>
          </ul>
        </div>
      </div>
      <div className="recipes">
        <h3>Recipes</h3>
        <ul>
          <li>What to Cook This Week</li>
          <li>Pasta</li>
          <li>Dinner</li>
          <li>Healthy</li>
          <li>Vetarian</li>
          <li>Vegan</li>
          <li>Christmas</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
