import React, { useEffect, useRef, useState } from "react";
import "../styles/NavLink.css";
import "../styles/animate.css"; // pastikan ini berisi .fade-left
import data from "../data/CommunicationAndSignalProcessing.json";

export default function App() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  const { title, description } = data.judul;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="unitis-app" id="home">
      <header ref={sectionRef}>
        <div className="header-content">
          <h1
            className={`fade-kiri ${visible ? "visible" : ""}`}
            style={{ transitionDelay: "0.2s" }}
          >
            {title}
          </h1>
          <p
            className={`fade-kiri ${visible ? "visible" : ""}`}
            style={{ transitionDelay: "0.5s" }}
          >
            {description}
          </p>
        </div>
      </header>
    </div>
  );
}
