import React, { useContext } from "react";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { illustration, greeting } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

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
              <div id="resume" className="empty-div"></div>
              <SocialMedia />

              <div className="button-greeting-div"
                style={{ marginTop: "32px" }}
              >
                <Button text="Contact me" href="#contact" />
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
              </div>
            </div>
          </div>

          <div className="greeting-image-div"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "250px"
            }}
          >
            <img
              src="https://avatars.githubusercontent.com/u/153329938?u=290e42c6bbb40a7669be8cea517fe782bcdc7708&v=4"
              alt="Kyle's GitHub Avatar"
              style={{
                width: "350px",
                maxWidth: "90%",
                height: "350px",
                borderRadius: "50%",
                objectFit: "cover",
                boxShadow: "0 0 0 10px #007acc, 0 0 10px rgba(0, 122, 204, 0.6)",
                display: "block",
                margin: "0 auto",
                marginTop: "48px"
                //border: "10px solid #007acc"
              }}
            //className="profile-image"
            />
            {
            /* {illustration.animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : (
              <img
                alt="man sitting on table"
                src={require("../../assets/images/manOnTable.svg")}
              ></img>
            )} */}
          </div>
        </div>
      </div>
    </Fade>
  );
}
