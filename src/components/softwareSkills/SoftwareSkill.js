import React from "react";
import "./SoftwareSkill.scss";
import { skillsSection } from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skill, i) => (
            <li key={i} className="software-skill-inline" name={skill.skillName}>
              {/* Use SVG icon if iconUrl is provided, else use Font Awesome */}
              {skill.iconUrl ? (
                <img
                  src={skill.iconUrl}
                  alt={skill.skillName}
                  className="custom-icon"
                  style={{ width: "45px", height: "45px", marginBottom: "0px" }}
                />
              ) : (
                <i className={skill.fontAwesomeClassname}></i>
              )}
              <p>{skill.skillName}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
