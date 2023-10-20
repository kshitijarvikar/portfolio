import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Introduction from "./components/Introduction/Introduction";
import Contact from "./components/Contact/Contact";
import Socials from "./components/Socials/Socials";
import "./App.css"
import Typewriter from "typewriter-effect";
import { BarLoader } from "react-spinners"
import { Fragment, useEffect, useState } from "react";


function App() {

  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <Fragment>

      {/* Loader */}
      { isLoading ? (
        <section className="load-container">
          <h1 className="load-name">
            <Typewriter
              options={{
                strings: ["< KSHITIJ />"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="">
            <BarLoader 
              color="white" 
              width={200}
              />
          </div>
        </section>
     ) : (
      <>
        <Navbar />
        <Introduction />
        <Contact />
        <Socials />
      </>
     )}
    </Fragment> 
  );
}

export default App;
