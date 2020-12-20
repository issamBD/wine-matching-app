import React, { useEffect, useState } from "react";
import axios from "axios";
import uuid from "react-uuid";
//styling
import { StyledMeal } from "../Styles";
//animation
import { PageAnimation } from "../Animations";

const Meal = ({ keyword }) => {
  //API
  //State
  const [data, setData] = useState(null);

  useEffect(() => {
    if (keyword) {
      let url = `https://api.spoonacular.com/food/wine/dishes?wine=${keyword}&apiKey=${process.env.REACT_APP_API}`;
      axios
        .get(url)
        .then((res) => {
          setData(res.data);
        })
        .catch(function (error) {
          setData(null);
          console.log(error.toJSON());
        });
    }
  }, [keyword]);

  const renderContent = () => {
    if (data) {
      return (
        <div>
          <ul>
            {data.pairings.map((meal) => (
              <li key={uuid()}>{meal}</li>
            ))}
          </ul>
          <div id="desc">
            <p>{data.text}</p>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div id="desc">
            <p>No matching found</p>
          </div>
        </div>
      );
    }
  };

  return (
    <StyledMeal variants={PageAnimation} initial="hidden" animate="show">
      {renderContent()}
    </StyledMeal>
  );
};

export default Meal;
