import React from "react";
import Card from "react-bootstrap/Card";
import me from "../assets/myPicture.jpg";

const Me = () => {
  return (
    <div data-aos="flip-left" className="picture">
      <div>
        <Card
          style={{
            width: "20rem",
            backgroundColor: " rgb(37, 39, 39)",
            color: "white",
          }}
        >
          <Card.Img variant="top" src={me} />
          <Card.Body>
            <Card.Title>Adel Khayati</Card.Title>
            <Card.Text>
              I create this Web Site for myself to used in company or chat with
              friends
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div data-aos="flip-right">
        <Card
          style={{
            width: "20rem",
            backgroundColor: " rgb(37, 39, 39)",
            color: "white",
          }}
        >
          <Card.Body>
            <Card.Text>
            <Card.Title>
              this is sturture devlopment and language used
            </Card.Title>
            <ul>
              <li>Html</li>
              <li>css</li>
              <li>JavaScript</li>
            </ul>
            <Card.Title> i use those framework</Card.Title>
            <ul>
              <li>React</li>
              <li>bootstrap</li>
              <li>express</li>
              <li>socket.io</li>
            </ul>
            <Card.Title>side server used is</Card.Title>
            <li>nodeJS</li>
            <Card.Title>for animation card </Card.Title>
            <li>Aos</li>
            <Card.Title>Pictured saved in sign up</Card.Title>
            <li>cloudinary</li>

            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Me;
