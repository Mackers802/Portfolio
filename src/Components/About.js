import React from "react";

export default function About(props) {
  const {/* contact, */ person, liIcon, gitHub, resume, theme2, toggleDarkLight, changeColor, theme
    // briefcase, javascript, css, html, react, es6, git, node, mongoDb, axios, express, 
  } = props
// console.log("t2", theme2)
// console.log("t1", theme)
  return (
    <div className={theme2}>
      <div id="aboutCont">
        <h1>MacKenzie Yandow</h1>
      <div className="headshot">
        <img src="./images/portfolio-headshot.jpg" alt="headshot" width="100" height="100"></img>
      </div>
        <h2>{person} About Me</h2>
          <p style={{paddingBottom: "10px"}}>
            I am a Full-Stack Software Developer whos aim is to keep
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
            href="https://docs.google.com/document/d/1ekAtefMxgMPO0lTodqUzRN9NxHLoB9Ts/edit#"
          ><h1>{resume} Resume</h1></a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Mackers802"
          >
            <h1>{gitHub} Github</h1>
          </a>
          <br></br>
          <hr></hr>
          <br></br>
          {/* <h1>{contact} Contact</h1> */}
          <div id="toggle">
            <h3>{theme} Mode</h3>
            <label className="switch">
              <input type="checkbox" onClick={toggleDarkLight} />
            <span className="slider round"></span>
            </label>
          </div>
       {/* <div id="settingTab"> */}
     <div className="colorChoice">
      <button className="colorButton" onClick={changeColor} value="grey" style={{backgroundColor: "rgb(187, 187, 187)"}}></button>
      <button className="colorButton" onClick={changeColor} value="skyBlue" style={{backgroundColor: "#61DBFB"}}></button>
      <button className="colorButton" onClick={changeColor} value="green" style={{backgroundColor: "#68A063"}}></button>
      <button className="colorButton" onClick={changeColor} value="yellow" style={{backgroundColor: "#f0db4f"}}></button>
      <button className="colorButton" onClick={changeColor} value="darkBlue" style={{backgroundColor: "#0098FF"}}></button>
      <button className="colorButton" onClick={changeColor} value="orange" style={{backgroundColor: "#f06529"}}></button>
      <button className="colorButton" onClick={changeColor} value="peach" style={{backgroundColor: "#F4CBB2"}}></button>
      <button className="colorButton" onClick={changeColor} value="lightBlue" style={{backgroundColor: "#9CDAF1"}}></button>
     </div>
   </div> 
        </div>
      </div>
    // </div>
  );
}
