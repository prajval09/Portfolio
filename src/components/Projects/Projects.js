import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import emotion from "../../Assets/Projects/emotion.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import celebrity from "../../Assets/Projects/celebrity-recognition-using-amazon-rekognition.jpg";
import ecom from "../../Assets/Projects/Ready-Ecommerce-Design.webp";
import blog from "../../Assets/Projects/free-blog-maker-hero-en.webp";
import spotify from "../../Assets/Projects/spotify.webp";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={celebrity}
              isBlog={false}
              title="Face Scan"
              description="FaceScan leverages AWS Rekognition to provide advanced facial recognition capabilities. The project includes user-friendly interfaces for uploading and managing images. It supports real-time recognition and verification of faces, making it suitable for security and identity verification applications. The system is designed to be highly scalable, handling large volumes of image data efficiently. Additionally, it integrates with various databases for secure and organized storage of facial data."
              ghLink="https://github.com/prajval09/AWSfacescan"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecom}
              isBlog={false}
              title="ShopX"
              description="ShopX is a robust e-commerce platform built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It features user authentication, product management, and secure payment integration. The platform offers a seamless shopping experience with a responsive and intuitive interface. ShopX includes advanced search and filter capabilities, a dynamic shopping cart, and order management. The backend ensures data integrity and security, providing a reliable system for both users and administrators."
              ghLink="https://github.com/prajval09/Ecom"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Bloggify"
              description="Bloggify is a dynamic blogging platform that allows users to create, manage, and share content easily. Built with modern web technologies, it features a rich text editor, image uploads, and tagging systems for categorization. Users can comment on posts, enhancing community engagement. The platform supports SEO-friendly URLs and metadata, improving visibility in search engines. Bloggify's responsive design ensures a seamless experience across all devices."
              ghLink="https://github.com/soumyajit4419/Bloggify"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spotify}
              isBlog={false}
              title="Spotify"
              description="The Spotify Clone replicates key features of the popular music streaming service. Built with React for the frontend and Node.js for the backend, it includes user authentication, playlists, and search functionality. Users can stream music, create and share playlists, and discover new songs through recommendations. The application also supports real-time playback and synchronizes data across devices, providing a smooth and immersive listening experience."
              ghLink="https://github.com/soumyajit4419/Spotify"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Hotel Billing and Menu"
              description="The Hotel Billing and Menu Card System streamlines restaurant operations by integrating digital menu cards with automated billing processes. It features an intuitive interface for easy order placement and real-time updates. The system generates accurate bills, manages inventory, and provides detailed sales reports. Built with a focus on efficiency, it reduces human error and enhances the customer dining experience with quick and accurate service."
              ghLink="https://github.com/soumyajit4419/HotelBillingandMenu"  
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="This facial recognition system employs advanced Python algorithms for high-accuracy detection and recognition. It automatically sends email notifications upon successful recognition, enhancing security and monitoring capabilities. The system is designed for ease of integration with existing security infrastructures. It supports live video feed analysis and can recognize multiple faces simultaneously, making it ideal for both personal and commercial use."
              ghLink="https://github.com/soumyajit4419/Face_Recognition_Python"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
