import React from "react";

export default function About() {
  return (
    <>
      <div className="aboutHeader">
        <h1>Who am I</h1>
      </div>
      <div className="aboutCont">
        <div className="aboutDesc">
          <p>
            Hello,
            <br></br>
            <br></br>
            My name is MacKenzie I am a Full-Stack Developer whos aim is to keep
            website developement simplistic, concise and to the point. I belive
            that a website is more powerful when it is simple and easy to
            navigate. I am excited to continue creating in the technical relm
            and I look forward to creating and colaborating projects with
            likeminded individuals.
            <br></br>
            <br></br>I am originaly from the East Coast and have beome a bit of
            a West Coast Nomad. I currently live in Las Vegas, Nevada with my
            wife and two Dogs! 
          </p>
        </div>

        <div className="skillsHeader">
          <h1>Skills</h1>
        </div>
        <div className="skillsTypesCont">
          <ul>
            <li>Javascript</li>
            <li>CSS</li>
            <li>HTML</li>
            <li>React</li>
            <li>ES6</li>
          </ul>
          <ul>
            <li>GitHub</li>
            <li>Git</li>
            <li>Node.js</li>
            <li>MongoDb</li>
            <li>Axios</li>
            <li>Express</li>
          </ul>
          <ul>
            <li>Canva</li>
            <li>Photoshop</li>
            <li>InDesign</li>
            <li>Figma</li>
          </ul>
        </div>
      </div>
    </>
  );
}
