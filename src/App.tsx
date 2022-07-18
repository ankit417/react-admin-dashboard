import React from "react";
import { Button, SideBar, Accordion } from "./components";
import "./App.css";
import "./style/main.scss";

function App() {
  return (
    <div className="App">
      <Button
        title={"Button"}
        onClick={() => {
          alert("Button Component");
        }}
      />
      <Accordion />
      <Accordion />
      <Accordion />
      <SideBar />
    </div>
  );
}

export default App;
