import React from "react";
import Lottie from "react-lottie-player";
import animationData from "../assets/animation_2.json";
import "../css/lottiePlayer.css";

type Props = {};

const LottiePlayer = (props: Props) => {
  return (
    <div className="lottie-player-container">
      <Lottie
        loop
        animationData={animationData}
        play
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default LottiePlayer;
