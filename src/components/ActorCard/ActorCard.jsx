import './ActorCard.css'

export default function ActorCard({actor}) {
    return(
        <div className='ActorCard card'>
            <img className='card-img' src="https://picsum.photos/seed/picsum/150/150/?blur=5" alt="Image not found" />
            <div className='card-img-overlay actor-card-text'>
                <h4 className='text-center'>{actor}</h4>
            </div>
        </div>
    )
}