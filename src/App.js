import "./App.css";
import Home from "./components/Home/Home";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import Projects from "./components/Projects/Projects";
import Technologies from "./components/Technologies/Technologies";
import { ThemeProvider } from "styled-components";
import Theme from "./styles/theme";
import Hero from "./components/Hero/Hero";
import Accomplishment from "./components/Acomplishments/Accomplishments";
import { AnimatePresence } from "framer-motion";
import Whatsapp from "./components/Whatsapp/Whatsapp";
import audio from "./audio/gta.mp3";
import ReactAudioPlayer from "react-audio-player";

function App() {

  
  return (
    <Theme>
      <Whatsapp />
      <BrowserRouter>
        <div className="App">
          <AnimatePresence>
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
                <Accomplishment />
              </Route>
            </Switch>
          </AnimatePresence>
          <ReactAudioPlayer id="audio" style={{ display: 'none'}} src={audio} autoPlay controls />{" "}
        </div>
      </BrowserRouter>
    </Theme>
  );

  
}

export default App;
