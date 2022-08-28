import { useState } from "react";
import {Modal,Button,Form} from 'react-bootstrap'
import Rating from '@mui/material/Rating';

const EditMovie=({movie,movies,setMovies})=>{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [name,setName] = useState(movie.name)
    const [description,setDescription] = useState(movie.description)
    const [image,setImage] = useState(movie.image)
    const [rating,setRating] = useState(movie.rating)

    const handleEdit=()=>{
        setMovies(movies.map(el => el.id == movie.id ? {...el,name,description,image,rating}:el))
        handleClose()
    }
    return(
        <>
        
        <Button variant="outline-dark" onClick={handleShow}>
          Edit Movie
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>

          <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control value={name} onChange={(e)=> setName(e.target.value)} type="text" placeholder="Enter title" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Description</Form.Label>
        <Form.Control value={description} onChange={(e)=> setDescription(e.target.value)} type="text" placeholder="Enter description" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Image</Form.Label>
        <Form.Control value={image} onChange={(e)=> setImage(e.target.value) } type="text" placeholder="Enter image" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Rating</Form.Label>
        <br/>
        <Rating value={rating} name="simple-controlled" onChange={(e)=> setRating(e.target.value)} />
      </Form.Group>

      
    </Form>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleEdit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
}

export default EditMovie