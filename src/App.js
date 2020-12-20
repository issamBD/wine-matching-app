import { useState } from "react";
import { Switch, Route } from "react-router-dom";
//Styling
import GlobalStyle from "./Components/GlobalStyle";
//Components
import Nav from "./Components/Nav";
import Mode from "./Components/Mode";
import DataHolder from "./Components/DataHolder";
import Search from "./Components/Search";

function App() {
  //States
  const [mode, setMode] = useState(null);
  const [searched, setSearched] = useState(null);

  return (
    <div>
      <GlobalStyle mode={mode} />
      <Nav setMode={setMode} />
      <Switch>
        <Route path="/" exact>
          <Mode setMode={setMode} />
        </Route>
      </Switch>
      <Route path="/search">
        <Search mode={mode} searched={searched} setSearched={setSearched} />
      </Route>

      <Route path="/search/data">
        <DataHolder mode={mode} searched={searched} />
      </Route>
    </div>
  );
}

export default App;
