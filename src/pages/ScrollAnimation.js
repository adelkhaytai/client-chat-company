import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import img1 from "../assets/companychat.avif";
import Accordion from 'react-bootstrap/Accordion';
import AOS from "aos";
import 'aos/dist/aos.css';
const ScrollAnimation = () => {
  useEffect(()=>{
    AOS.init({duration:2000})
  },[])
  return (
    <div></div>
    // <div className="contain">
    //   {/* <Animation /> */}
    //  <div style={{position:'relative', backgroundColor:'transparent'}} className="top">
    //  <div className="animation" data-aos="fade-right">
    //  <Card className="card" style={{ width: "20rem" , height:'41rem' }}>
    //     <Card.Img width="317px" height="300px" variant="top" src={img1} />
    //     <Card.Body>
    //       <Card.Title>Chat Room</Card.Title>
    //       <Card.Text data-aos='zoom-in'>
    //         <h4>What is a chat room?</h4>A chat room is an online platform that
    //         enables users to communicate with each other in real time. Chat
    //         rooms are typically{" "}
    //         <a href="https://www.techtarget.com/whatis/definition/hosting-Web-site-hosting-Web-hosting-and-Webhosting">
    //           hosted
    //         </a>{" "}
    //         on a{" "}
    //         <a href="https://www.techtarget.com/whatis/definition/server">
    //           server
    //         </a>{" "}
    //         with an internet connection, enabling members from around the world
    //         to hold conversations about various topics. By comparison, forums
    //         and{" "}
    //         <a href="https://www.techtarget.com/whatis/definitions/D">
    //           discussion groups
    //         </a>{" "}
    //         let users post messages but don't have the capacity for interactive,
    //         real-time messaging.
    //       </Card.Text>
    //     </Card.Body>
    //   </Card>
    //  </div>
    //  <div className="animation" data-aos="fade-down">
    //  <Card className="card" style={{ width: "21rem",height:"41rem" }}>
    //     {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
    //     <iframe width="317px" height="300px" src="https://www.youtube.com/embed/eNeQTQ7gQuU" title="Top 8 Microsoft Teams Features" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    //     <Card.Body>
    //       <Card.Title>Examples of chat room software</Card.Title>
    //       <Card.Text data-aos='zoom-in'>
    //         The following is a list of commonly used chat rooms and
    //         communication software:
    //         <ul>
    //             <a href="https://www.techtarget.com/searchcontentmanagement/definition/Slack-software">Slack</a> 
    //           <li><a href=""></a>Skype </li>
    //           <li><a href=""></a>Google Meet and Google Chat </li>
    //           <li><a href=""></a>Microsoft Teams </li>
    //           <li><a href=""></a>Internet Relay Chat </li>
    //           <a href="https://www.techtarget.com/searchunifiedcommunications/definition/Microsoft-Teams">Discord</a> 
    //         </ul>
    //       </Card.Text>
    //     </Card.Body>
    //   </Card>
    //  </div>
    // <div className="animation" data-aos="fade-up-left">
    // <Card className="card" style={{ width: '20rem',height:"41rem"  }}>
    //   <Card.Img width="317px" height="300px" variant="top" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" />
    //   <Card.Body>
    //     <Card.Text>
    //  <div data-aos='zoom-in'>
    //  <Accordion defaultActiveKey="1">
    //   <Accordion.Item eventKey="0">
    //     <Accordion.Header>How are chat rooms used?</Accordion.Header>
    //     <Accordion.Body>
    //     Chat rooms are used mainly for communication, with people discussing a wide variety of topics or simply chatting casually online with co-workers or friends. They may also be used for social networking, product promotion or gaming, as well as a remote working tool.
    //     To use a chat room, users must create an account with the online platform and log in. Sometimes, users may also be prompted to download a software client to facilitate the use of the chat room. They can then join chat rooms or chat with other members who are currently logged in.
    //     Chat room conversations take place in a chat box, which is visible to all participants. Many chat rooms provide features such as private messaging, chat rooms specific to certain interests and topics, or the ability to customize chat room colors or backgrounds.
    //     </Accordion.Body>
    //   </Accordion.Item>
    // </Accordion>
    // <Accordion defaultActiveKey="1">
    //   <Accordion.Item eventKey="0">
    //     <Accordion.Header>Challenges with chat rooms</Accordion.Header>
    //     <Accordion.Body>
    //     Because chat room messages are spontaneous and instantly visible, there is a potential for abuse, which may or may not be intentional.
    //     Site hosts typically post an FAQ list to guide users to appropriate chat room behavior, such as introducing yourself when you enter a room, making it clear when you are directing a question or response to a specific user, and reporting disruptive users, for example.
    //     Chat room etiquette requires users to be respectful of one another, even when discussing controversial topics. The chat room moderators typically keep a close watch on conversations to ensure that there is no offensive language or behavior and to protect chat room members from malicious attacks.
    //     Chat rooms are an excellent way for people to communicate online with each other in real time, enabling meaningful conversations and connections over a wide range of topics. They can be used for casual conversation or more serious discussion, depending on the purpose and regulations set by the chat room moderator. With a few simple rules of etiquette, chat rooms can be safe spaces that connect people.
    //     </Accordion.Body>
    //   </Accordion.Item>
    // </Accordion>
    // <Accordion defaultActiveKey="1">
    //   <Accordion.Item eventKey="0">
    //     <Accordion.Header>You can chat with your friends</Accordion.Header>
    //     <Accordion.Body>
    //     to have a conversation with another person or other people on the internet, when you write down what you want to say, and can see immediately what the other person or other people are writing: I got a message saying that she was available to chat.
    //     </Accordion.Body>
    //   </Accordion.Item>
    // </Accordion>
    //  </div>
    //     </Card.Text>
    //   </Card.Body>
    // </Card>
    // </div>
    // </div>
    // </div>
  );
};

export default ScrollAnimation;
