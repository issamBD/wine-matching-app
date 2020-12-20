import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
      *{
      padding : 0px;
      margin : 0px;
      box-sizing : border-box;
      font-family: 'Roboto', sans-serif;
      div {
            background-color : ${(props) =>
              props.mode
                ? props.mode === "wine"
                  ? "#EB183C"
                  : "#23B4D2"
                : "rgb(37, 0, 13)"};
      }
      }
`;

export default GlobalStyle;
