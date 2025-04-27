import React from "react";
import "./Header.css";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Cheffify Logo" />
        Cheffify
      </div>
      <nav>
        <ul>
          <li>What to cook</li>
          <li>Recipes</li>
          <li>Ingredients</li>
          <li>Occasions</li>
          <li>About Us</li>
        </ul>
      </nav>
      <div className="auth-buttons">
        <button className="login">Login</button>
        <button className="subscribe">Subscribe</button>
      </div>
    </header>
  );
}

export default Header;
