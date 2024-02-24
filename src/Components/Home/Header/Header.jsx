import "./Header.css"

export default function Header () {

    const header = document.querySelector("header");
    const handleFuntion = () => {
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
                    <li><a id="close-btn" onClick={handleFuntion}>Close</a></li>
                </ul>
                <span id="menu-btn" className="material-symbols-outlined" onClick={handleFuntion} ><img src="" alt="" /></span>
            </nav>
        </header>        
        </div>

    )
}