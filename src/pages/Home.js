import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./Home.css";
import "./Button.css";
import "./Whrite.css";
import ScrollAnimation from "./ScrollAnimation";
import Me from "./Me";


//43:10
const Home = () => {
  return (
    <div className="box-home" style={{position:'relative'}}>
     <Row className="colo">
      <Col
        md={6}
        className="d-flex flex-direction-column align-items-center justify-content-center"
      >
        <div className="welcome">
          <div class="typewriter">
            <h1>Welcome to WorkChat</h1>
            <p>Chat app lets you connect with your company .</p>
          </div>
          <LinkContainer to="/chat">
            <Button role="button" className="button-85">
              Get started
            </Button>
          </LinkContainer>
        </div>
      </Col>
    
     <Col data-aos='zoom-in' md={5} className="home__bg"></Col>
    
    </Row>

      <ScrollAnimation />
      <Me/>

    </div>
   
    
  );
};

export default Home;
