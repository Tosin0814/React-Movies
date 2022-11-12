import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
      <nav className="NavBar">
        <Link to="/">Movies List</Link>
        &nbsp; | &nbsp;
        <Link to="/actors">Actors List</Link>
      </nav>
    );
}