
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {React, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Rating from '@mui/material/Rating';





const Navmiflix = ({searchm ,ratingm ,setSearchm,setRatingm,movies,setMovies})=> {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [name,setName] = useState('')
  const [rating,setRating] = useState(0)
  const [description,setDescription] = useState('')
  const [image,setImage] = useState ('')
  const handleadd = () => { 
    setMovies( [...movies,{name,description,image,rating,id :Math.random () }])
    handleClose()
  }
  
  
    return (
      
        <div>
        <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">MIFLIX</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link> 
          </Nav>
          
          <Button className='btnadd' variant="primary" onClick={handleShow}>
        Add Movie
      </Button>
          <Rating value={ratingm} className='rat' name="simple-controlled" onChange={(e)=>setRatingm(e.target.value)} />
        
          
      

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
          <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control onChange={(e)=>setName(e.target.value)}  type="text" placeholder="Enter title" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Description</Form.Label>
        <Form.Control onChange={(e)=>setDescription(e.target.value)}  type="text" placeholder="Enter description" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Image</Form.Label>
        <Form.Control onChange={(e)=>setImage(e.target.value)}  type="text" placeholder="Enter image" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Rating</Form.Label>
        <br/>
        <Rating
        name="simple-controlled"        
        onChange={(e)=>setRating(e.target.value)}
         />
      </Form.Group>

      
    </Form>




          </>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleadd} >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
            
          
          <Form className="d-flex">
            <Form.Control
            value={searchm}
              type="text"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e)=>setSearchm(e.target.value)}
          />
            
            
            
          </Form>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>



        </div>




    )
}
export default Navmiflix