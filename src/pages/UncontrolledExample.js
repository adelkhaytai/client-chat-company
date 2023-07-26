import Carousel from 'react-bootstrap/Carousel';
import img6 from '../assets/mssg.png'
import img5 from '../assets/sidebar.png'
import img4 from '../assets/chat.png'
function UncontrolledExample() {
  return (
    <div className='contai' data-aos='fade-up'>
       <p>this is how will be the application when you create your account</p>
    <div className='back'>
        <Carousel   className='carousel'>
      <Carousel.Item style={{width:'400px'}} >
        <img
          className="d-block w-100"
          src={img5}          
          alt="First slide"
        />
        <Carousel.Caption style={{color:'black'}}>
          {/* <h3>You can chat with your friends</h3>
          <p>to have a conversation with another person or other people on the internet, when you write down what you want to say, and can see immediately what the other person or other people are writing: I got a message saying that she was available to chat..</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{}}>
        <img
          className="d-block w-100"
          src={img4}
          alt="Second slide"
        />

        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{width:'400px'}}>
        <img
          className="d-block w-100"
          src={img6}
          alt="Third slide"
        />

        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
   
    </div>
    </div>
  );
}

export default UncontrolledExample;