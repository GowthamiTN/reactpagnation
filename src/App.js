import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import UserList from "./UserList";
import Users from "./Users";

const App = () => {
  return (
    <Provider store={store}>
      <Users/>
      <UserList/>
    </Provider>
  );
};

export default App;
