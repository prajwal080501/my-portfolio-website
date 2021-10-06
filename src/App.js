import './App.css';
import Home from "./components/Home/Home";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import Projects from "./components/Projects/Projects";
import Technologies from "./components/Technologies/Technologies";
import Accomplishments from "./components/Acomplishments/Acomplishments";
import { ThemeProvider } from 'styled-components';
import Theme from "./styles/theme";
import Hero from "./components/Hero/Hero";


function App() {
  return (
    
    <Theme>
      <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/hero">
            <Hero />
          </Route>
          <Route exact path="/technologies">
            <Technologies />
          </Route>
          <Route exact path="/accomplishments">
            <Accomplishments />
          </Route>
          </Switch>
        </div>
      </BrowserRouter>
      </Theme>
  );
}

export default App;
