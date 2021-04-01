import React from "react";

export default function Projects(props) {
  const { javascript, css, html, react, gitHub, git, node /*mongoDb*/ } = props;
  
  return (

    <div id="projectCont">
      <h1>Projects</h1>
        <div className="icons">
          <h2 style={{color: "#f0db4f"}}><h5>Javascript</h5>{javascript}</h2>
          <h2 style={{color: "#61DBFB"}}><h5>React</h5>{react}</h2>
          <h2 style={{color: "#0098FF"}}><h5>CSS</h5> {css}</h2>
          <h2 style={{color: "#9CDAF1"}}><h5>Git</h5>{git}</h2>
          <h2 style={{color: "#F4CBB2"}}><h5>Github</h5>{gitHub}</h2>
          <h2 style={{color: "#68A063"}}><h5>Node</h5>{node}</h2>
        </div>
      <div className="scroll">
        <a href="https://memeitup.netlify.app/">
          <iframe src="https://memeitup.netlify.app/" title="Meme Gen"></iframe>
        </a>
        <a href="https://reviewthisrandommovie.netlify.app/">
          <iframe
            src="https://reviewthisrandommovie.netlify.app/"
            title="Random Movie Reviewer"
          ></iframe>
        </a>
        <hr className="hr"></hr>
        <div className="icons">
          <h2 style={{color: "#f0db4f"}}><h5>Javascript</h5>{javascript}</h2>
          <h2 style={{color: "#f06529"}}><h5>Html</h5>{html}</h2>
          <h2 style={{color: "#0098FF"}}><h5>CSS</h5>{css}</h2>
          <h2 style={{color: "#9CDAF1"}}><h5>Git</h5>{git}</h2>
          <h2 style={{color: "#F4CBB2"}}><h5>Github</h5>{gitHub}</h2>
        </div>
        <a href="https://mariopestcontrol.netlify.app/">
          <iframe
            src="https://mariopestcontrol.netlify.app/"
            title="Mario Pest Control"
          ></iframe>
        </a>
        <a href="https://vjstodolist.netlify.app/">
          <iframe
            src="https://vjstodolist.netlify.app/"
            title="Simple todo list"
          ></iframe>
        </a>
      </div>
    </div>
  );
}
