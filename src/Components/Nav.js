import React, { useState } from "react";
import { Link } from "react-router-dom";
//Styling
import { StyledNav } from "../Styles";
//Image
import more from "../Images/more.png";
//constants
import { WINE, MEAL } from "./Constants";

const Nav = ({ setMode }) => {
  //State
  const [toggeled, setToggeled] = useState(false);

  //handlers
  const mealClickHandler = () => {
    setMode(WINE);
    setToggeled(!toggeled);
  };

  const wineClickHandler = () => {
    setMode(MEAL);
    setToggeled(!toggeled);
  };

  const clickHandler = () => {
    setToggeled(!toggeled);
  };

  const logoClickHandler = () => {
    setToggeled(false);
    setMode(null);
  };

  return (
    <StyledNav toggeled={toggeled}>
      <nav>
        <Link onClick={logoClickHandler} to="/">
          <h1>WxL</h1>
        </Link>
        <ul>
          <Link onClick={logoClickHandler} to="/">
            <li>Home</li>
          </Link>
          <Link onClick={mealClickHandler} to="/search">
            <li>Pair My Wine</li>
          </Link>
          <Link onClick={wineClickHandler} to="/search">
            <li>Pair My Meal</li>
          </Link>
        </ul>
        <img onClick={clickHandler} src={more} alt="" id="toggle" />
      </nav>
    </StyledNav>
  );
};

export default Nav;
