import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Prajwal Patil </span>
            from <span className="purple"> Maharashtra, India.</span>
            <br />
            I am currently pursuing <span className="purple">B.Tech from Vishwakarma Institue Of Information Technology Pune.</span>
            <br />
            
            I am currently in my final year of a B.Tech program in <span className="purple">Artificial Intelligence and Data Science.</span>
            <br />
            <br />
            Apart from devlopment, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Partciapte in hackathons
            </li>
            <li className="about-activity">
              <ImPointRight /> Competetive Programming
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            " What I believe is true success comes from humble dedication and hard work. Giving 100% to every project is not just a preference but a commitment to excellence!"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
