import Moviecard from "./Moviecard"


const Movielist =({movies ,setMovies, searchm , ratingm ,setRatingm ,setSearchm }) => {
    return (
        <>
        <div className="mlist">
        {
            movies.filter(el => el.name.toLowerCase().includes(searchm.toLowerCase())  && el.rating >= ratingm).map(movie=> <Moviecard movie={movie} movies={movies} setMovies ={setMovies} />)

        }
        </div>
        
        
        </>





    )
}
export default Movielist