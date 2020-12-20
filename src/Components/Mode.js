import React, { useState } from "react";
import { Link } from "react-router-dom";
//Images
import meal from "../Images/meal.gif";
import wine from "../Images/wine.gif";
import mealStatic from "../Images/meal.png";
import wineStatic from "../Images/wine.png";
//Styling
import { MainMenue, MealChoice, WineChoice, ImgChoice } from "../Styles";
//Animation
import { PageAnimation } from "../Animations";
//constants
import { WINE, MEAL } from "./Constants";

const Mode = ({ setMode }) => {
  //States
  const [wineHovered, setWineHovered] = useState(false);
  const [mealHovered, setMealHovered] = useState(false);
  //handlers
  const wineModeHandler = () => {
    setMode(MEAL);
    setWineHovered(false);
  };

  const mealModeHandler = () => {
    setMode(WINE);
    setMealHovered(false);
  };

  return (
    <MainMenue variants={PageAnimation} initial="hidden" animate="show">
      <Link to="/search">
        <WineChoice
          onMouseEnter={() => setWineHovered(true)}
          onMouseLeave={() => setWineHovered(false)}
          onClick={wineModeHandler}
        >
          <ImgChoice
            src={wineHovered ? wine : wineStatic}
            alt="Which Wine Suits My Meal"
          />
          <h1>Pair Your Meal With a Wine</h1>
          <p>
            You cooked a meal and you don't which wine to get? <br />
            we got you covered
          </p>
        </WineChoice>
        <MealChoice
          onMouseEnter={() => setMealHovered(true)}
          onMouseLeave={() => setMealHovered(false)}
          onClick={mealModeHandler}
        >
          <ImgChoice
            onMouseEnter={() => setMealHovered(true)}
            onMouseLeave={() => setMealHovered(false)}
            onClick={mealModeHandler}
            src={mealHovered ? meal : mealStatic}
            alt="Which Meal Suits My Wine"
          />
          <h1>Pair Your Wine With a Meal</h1>
          <p>
            You have wine and you don't which meal to cook? <br />
            we got you covered
          </p>
        </MealChoice>
      </Link>
    </MainMenue>
  );
};

export default Mode;
