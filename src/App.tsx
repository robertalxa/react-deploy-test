import React from "react";
import logo from "./deployment.png";
import "./App.css";

function App() {
  return (
    <div className="app">
      <section className="app__content_section">
        <img src={logo} className="app__content_section__logo" />
        <h1 className="app__content_section__title">App React + TS</h1>
        <p className="app__content_section__text">App criado para testar um pipeline de deploy utilizando github actions e Vercel.</p>
      </section>
    </div>
  );
}

export default App;
