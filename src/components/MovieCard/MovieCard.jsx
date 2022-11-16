import { Link } from 'react-router-dom'
import './MovieCard.css'

export default function MovieCard({index, movie}) {
    console.log('moviecard',index, movie)
    return(
        <Link to={`/movies/${movie.title}`}>
            <div className='MovieCard card'>
                <img className='card-img-top' src={`${movie.posterPath}`} alt="Image not found" />
                <div className='card-body'>
                    <h5 className='title card-title'>{movie.title}</h5>
                    <h6 className='card-text'>{movie.releaseDate}</h6>
                </div>
            </div>
        </Link>
    )
}