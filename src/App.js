
import { useState } from 'react';
import './App.css';
import Movielist from './Components/Movielist';
import Navmiflix from './Components/Navmiflix';

function App() { 
  const [movies , setMovies]=useState( [
    { id : 1 , name : "The united way" , image : "/united way.jpg",description : "L'histoire de l'équipe Manchester United",rating : 5,},
    {id : 2 ,name : "Thor: Love and Thunder", image : "/thor.jpg", description : "Thor se lance dans un voyage différent " , rating : 3 , },
    {id : 3 , name : "Jurassic shark", image : "/jurassic.jpg",description : "Retenu dans la glace depuis le Jurassique, .",rating : 2 ,} , 
    {id : 4 ,name : "Harry Potter et la coupe de feu ",image : "/harry potter.jpg",description : "Harry Potter et la Coupe de Feu", rating : 5, },
    { id : 5 ,  name : "Life of pi ",image : "/pi.png" ,  description : "Un jeune homme qui survit à un naufrage en mer.", rating : 4,},
    {id : 6 , name : "The holiday", image : "/holiday.jpg",description : "Une Américaine (Amanda) et une Anglaise (Iris), toutes deux déçues des hommes, décident, sans se connaître, d'échanger leurs appartements." ,rating : 3 ,},
    {id : 7 ,name : "Spider Man No Way Home",  image : "/spiderman.jpg",description : "Pour la première fois dans son histoire cinématographique, Spider-Man, le héros sympa du quartier est démasqué et ne peut désormais plus séparer sa vie normale de ses lourdes responsabilités de super-héros. Quand il demande de l'aide à Doctor Strange, les enjeux deviennent encore plus dangereux..." , rating : 5 , } , 
    {id :8 , name : "Joker" , image : "joker.jpg",description : "Le film, qui relate une histoire originale inédite sur grand écran, se focalise sur la figure emblématique de l’ennemi juré de Batman. Il brosse le portrait d’Arthur Fleck, un homme sans concession méprisé par la société. ",rating : 5 , } , 
    { id:9, name : "Mon pire cauchemar", image : "/pire.jpg", description : "Elle habite avec son fils et son mari en face du Luxembourg... Il habite seul avec son fils à l’arrière d’une camionnette. Elle dirige une prestigieuse fondation d’art contemporain... Il vit de petits boulots et d’allocations...", rating : 1}, 
    {id : 10 ,name : "Braquage en Or",image : "/braquage.jpg",description : "Richard Pace est un célèbre criminel. Il s'envole pour le Moyen-Orient afin de voler de l'or mais son implication va aller bien au-delà de ce qu'il avait planifié avant son départ pour Abu Dhabi", rating : 2 ,},
] 
  )
  const [searchm,setSearchm]  = useState('')
  const [ratingm,setRatingm] = useState (0)

  return (
    <div className='lkol'>
    <Navmiflix searchm = {searchm} ratingm = {ratingm} setSearchm = {setSearchm} setRatingm ={setRatingm} movies={movies} setMovies={setMovies}/>
    <br/>
    <br/>
    <Movielist movies = {movies} searchm={searchm} ratingm = {ratingm} setSearchm={setSearchm} setRatingm = {setRatingm} setMovies={setMovies} />
    
    
    
    
    
    
    
    
    </div>
  );
}

export default App;
