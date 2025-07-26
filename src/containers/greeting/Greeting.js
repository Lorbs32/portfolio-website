import React, { useContext } from "react";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import StyleContext from "../../contexts/StyleContext";
import { greeting } from "../../portfolio";

export default function Greeting() {
  const { isDark } = useContext(StyleContext);
  if (!greeting.displayGreeting) return null;

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className={isDark ? "dark-mode greeting-text" : "greeting-text"}>
                {greeting.title} <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p
                className={
                  isDark ? "dark-mode greeting-text-p" : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>

              <div
                className="personal-contact-info"
                style={{ marginTop: "8px", textAlign: "left" }}
              >
                <p style={{ margin: "4px 0" }}>🚩 Ann Arbor, MI</p>
                <p style={{ margin: "4px 0" }}>
                  <strong>Open to Opportunities:</strong> Yes
                </p>
              </div>

              {/* Buttons */}
              <div className="button-greeting-div spaced-buttons">
                {greeting.resumeLink && (
                  <a
                    href={greeting.resumeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="download-link-button"
                  >
                    <Button text="View Resume" />
                  </a>
                )}
                {greeting.linkedInLink && (
                  <a
                    className="download-link-button"
                    href={greeting.linkedInLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button text="View LinkedIn" />
                  </a>
                )}
                {greeting.githubLink && (
                  <a
                    className="download-link-button"
                    href={greeting.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button text="View GitHub" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="greeting-image-div">
            <img
              src="https://avatars.githubusercontent.com/u/153329938?u=290e42c6bbb40a7669be8cea517fe782bcdc7708&v=4"
              alt="Kyle's GitHub Avatar"
              className="profile-image"
            />
            <div
              className="subTitle skills-text"
              style={{
                marginBottom: "12px",
                display: "flex",
                alignItems: "center",
                gap: "10px"
              }}
            >
              <span>Feel free to reach out!</span>
              <SocialMedia />
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}