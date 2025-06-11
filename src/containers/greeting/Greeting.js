import React, { useContext } from "react";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
//import landingPerson from "../../assets/lottie/landingPerson";
//import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
//import {illustration, greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import { greeting } from "../../portfolio";

export default function Greeting() {
  const { isDark } = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {greeting.title}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
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

              {/* <div id="resume" className="empty-div"></div> */}

              {/* Buttons */}
              <div
                className="button-greeting-div"
                style={{
                  marginTop: "0px",
                  display: "flex",
                  flexDirection: "row",     // keep buttons horizontal
                  gap: "0px",               // reduce spacing between buttons
                  flexWrap: "wrap",         // responsive behavior
                  alignItems: "center"
                }}
              >

                {/* Resume Button */}
                {/* <Button text="Contact me" href="#contact" /> */}
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

                {/* LinkedIn Button */}
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

                {/* Github Button */}
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

          {/* Hero image (Right Side Div) */}
          <div
            className="greeting-image-div"
          // style={{
          //   display: "flex",
          //   flexDirection: "column",
          //   justifyContent: "center",
          //   alignItems: "center",
          //   minHeight: "250px"
          // }}
          >
            <img
              src="https://avatars.githubusercontent.com/u/153329938?u=290e42c6bbb40a7669be8cea517fe782bcdc7708&v=4"
              alt="Kyle's GitHub Avatar"
              // style={{
              //   width: "350px",
              //   maxWidth: "90%",
              //   height: "350px",
              //   borderRadius: "50%",
              //   objectFit: "cover",
              //   boxShadow:
              //     "0 0 0 10px #007acc, 0 0 10px rgba(0, 122, 204, 0.6)",
              //   display: "block",
              //   margin: "0 auto",
              //   marginTop: "48px",
              //   marginBottom: "48px"
              // }}

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
    </Fade >
  );
}
