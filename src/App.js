import React from "react";
import NavBar from "./components/Nav/Nav";
import Body from "./components/Body/Body";
import Services from "./components/Body/Service";
import Footer from "./components/Footer/Footer";
import Content from "./components/Body/Content";
import "./App.css";

const App = () => {
  return (
    <div className="container-fluid">
      <NavBar />
      <Body />
      <Content />
      <Services />
      <Footer />
    </div>
  );
};

export default App;
