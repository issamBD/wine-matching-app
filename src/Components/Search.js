import React, { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
//Styling
import { StyledSerach } from "../Styles";
//Animation
import { PageAnimation } from "../Animations";

const Search = ({ mode, searched, setSearched }) => {
  //Ref
  const inputRef = useRef();

  //Url Monitoring
  const history = useHistory();
  history.listen((location, action) => {
    let url = `${location.pathname}${location.search}${location.hash}`;
    if (url === "/search" || url === "/search/") {
      setSearched(null);
    }
  });

  //Effects
  useEffect(() => {
    if (!mode) {
      history.push("/");
    }
  });

  //Handlers

  const clickHandler = () => {
    if (inputRef.current.value) {
      let input = inputRef.current.value;
      setSearched(input.trim());
      history.push("/search/data");
      inputRef.current.value = "";
    }
  };

  return (
    <StyledSerach
      mode={mode}
      searched={searched}
      variants={PageAnimation}
      initial="hidden"
      animate="show"
    >
      <input
        ref={inputRef}
        type="text"
        placeholder={`Enter the name of your ${mode}`}
      />
      <button onClick={clickHandler}>Search</button>
    </StyledSerach>
  );
};

export default Search;
