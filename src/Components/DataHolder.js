import React from "react";
//components
import Drink from "./Drink";
import Meal from "./Meal";
//styling
import { StyledDataHolder } from "../Styles";

const DataHolder = ({ mode, searched }) => {
  const renderContent = () => {
    if (mode !== "wine") {
      return (
        <div>
          <Drink keyword={searched} />
        </div>
      );
    } else {
      return (
        <div>
          <Meal keyword={searched} />
        </div>
      );
    }
  };

  return (
    <StyledDataHolder>
      <div>{renderContent()}</div>
    </StyledDataHolder>
  );
};

export default DataHolder;
