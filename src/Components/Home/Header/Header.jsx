import "./Header.css"

export default function Header () {

    const header = document.querySelector("header");
    const openMenu = () => {
        header.classList.toggle("show-mobile-menu");
    }

    const closeMenu = () => {
        header.classList.toggle("show-mobile-menu");
    }

    return(
        <div>
        <header>
            <nav className="navbar">
                <a href="#" className="logo">Coffe<span>.</span></a>
                <ul className="menu-links">
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">PRODUCTS</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">CONTACT</a></li>
                    <li><a id="close-btn" onClick={closeMenu}>CLOSE</a></li>
                </ul>
                <span id="menu-btn" className="material-symbols-outlined" onClick={openMenu} ><img src="" alt="" /></span>
            </nav>
        </header>        
        </div>

    )
}