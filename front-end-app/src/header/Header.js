import React, { useState } from "react";
import cat from './cat.svg';
import fish from './fish.svg';
import './Header.css';

function Header() {
  const [catClick, setClick] = useState(false);

  const catClicked = () => {
    setClick(!catClick);
  };

  return (
    <div className="Header">
      <header className="Header-body">
        <a onClick={catClicked} className="Header-link">
          <img src={catClick ? fish : cat} className="Header-animal" alt="cat?" />
        </a>
        <p>
          Welcome to this {catClick ? "fishy" : "cat fact"} frontend test
        </p>
      </header>
    </div>)
}

export default Header;
