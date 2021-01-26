import React from 'react'
import { Link, Switch, Route } from "react-router-dom"
import Home from "./Components/Home.js"
import Projects from "./Components/Projects.js"
import Resume from "./Components/Resume.js"


import './App.css';

function App() {
  return(
   <>
   <nav>
     <Link to ="/">Home</Link>
     <Link to="/Projects">Projects</Link>
     <Link to="/Resume">Resume</Link>
   </nav>

  <div>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/Projects">
        <Projects />
      </Route>
      <Route path="/Resume">
        <Resume />
      </Route>
    </Switch>
  </div>
   </>
  )
}

export default App;
