import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navBarCont">
        <Link to="/">About</Link>
        <Link to="/Projects">Projects</Link>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://docs.google.com/document/d/1iFfFJI_iqas9AxdTJL0PiIeHDEFjha-IVhbc5pf0cCM/edit?usp=sharing"
        >
          Resume
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Mackers802"
        >
          GitHub
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/mackyandow/"
        >
          LinkedIn
        </a>
    </div>
  );
}
