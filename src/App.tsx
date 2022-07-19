import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Main } from "./App/routes";
// import { Button, SideBar, Accordion, Toast } from "./components";
import "./App.css";
import "./style/main.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Button
          title={"Button"}
          onClick={() => {
            alert("Button Component");
          }}
        />
        <Accordion />
        <Accordion />
        <Accordion />
        <Toast />
        <SideBar /> */}
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
