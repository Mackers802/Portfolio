import React from "react";

export default function About(props) {
  const {contact, person, liIcon, gitHub, resume, theme2, toggleDarkLight, changeColor, theme
    // briefcase, javascript, css, html, react, es6, git, node, mongoDb, axios, express, 
  } = props

  return (
    <div className={theme2}>
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
          <h1>{contact} Contact</h1>
          <div id="toggle">
            <h3>{theme} Mode</h3>
            <label className="switch">
              <input type="checkbox" onClick={toggleDarkLight} />
            <span className="slider round"></span>
            </label>
          </div>
       {/* <div id="settingTab"> */}
     <div className="colorChoice">
     <button className="colorButton" onClick={changeColor} value="Grey" style={{backgroundColor: "rgb(187, 187, 187)"}}></button>
     <button className="colorButton" onClick={changeColor} value="Red" style={{backgroundColor: "rgb(208, 32, 32)"}}></button>
     <button className="colorButton" onClick={changeColor} value="Blue" style={{backgroundColor: "rgb(33, 212, 215)"}}></button>
     <button className="colorButton" onClick={changeColor} value="Green" style={{backgroundColor: "rgb(95, 171, 70)"}}></button>
     <button className="colorButton" onClick={changeColor} value="Yellow" style={{backgroundColor: "rgb(228, 207, 47)"}}></button>
     <button className="colorButton" onClick={changeColor} value="Tan" style={{backgroundColor: "rgb(228, 191, 128)"}}></button>
     <button className="colorButton" onClick={changeColor} value="Purple" style={{backgroundColor: "rgb(154, 89, 211)"}}></button>
     </div>
   </div> 
        </div>
      </div>
    // </div>
  );
}
