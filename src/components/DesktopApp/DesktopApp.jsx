import React from "react";
import profile from "../../images/profile.svg";
import projects from "../../images/projects.svg";
import comp from "../../images/comp.svg";
import ebay from "../../images/ebay.png";
import "./DesktopApp.css";
import "98.css";

export default function DesktopApp() {
  return (
    <div className="desktop-app">
      <div>
        <img className="desktop-logo" src={profile} alt="" />
        <p>Profile</p>
      </div>
      <div>
        <img className="desktop-logo" src={projects} alt="" />
        <p>Projects</p>
      </div>
      <div>
        <img className="desktop-logo" src={ebay} alt="" />
        <p>Ebay</p>
      </div>
      <div>
        <img className="desktop-logo" src={comp} alt="" />
        <p>My Computer</p>
      </div>
    </div>
  );
}
