import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
// import About from "./pages/About";
import { createGlobalStyle } from "styled-components";
import Projects from "./pages/Projects";

const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  border: 0;
  max-width: 100vw;
  font-family: 'Poppins', sans-serif;
  /* overflow-x: hidden; */
  /* text-decoration: none; */
  };
`

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/projetos" component={ Projects } />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
