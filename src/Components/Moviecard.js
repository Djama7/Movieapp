import { Card ,Button } from "react-bootstrap"
import Rating from '@mui/material/Rating';
import ReactReadMoreReadLess from "react-read-more-read-less";
import EditMovie from "./Movieedit";
import {Link} from 'react-router-dom'


const Moviecard = ({movies,movie,setMovies}) => {
    const handleDelete=()=>{
        setMovies(movies.filter(el=> el.id !== movie.id))
    }
    return (
        <>
         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.image} style={{height :'390px'}} />
      <Card.Body>
        <Link to={`/Description/${movie.id}`}><Card.Title>{movie.name}</Card.Title></Link>
        <Card.Text>
        <ReactReadMoreReadLess
                charLimit={40}
                readMoreText={"Read more ▼"}
                readLessText={"Read less ▲"}
            >
                {movie.description}
            </ReactReadMoreReadLess>
          
        </Card.Text>
        <Rating name="read-only" value={movie.rating} readOnly />
        <br/>
        <br/>
       <EditMovie movie = {movie} movies = {movies} setMovies={setMovies}/>
     <Button  variant="outline-dark" className="delee" onClick={handleDelete}>Delete</Button>
       
        
      </Card.Body>
    </Card>
        
        




        </>




    )
}
export default Moviecard