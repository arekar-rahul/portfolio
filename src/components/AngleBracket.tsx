import React from "react";
import styles from "../css/angleBracket.module.css";

type Props = {
  className: string;
  word: string;
};

const AngleBracket = (props: Props) => {
  return (
    <div className={`AngleBracket ${styles.angleBracket}`}>
      <span className={`${styles.bracket}`}>&lt;&nbsp;</span>
      <div className={`word ${props?.className}`}>{props.word}</div>
      <span className={`${styles.bracket}`}>&nbsp;&gt;</span>
    </div>
  );
};

export default AngleBracket;
