import React from "react";
import "./ProjectShowcase.scss";
import { projectShowcase, skillsSection } from "../../portfolio";

export default function ProjectShowcase() {
    if (!projectShowcase.projects.length) return null;

    return (
        <div className="main" id="projects">
            <div className="project-header">
                <h1 className="education-heading">{projectShowcase.title}</h1>
                {/* <p>{projectShowcase.subtitle}</p> */}
            </div>

            <div className="project-grid">
                {projectShowcase.projects.map((project, index) => (
                    <div key={index} className="project-card">
                        {/* Top content */}
                        <div className="project-content">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>

                            <div className="project-icons">
                                {project.icons.map((skillName, i) => {
                                    const skill = skillsSection.softwareSkills.find(
                                        s => s.skillName.toLowerCase() === skillName.toLowerCase()
                                    );
                                    return skill ? (
                                        skill.iconUrl ? (
                                            <img
                                                key={i}
                                                src={skill.iconUrl}
                                                alt={skillName}
                                                className="tech-icon"
                                            />
                                        ) : (
                                            <i
                                                key={i}
                                                className={`tech-icon ${skill.fontAwesomeClassname}`}
                                                title={skillName}
                                            ></i>
                                        )
                                    ) : null;
                                })}
                            </div>
                        </div>

                        {/* Bottom-aligned buttons */}
                        <div className="project-buttons">
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="main-button"
                                >
                                    Github
                                </a>
                            )}
                            {project.demo && (
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="main-button"
                                >
                                    Demo
                                </a>
                            )}
                            {project.docs && (
                                <a
                                    href={project.docs}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="main-button"
                                >
                                    Docs
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}