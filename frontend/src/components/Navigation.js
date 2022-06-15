import { Link } from "react-router-dom"
import '../styles/Nav.css'

function Navigation() {
    return (
        <nav>
            <ul className="menuitems">
                <li>
                    <Link to='/wall' className="lien">Liste des posts</Link>
                </li>
                <li>
                    <Link to='/creation' className="lien">Créer votre post</Link>
                </li>
                <li>
                    <Link to='/profile' className="lien">Votre profil</Link>
                </li>
                <li>
                    <Link to='/' className="lien">Se déconnecter</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation