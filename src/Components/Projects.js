import React from "react";

export default function Projects(props) {
  const { javascript, css, html, react, gitHub, git, node, /*mongoDb*/ } = props;

  return (
    <div className="projectCont">
      <h1>Projects</h1>
      <h2>
        Designed using {javascript}, {react}, {css}, {git}, {gitHub}, {node}
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
        <h2>
          Designed using {javascript}, {html}, {css}, {gitHub}
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
  );
}
