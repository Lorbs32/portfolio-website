import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                {/* {skills.skillName === "Spring Boot" ? (
                  <img
                    src="/icons/springboot.svg"
                    alt="Spring Boot"
                    className="fa"
                    style={{ width: "45px", height: "45px", marginBottom: "0px" }}
                  />
                ) : skills.skillName === "Spring" ? (
                  <img
                    src="/icons/spring.svg"
                    alt="Spring"
                    style={{
                      width: "45px",
                      height: "45px",
                      filter: "grayscale(100%) brightness(0.7)",
                      transition: "0.3s ease",
                      marginBottom: "0px"
                    }}
                  />
                ) : ( */}
                <i className={skills.fontAwesomeClassname}></i>
                {/* )} */}
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
