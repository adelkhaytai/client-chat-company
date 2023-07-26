import React, { useState } from 'react'
import { Col, Container, Row } from "react-bootstrap";
import {useSignupUserMutation} from '../services/appApi'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Signup.css";
import "./Button.css";
import { Await, Link, Navigate, useNavigate, useParams } from "react-router-dom";
import botImg from '../assets/bot.jpg'
import Animation from './animation/Animation';


const Signup = () => {
  const [email, setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [name, setName] = useState('')
  const [signupUser,{isLoading,error} ] = useSignupUserMutation()
  const navigate = useNavigate()
 //image upload states
 const [image, setImage] = useState(null)
 const [uploadingImg, setUploadingImg] = useState(false) 
 const [imagePreview ,setImagePreview] = useState(null)

  function validateImg(e){
    const file = e.target.files[0]
    if(file.size>=1048576){
      return alert("max file size is 1mb")
    }else{
      setImage(file)
      setImagePreview(URL.createObjectURL(file))
    }
  }

  async function uploadImage(){
    const data = new FormData();
    data.append('file',image)
    data.append('upload_preset','mghjjwxi')
    try{
      setUploadingImg(true)
      let res = await fetch('http://api.cloudinary.com/v1_1/dn9dliqnw/image/upload',{
        method:'post',
        body:data
      })
      const urlData = await res.json();
      setUploadingImg(false)
      return urlData.url
    }catch(error) {
      setUploadingImg(false)
      console.log(error)
    }
    
  }

   async function handleSignup(e){
      e.preventDefault();
      if(!image)return alert("please upload your profile picture")
      const url = await uploadImage(image)
      console.log(url)
      //signup the user
      signupUser({name,email,password,picture:url}).then(({data})=>{
        if(data){
          console.log(data)
          navigate()
        }
      })
   }
  return (
    <div>
      <Animation />
        <Container className='signup'>
      <Row>
        <Col
          md={7}
          className="d-flex align-items-center justify-content-center flex-direction-column"
        >
          <Form style={{ width: "88%", maxWidth: 500 }} onSubmit={handleSignup}>
            <h1 className='text-center'>Create Account</h1>
            <div className='signup-profile-pic__container'>
              <img src={ imagePreview || botImg} className='signup-profile-pic' />
              <label htmlFor='image-upload' className='image-upload-label'>
                <i className='fas fa-plus-circle add-picture-icon'></i>
              </label>
              <input type='file' id='image-upload' hidden accept='image/png, image/jpeg' onChange={validateImg}/>
            </div>
          <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Your Name" onChange={(e)=> setName(e.target.value)} value={name}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>      
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
            </Form.Group>           
            <Button className="button-85" variant="primary" type="submit">
              {uploadingImg ? 'Signing you up ...':'SignUp'}
            </Button>
            <div className="py-4">
              <p className="text-center">
                Already have account ?<Link to="/login">Login</Link>
              </p>
            </div>
          </Form>
        </Col>
        <Col md={5} className="signup__bg"></Col>
      </Row>
    </Container>
    </div>
  
  )
}

export default Signup