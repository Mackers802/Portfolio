import React from "react";

export default function About(props) {
  const {print, briefcase, person, liIcon, gitHub, resume,
    // javascript, css, html, react, es6, git, node, mongoDb, axios, express, 
  } = props

  return (
      <div className="aboutCont">
        <h1>MacKenzie Yandow</h1>
      <div className="headshot">
        <img src="./images/portfolio-headshot.jpg" alt="headshot" width="100" height="100"></img>
      </div>
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
          <h1>{person} About Me</h1>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://docs.google.com/document/d/1Ej6zhUSUkv4Vc5ZdxVXM24pKeMST10ceIF4eVpLLIIA/edit"
          ><h1>{print} Resume</h1></a>
          <h1>{briefcase} Projects</h1>
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
            href="https://github.com/Mackers802"
          >
            <h1>{gitHub} Github</h1>
          </a>
          
          <h1>{resume} Contact</h1>
          <button className="hireMeButton">Hire Me</button>
          <button className="toggleButton">Toggle Icon</button>
        </div>
      </div>
  );
}
