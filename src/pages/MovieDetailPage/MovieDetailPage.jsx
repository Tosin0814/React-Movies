import { useParams } from "react-router-dom";
import './MovieDetailPage.css'

export default function MovieDetailPage({movies}) {
    const movieParams = useParams()
    // console.log(movieParams)
    const currentMovie = movies.filter((movie) => {
        return movie.title.includes(movieParams.movieName)
    })
    // console.log(currentMovie)

    return (
      <main className="MovieDetailPage">
        <h2>{currentMovie[0].title}</h2>
        
        <div className="row">
            <div className="movie-poster col">
                <img src={`${currentMovie[0].posterPath}`} alt="Image not found" />
            </div>
            <div className="movie-info col">
                <h3></h3>
                <p><strong>Release Date: </strong>{currentMovie[0].releaseDate}</p>
                <p><strong>Cast: </strong>{currentMovie[0].cast.join(", ")}</p>
            </div>
        </div>
        
      </main>
    );
}
