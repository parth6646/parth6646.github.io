import React, { useState, useEffect } from "react";

import { useInView } from "react-intersection-observer";
import "./App.css"; // Import your CSS file

const App = () => {
  const { ref: myRef, inView: elementVisible } = useInView();
  const { ref: projectRef, inView: projVisible } = useInView();

  const [backgroundColor, setBackgroundColor] = useState("#78081C");


  useEffect(() => {
    const intervalId = setInterval(() => {
      if (elementVisible) {
        console.log('elementVisible:', elementVisible);
        setBackgroundColor((prevColor) =>
          prevColor === "#00072D" ? "#28282B" : "#00072D"
        );
      }
      else if (projVisible){
        console.log('projVisible', projVisible);
        setBackgroundColor((prevColor) =>
          prevColor === "#00072D" ? "#21073a" : "#00072D"
        );

      } else {
        console.log('else:', elementVisible);
        setBackgroundColor((prevColor) =>
          prevColor === "#78081C" ? "#00072D" : "#78081C"
        );
      }
    }, 2500);

    return () => clearInterval(intervalId);
  }, [elementVisible, projVisible]);

  const textStyle = {
    color: "#ff073a",
    textShadow: "2px 2px 4px #ff073a",
  };

  return (
    <div className="app" style={{ background: backgroundColor }}>
      <div className="intro" style={{ background: backgroundColor }}>
        <p>HELLO</p>
        <h1>
          I am <strong>Parth Patel</strong>{" "}
        </h1>
        <p>SOFTWARE ENGINEER</p>
      </div>

      <div
        ref={myRef}
        className={elementVisible ? "deadspace1" : "deadspace2"}
      ></div>

      <div
        ref={myRef}
        className={elementVisible ? "about" : "notAbout"}
        style={{ background: backgroundColor }}
      >
        <div className="aboutHeader">
          <h2
            className={elementVisible ? "abouth2" : "hideabouth2"}
            style={textStyle}
          >
            About Me
          </h2>
        </div>
        <div className="side-by-side">
          <div
            ref={myRef}
            className={elementVisible ? "aboutText" : "notAboutText"}
          >
            <p>
              Hey, I'm <span style={textStyle}>Parth</span>, I enjoy planning, designing, and producing software!
            </p>
            <h3>Education</h3>
            <p>Honours <span style={textStyle}>Computer Science</span>, University of Waterloo '28</p>
            <p>Skills Earned: C, Linux Shell, Bash, Racket</p>
            <h3>Experience</h3>
            <p><span style={textStyle}>BAPS Charities</span>, Regional Coordinator</p>
            <ul>
              <li>Organized weekly assembles teaching <span style={textStyle}>40+</span> youths about Hinduism</li>
              <li>Coordinated an event with <span style={textStyle}>3,000+</span> attendees</li>
              <li>Presented at events with up to <span style={textStyle}>10,000</span> attendees</li>
              <li>Programmed health and safety bots</li>
            </ul>
            <p><span style={textStyle}>Pickering High School</span>, President - Engineering Club</p>
            <ul>
              <li>Increased member participation by <span style={textStyle}>400%</span> from 15 students to <span style={textStyle}>60</span> students</li>
              <li>Planned and executed innovation challenges that inspired students to build devices that were tested and awarded prizes</li>
            </ul>
            <h3>Qualifications</h3>
            <p><span style={textStyle}>Languages & Technologies:</span> Python, Javascript, Java, SQL, Racket, React, MySQL, Express, NodeJS</p>
            <p><span style={textStyle}>Methodologies & Tools:</span> Git, REST APIs, Maven, PIP, NPM, OOP, Axios, Bootstrap</p>
            
              
            <p className="empty"></p>
          </div>

          <div className={elementVisible ? "aboutPhoto" : "notAboutPhoto"}>
            <div className={elementVisible ? "ParthWrapper" : "notParthWrapper"}>
            <img className={elementVisible ? "Parth" : "notParth"} src={"performance.jpg"} alt="source"></img>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={projectRef}
        className={elementVisible ? "deadspace1" : "deadspace2"}
      ></div>
      <div className={projVisible ? "project" : "notProject"}
      ref={projectRef}
      style={{ background: backgroundColor }}>
        <div className="projectHeader">
        <h2
            className={projVisible ? "projh2" : "hideprojh2"}
            style={textStyle}
          >
            Projects
          </h2>
      </div>
      <p className="projDesc"> <strong>Concept to Realization</strong></p>
      <div className="projImg">
      <a className="pdfMergerA" href="https://github.com/parth6646/ParthPDFMerger" target="_blank" rel="noreferrer">
      <img className="PdfMerger" src={"pdfmerger.png"} alt="source"></img>
      </a>
      <a href="https://parth6646.github.io/ChefitUp/" target="_blank" rel="noreferrer">
      <img className="ChefitUp" src={"ChefitUp.png"} alt="source"></img>
      </a>
      <a href="https://devpost.com/software/spoileralert-75qlvx" target="_blank" rel="noreferrer">
      <img className="SpoilerAlert" src={"SpoilerAlert.png"} alt="source"></img>
      </a>
      
      <a href="https://github.com/parth6646/trackflightbot" target="_blank" rel="noreferrer">
      <img className="FlightTracker" src={"FlightTracker.png"} alt="source"></img>
      </a>
      
      
      </div>
      </div>
    </div>
  );
};

export default App;
