import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Olá! Este é um app React com Typescript criado por Robert para aplicar
          o pipeline de build e deploy
        </p>
      </header>
    </div>
  );
}

export default App;
