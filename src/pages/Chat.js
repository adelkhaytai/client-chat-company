import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MessageForm from "../components/MessageForm";
import SideBar from "../components/SideBar"
import './chat.css'

const Chat = () => {
  return (
    <Container className="chat">
      <Row>
        <Col md={4}>
          <SideBar />
        </Col>
        <Col md={8}>
          <MessageForm />
        </Col>
      </Row>
    </Container>
  );
};

export default Chat;
