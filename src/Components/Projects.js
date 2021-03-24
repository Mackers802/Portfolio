import React from "react";

export default function Projects(props) {
  const { javascript, css, html, react, gitHub, git, node, theme, theme2 /*mongoDb*/ } = props;
console.log("theme project", theme2)
  return (
    <div className={theme}>
    <div className="projectCont">
      <h1 style={{color: {theme2}}}>Projects</h1>
      <h2 style={{color: {theme2}}}>
        Designed using 
        <br></br>
        {javascript}, {react}, {css}, {git}, {gitHub}, {node}
      </h2>
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
        <br></br>
        <hr></hr>
        <h2 style={{color: {theme2}}}>
          Designed using 
          <br></br>
          {javascript}, {html}, {css}, {gitHub}
        </h2>
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
    </div>
  );
}
