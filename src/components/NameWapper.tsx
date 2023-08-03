import React from "react";
import { useSelector } from "react-redux";
import styles from "../css/nameWrapper.module.css";
import { RootState } from "../redux/store";
type Props = {};

const NameWapper = (props: Props) => {
  const data = useSelector((state: RootState) => state.dataReducer);

  return (
    <div className={styles.nameWrapper}>
      <div className={styles.nameWord}>
        <span>Hey,I'm&nbsp;</span>
        <div className={styles.glitchWrapper}>
          <div className={styles.glitch} data-glitch={data.name}>
            {data.name}
          </div>
        </div>
      </div>
      <div className={styles.data}>
        {data.prof} / {data.age}
      </div>
      <div className={styles.description}>{data.description}</div>
    </div>
  );
};

export default NameWapper;
