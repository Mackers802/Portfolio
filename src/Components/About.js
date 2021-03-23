import React from "react";

export default function About(props) {
  const {contact, person, liIcon, gitHub, resume,
    // briefcase, javascript, css, html, react, es6, git, node, mongoDb, axios, express, 
    changeColor, toggleDarkLight
  } = props

  return (
      <div className="aboutCont">
        <h1>MacKenzie Yandow</h1>
      <div className="headshot">
        <img src="./images/portfolio-headshot.jpg" alt="headshot" width="100" height="100"></img>
      </div>
        <h2>{person} About Me</h2>
          <p>
            I am a Full-Stack Developer whos aim is to keep
            website developement simplistic, concise and to the point. I belive
            that a website is more powerful when it is simple and easy to
            navigate. 
            {/* Hello,
            My name is MacKenzie I am a Full-Stack Developer whos aim is to keep
            website developement simplistic, concise and to the point. I belive
            that a website is more powerful when it is simple and easy to
            navigate. I am excited to continue creating in the technical relm
            and I look forward to creating and colaborating projects with
            likeminded individuals.
            I am originaly from the East Coast and have beome a bit of
            a West Coast Nomad. I currently live in Las Vegas, Nevada with my
            wife and two Dogs! */}
          </p>
        <div className="navItems">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/mackyandow/"
          >
           <h1>{liIcon} Linkedin</h1>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://docs.google.com/document/d/1Ej6zhUSUkv4Vc5ZdxVXM24pKeMST10ceIF4eVpLLIIA/edit"
          ><h1>{resume} Resume</h1></a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Mackers802"
          >
            <h1>{gitHub} Github</h1>
          </a>
          {/* <h1>{briefcase} Projects</h1> */}
          <h1>{contact} Contact</h1>
          <label className="switch">
            <input type="checkbox" onClick={toggleDarkLight} />
          <span className="slider round"></span>
          </label>

          {/* <div className="themeToggle" onClick={changeColor} > */}
            {/* <button onClick={changeColor} value="White" style={{backgroundColor: "White"}}>White</button> */}
            {/* <button onClick={changeColor} value="Dark" style={{backgroundColor: "Black", color: "white"}}>Black</button> */}
          {/* </div> */}
          <div className="colorChoice" onClick={changeColor}>
            <button className="colorButton" value="Red" style={{backgroundColor: "Red"}}></button>
            <button className="colorButton" value="Blue" style={{backgroundColor: "Blue"}}></button>
            <button className="colorButton" value="Green" style={{backgroundColor: "Green"}}></button>
            <button className="colorButton" value="Yellow" style={{backgroundColor: "Yellow"}}></button>
          </div>
        </div>
      </div>
  );
}
