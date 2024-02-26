import { useState } from "react"
import "./Header.css"

const Header = () => {

//                        

    const [menu, setMenu] = useState(true);

    const changeMenu = () => {
        setMenu(!menu);
    }

    return(
        <div>
            <header className={menu ? "header":"show-mobile-menu"}>
                <nav className="navbar">
                    <a href="#" className="logo">Coffe<span>.</span></a>
                    <ul className="menu-links">
                        <li><a href="#">HOME</a></li>
                        <li><a href="#">PRODUCTS</a></li>
                        <li><a href="#">ABOUT</a></li>
                        <li><a href="#">CONTACT</a></li>
                        <li><a id="close-btn" onClick={changeMenu}>CLOSE</a></li>
                    </ul>
                    <span id="menu-btn" className="material-symbols-outlined" onClick={changeMenu} ><img src="" alt="" /></span>
                </nav>
            </header>        
        </div>
    )
}

export default Header;