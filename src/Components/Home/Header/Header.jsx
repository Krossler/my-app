import { useState } from "react"
import "./Header.css"
import { Link } from 'react-router-dom'
import Wp from "../Buttons/Buttons-Wp/Wp.jsx"
import Ig from "../Buttons/Buttons-Ig/Ig.jsx"

const Header = () => {

    const [menu, setMenu] = useState(true);

    const changeMenu = () => {
        setMenu(!menu);
    }

    return(
        <div>
            <header className={menu ? "header":"show-mobile-menu"}>
                <nav className="navbar">
                <Link to="/my-app/" className="logo">Ganga<span> in</span></Link>
                    <ul className="menu-links">
                        <li><Link onClick={changeMenu} to="/my-app/">HOME</Link></li>
                        <li><Link onClick={changeMenu} to="/my-app/Menu">QUIEN SOMOS</Link></li>
                        <li><Link onClick={changeMenu} to="/my-app/contacto">CONTACTO</Link></li>
                        <li><Link onClick={changeMenu} to="/my-app/">LINKS</Link></li>
                        <li><Link id="close-btn"
                            onClick={changeMenu}>CLOSE</Link></li>
                            <div className="icons">
                                <Wp/>
                                <Ig/>
                            </div>
                    </ul>
                    <span id="menu-btn" className="material-symbols-outlined"
                        onClick={changeMenu} ><img src="" alt="" /></span>
                </nav>
            </header>
            
        </div>
    )
}

export default Header;