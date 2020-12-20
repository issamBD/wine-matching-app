import React, { useEffect, useState } from "react";
import axios from "axios";
import uuid from "react-uuid";
//styling
import { StyledDrink } from "../Styles";
//animation
import { PageAnimation } from "../Animations";

const Drink = ({ keyword }) => {
  //State
  const [data, setData] = useState(null);

  useEffect(() => {
    if (keyword) {
      let url = `https://api.spoonacular.com/food/wine/pairing?food=${keyword}&apiKey=${process.env.REACT_APP_API}`;
      axios
        .get(url)
        .then((res) => {
          setData(res.data);
        })
        .catch(function (error) {
          console.log(error.toJSON());
        });
    }
  }, [keyword]);

  const renderContent = () => {
    if (data) {
      if (data.status === undefined) {
        return (
          <div id="drinks">
            <ul>
              {data.pairedWines.map((wine) => (
                <li key={uuid()}>{wine}</li>
              ))}
            </ul>
            <div id="desc">
              <p>{data.pairingText}</p>
            </div>
          </div>
        );
      } else if (data.message !== undefined) {
        return (
          <div id="drinks">
            <div id="desc">
              <p>No matching found</p>
            </div>
          </div>
        );
      }
    }
  };

  return (
    <StyledDrink variants={PageAnimation} initial="hidden" animate="show">
      {renderContent()}
    </StyledDrink>
  );
};

export default Drink;
