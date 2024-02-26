import { useState } from "react"
import "./Header.css"
import { Link } from 'react-router-dom'

const Header = () => {

    const [menu, setMenu] = useState(true);

    const changeMenu = () => {
        setMenu(!menu);
    }

    return(
        <div>
            <header className={menu ? "header":"show-mobile-menu"}>
                <nav className="navbar">
                    <Link to="/my-app/" className="logo">Coffe<span>.</span></Link>
                    <ul className="menu-links">
                        <li><Link to="/my-app/">HOME</Link></li>
                        <li><Link to="/my-app/">PRODUCTS</Link></li>
                        <li><Link to="/my-app/">ABOUT</Link></li>
                        <li><Link to="/my-app/Contacto">CONTACT</Link></li>
                        <li><Link id="close-btn"
                            onClick={changeMenu}>CLOSE</Link></li>
                    </ul>
                    <span id="menu-btn" className="material-symbols-outlined"
                        onClick={changeMenu} ><img src="" alt="" /></span>
                </nav>
            </header>        
        </div>
    )
}

export default Header;