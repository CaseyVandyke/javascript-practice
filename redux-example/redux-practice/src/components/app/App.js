import React from "react";
import { createStore } from "redux";
import "./App.css";

import InputPerson from "../input-person/index";
import AddPersonButton from "../add-person-button/index";
import ShowPersonList from "../show-person-list/index";

function App() {
  return (
    <div className="App">
      <InputPerson />
      <AddPersonButton />
      <ShowPersonList />
    </div>
  );
}

export default App;
