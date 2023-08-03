import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import MainContainer from "./components/MainContainer";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <MainContainer />
    </Provider>
  );
};

export default App;
