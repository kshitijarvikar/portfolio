import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Introduction from "./components/Introduction/Introduction";
import Contact from "./components/Contact/Contact";
import Socials from "./components/Socials/Socials";
import "./App.css"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Introduction />
      <Contact />
      <Socials />
    </div>
  );
}

export default App;
