import { Link } from 'react-router-dom'
import { BiCameraMovie, BiSearchAlt2} from 'react-icons/bi'

const NavBar = () => {
    return (
        <nav id="navbar">
          <h2>
            <Link to="/">Catalogo de Filmes</Link>
          </h2>
          <form>
            <input type="text"  placeholder='Busque un filme'/>
            <button type="submit">Buscar</button>
          </form>
        </nav>
    )
}

export default NavBar