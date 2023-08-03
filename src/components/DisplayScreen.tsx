import React from "react";
import "../css/displayScreen.css";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import NameWapper from "./NameWapper";
import LottiePlayer from "./LottiePlayer";
import Skills from "../templates/Skills";
import Experience from "../templates/Experience";
import Projects from "../templates/Projects";
import Education from "../templates/Education";
import SocialMedia from "./SocialMedia";

type Props = {};

const ContactInfo = () => {
  return (
    <div className="ContactInfo">
      Get In Touch
      <div className="contactInfoWrapper">
        <div className="phoneNumber">+918689877895</div>
        <span>|</span>
        <div className="gmail">arekarrahul02@gmail.com</div>
      </div>
    </div>
  );
};

const DisplayScreen = (props: Props) => {
  const navScreen = useSelector((state: RootState) => state.navReducer.screen);

  const renderScreen = () => {
    switch (navScreen) {
      case "mainPage":
        return (
          <div className={`mainPageContainer`}>
            <NameWapper />
            <LottiePlayer />
            <SocialMedia />
            <ContactInfo />
          </div>
        );
      case "skills":
        return <Skills />;

      case "education":
        return <Education />;

      case "projects":
        return <Projects />;

      case "experience":
        return <Experience />;
    }
  };
  return (
    <div
      className={`displayScreen  ${
        navScreen === "mainPage" ? "" : "animation-border"
      } `}
    >
      <div
        className={`screenWrapper scrollbar-thin scrollbar-thumb-white  scrollbar-thumb-rounded`}
      >
        {renderScreen()}
      </div>
    </div>
  );
};

export default DisplayScreen;
