import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

export const StyledSerach = styled(motion.div)`
  width: 100%;
  height: ${(props) => (!props.searched ? "93vh" : "20vh")};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.mode === "wine" ? "#EB183C" : "#23B4D2"};
  input {
    width: 50%;
    margin-right: 10px;
    padding: 15px 10px;
    font-size: 20px;
    outline: none;
    border-radius: 5px;
    border: none;
  }
  button {
    width: 150px;
    padding: 15px 30px;
    color: white;
    background-color: white;
    color: #23b4d2;
    font-weight: 700;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 20px;
    text-align: center;
    &:hover {
    }
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    font-size: 20px;
    box-sizing: border-box;
    input {
      width: 90%;
      padding: 10px;
      margin: 0;
    }
    button {
      margin-top: 20px;
      width: 90%;
      padding: 10px;
    }
  }
`;

export const StyledDrink = styled(motion.div)`
  background-color: #23b4d2;
  width: 100%;
  min-height: 80vh;
  color: white;
  div {
    width: calc(50% + 180px);
    margin: 0 auto 20px auto;
    background-color: transparent;
  }
  li {
    list-style: none;
    font-weight: 700;
    font-size: 20px;
    background-color: #eb183c;
    padding: 10px;
    color: white;
    margin: 0 10px 30px 0;
    border-radius: 5px;
    display: inline-block;
  }

  p {
    font-size: 20px;
    text-align: left;
    line-height: 1.5em;
    color: black;
  }

  #desc {
    width: 100%;
    height: auto;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 7px 4px 8px black;
    box-shadow: 7px 4px 8px black;
    background-color: none;
  }
`;

export const StyledMeal = styled(StyledDrink, motion.div)`
  background-color: #eb183c;

  li {
    background-color: #007b94;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(180deg);
  }
`;

const swipeIn = keyframes`
  from {
    left : -100vh;
  }

  to {
    left: 0;
  }
`;

export const StyledNav = styled.div`
  width: 100%;
  height: 7vh;
  display: flex;
  justify-content: center;
  color: white;
  background-color: rgb(37, 0, 13);

  #toggle {
    animation: ${(props) => (props.toggeled ? rotate : "normal")} 0.3s linear;
    display: none;
    height: 60%;
    width: auto;
    cursor: pointer;
  }
  h1 {
    cursor: pointer;
  }

  nav {
    width: calc(50% + 180px);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ul {
    display: flex;
    justify-content: space-between;
    width: 50%;
  }

  li {
    list-style: none;
    font-weight: 700;
    font-size: 15px;
  }

  a {
    color: white;
    text-decoration: none;
  }
  @media (max-width: 1000px) {
    #toggle {
      display: inline-block;
    }
    ul {
      animation: ${(props) => (props.toggeled ? swipeIn : "normal")} 0.5s linear;
      display: ${(props) => (props.toggeled ? "flex" : "none")};
      flex-direction: column;
      width: 100%;
      padding: 0 10%;
      position: absolute;
      top: 7vh;
      left: 0;
      background-color: rgb(37, 0, 13);
      height: 93vh;
      justify-content: center;
      gap: 30px;
    }
    nav {
      width: 90%;
    }
  }
`;

export const StyledDataHolder = styled.div`
  width: 100%;
  min-height: 73vh;
`;

export const ImgChoice = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  @media (max-width: 1000px) {
    width: 150px;
    height: 150px;
  }
`;

export const MainMenue = styled(motion.div)`
  width: 100%;
  height: 93vh;
  h2 {
    font-size: 44px;
  }
  h1,
  p {
    color: white;
    text-align: center;
    padding: 10px 0;
  }
  p {
    font-weight: 700;
  }
  @media (max-width: 1000px) {
    h1 {
      font-size: 30px;
    }
    p {
      font-size: 0.8em;
    }
  }
`;

export const WineChoice = styled.div`
  width: 50%;
  height: 100%;
  float: left;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #23b4d2;
  cursor: pointer;
  @media (max-width: 1000px) {
    width: 100%;
    height: 50%;
  }
`;

export const MealChoice = styled(WineChoice)`
  float: right;
  background-color: #eb183c;
  cursor: pointer;
`;
