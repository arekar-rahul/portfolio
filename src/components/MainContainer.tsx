import React from "react";
import styles from "../css/mainContainer.module.css";
import Particle from "./Particle";
import WebSocketComponent from "./WebSocketComponent";
import Navigation from "./Navigation";
import DisplayScreen from "./DisplayScreen";
import FocusLock from "react-focus-lock";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Loader from "./Loader";

const MainContainer: React.FC = () => {
  const isScreenLoaded = useSelector(
    (state: RootState) => state.navReducer.isScreenLoaded
  );

  const width = window.innerWidth;
  const height = window.innerHeight;

  // alert(width + "X" + height);

  return (
    <div className={`${styles.mainContainer}`}>
      <WebSocketComponent />
      <Particle />
      {isScreenLoaded ? (
        <FocusLock>
          <button className={`${styles.invisibleButton}`}></button>
          <div className={styles.mobileRestrictPotraite}>
            {/* <div className={styles.dots}></div> */}
            <div
              style={{
                width: "20%",
                height: 0,
                paddingBottom: "95%",
                position: "relative",
              }}
            >
              <iframe
                src="https://giphy.com/embed/88dh9tDWzJDittz32x"
                width="100%"
                height="100%"
                style={{ position: "absolute" }}
                frameBorder="0"
                className="giphy-embed"
                allowFullScreen
                title="GIPHY Embed"
              ></iframe>
            </div>
          </div>
          <div className={`${styles.mainWrapper}`}>
            <Navigation />
            <DisplayScreen />
          </div>
        </FocusLock>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default MainContainer;
