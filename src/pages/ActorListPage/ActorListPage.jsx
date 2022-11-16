import ActorCard from "../../components/ActorCard/ActorCard"
import './ActorListPage.css'
export default function ActorListPage({actorList}) {
    // console.log(actorList)
    return (
      <main className="ActorListPage">
        <h1>Actor List</h1>
        <div className="flex-container">
            {actorList.map((actor, index) => (
                <ActorCard actor={actor} key={index} />
            ))}
        </div>
      </main>
    );
}