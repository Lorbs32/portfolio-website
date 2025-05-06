import React, {useContext} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function StartupProject() {
  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  const {isDark} = useContext(StyleContext);
  if (!bigProjects.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{bigProjects.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {bigProjects.subtitle}
          </p>
          <div className="projects-container">
            {bigProjects.projects.map((project, i) => {
              return (
                <div
                  key={i}
                  className={
                    isDark
                      ? "dark-mode project-card project-card-dark"
                      : "project-card project-card-light"
                  }
                  style={{position: "relative"}}
                >
                  {/* TITLE FIXED TO TOP LEFT */}
                  <h5
                    className={isDark ? "dark-mode card-title" : "card-title"}
                    style={{
                      position: "absolute",
                      top: "20px",
                      left: "20px",
                      margin: 0
                    }}
                  >
                    {project.projectName}
                  </h5>

                  {/* CENTERED CONTENT BELOW TITLE */}
                  <div
                    className="project-detail"
                    style={{
                      paddingTop: "60px", // gives room for title
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      height: "100%"
                    }}
                  >
                    {/* Optional image (now below title) */}
                    {project.image && (
                      <div className="project-image">
                        <img
                          src={project.image}
                          alt={project.projectName}
                          className="card-image"
                        />
                      </div>
                    )}

                    {/* Optional embedded video */}
                    {project.videoEmbed && (
                      <div className="project-video">
                        <iframe
                          width="100%"
                          height="200"
                          src={project.videoEmbed}
                          title={`${project.projectName} Demo Video`}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    )}

                    {/* Description */}
                    <p
                      className={
                        isDark ? "dark-mode card-subtitle" : "card-subtitle"
                      }
                    >
                      {project.projectDesc}
                    </p>

                    {/* Footer buttons */}
                    {project.footerLink && (
                      <div className="project-card-footer">
                        {project.footerLink.map((link, i) => (
                          <span
                            key={i}
                            className={
                              isDark ? "dark-mode project-tag" : "project-tag"
                            }
                            onClick={() => openUrlInNewTab(link.url)}
                          >
                            {link.name}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
