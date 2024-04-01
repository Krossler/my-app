import Footer from "../../Footer/Footer";
import "./Section.css"

const Section = () => {

    return(
        <div>
        <section className="hero-section">
            <div className="content">
                <h1>Nuestras especialidades</h1>
                <p>Aprende más sobre los distintos granos de cafe y la especialidad que usamos
                    en nuestros cafés de cada dia.
                </p>
                <button>Conocer</button>
            </div>
        </section>
        <Footer/>
        </div>
    )
}

export default Section;