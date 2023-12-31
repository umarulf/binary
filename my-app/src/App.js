import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import BinarySearch from "./components/BinarySearch";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <BinarySearch />
      </div>
    </Provider>
  );
};

export default App;
