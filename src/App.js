import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import About from "./Components/About.js";
import Projects from "./Components/Projects.js";
import Contact from "./Components/Contact.js";

import "./App.css";

function App() {
  
  return (
    <>
    <div className="navBarCont">
      <nav className="navBar">
        <h1>
          <Link to="/">About</Link>
        </h1>
        <h1>
          <Link to="/Projects">Projects</Link>
        </h1>
        <h1>
        <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://docs.google.com/document/d/1Ej6zhUSUkv4Vc5ZdxVXM24pKeMST10ceIF4eVpLLIIA/edit"
          >
            Resume
          </a>
        </h1>
        <h1>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Mackers802"
          >
            GitHub
          </a>
        </h1>
        <h1>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/mackyandow/"
          >
            LinkedIn
          </a>
        </h1>
      </nav>
    </div>

      <div>
      <div className="components">
        <Switch>
          <Route exact path="/">
            <About />
          </Route>
          <Route path="/Projects">
            <Projects />
          </Route>
        </Switch>
      </div>
      </div>
      <br></br>
      <br></br>
      <Contact />
    </>
  );
}

export default App;
