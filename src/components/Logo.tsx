import React from "react";
import logo from "../assets/logo.jpeg";
import styles from "../css/logo.module.css"

type Props = {};

// aspect-ratio,mix-blend-mode

const Logo = (props: Props) => {
  return (
    <div className={`${styles.logoWrapper}`} >
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Logo;
