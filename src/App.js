import React, { useState } from "react";
import About from "./Components/About.js";
import Projects from "./Components/Projects.js";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCss3, faGit, faGithub, faHtml5, faJs, faLinkedin, faMdb, faNode, faReact } from "@fortawesome/free-brands-svg-icons"
import { faFileDownload, faUser, faAddressCard, faBriefcase } from "@fortawesome/free-solid-svg-icons";

function App(props) {

  const liIcon = <FontAwesomeIcon icon={faLinkedin} />
  const gitHub = <FontAwesomeIcon icon={faGithub} />
  const javascript = <FontAwesomeIcon icon={faJs}/>
  const css = <FontAwesomeIcon icon={faCss3}/>
  const html = <FontAwesomeIcon icon={faHtml5}/>
  const react = <FontAwesomeIcon icon={faReact} />
  const git = <FontAwesomeIcon icon={faGit}/>
  const node = <FontAwesomeIcon icon={faNode}/>
  const mongoDb = <FontAwesomeIcon icon={faMdb}/>
  const person = <FontAwesomeIcon icon={faUser}/>
  const resume = <FontAwesomeIcon icon={faFileDownload}/>
  const contact = <FontAwesomeIcon icon={faAddressCard}/>
  const briefcase = <FontAwesomeIcon icon={faBriefcase}/>

  const initState = "Light"
  const [theme, setTheme] = useState(initState)
  const [theme2, setTheme2 ] = useState()

function toggleDarkLight(e){
  if(theme === "Light"){
    setTheme("Dark")
    setTheme2("Light")
  } else if (theme === "Dark"){
    setTheme("Light")
    setTheme2("Dark")
  } else {
    setTheme(e.target.value)
  }
} 

function changeColor(e){
  if(theme === "Light"){
    setTheme("Light")
    setTheme2(e.target.value)
  } else if (theme === "Dark"){
    setTheme("Dark")
    setTheme2(e.target.value)
  }
}

  return (
    <div className={theme}>
      <div className="appCont">
          <About
            briefcase={briefcase} 
            contact={contact} 
            resume={resume} 
            person={person} 
            liIcon={liIcon} 
            gitHub={gitHub} 
            javascript={javascript} 
            css={css} html={html} 
            react={react} 
            git={git} 
            node={node} 
            mongoDb={mongoDb}
            toggleDarkLight={toggleDarkLight}
            changeColor={changeColor}
            theme={theme}
            theme2={theme2}
          />
          <Projects 
            gitHub={gitHub} 
            javascript={javascript} 
            css={css} 
            html={html} 
            react={react} 
            git={git} 
            node={node} 
            mongoDb={mongoDb}
          />
      </div>
    </div>
  );
}

export default App;
