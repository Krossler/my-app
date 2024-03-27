import Footersimples from '../Footer_Simples/Footer_simples';
import Carta from './Carta.jpg';
import Carta2 from './Carta2.jpg';
import "./Menu.css"

const Menu = () => (
    <div>
        <div className='base_carta'>
            <div className='menu_carta'>
                <div className='item_carta'>
                    <img src={Carta} className='carta' alt="logo" />
                </div>
                <div className='item_carta'>
                    <img src={Carta2} className='carta2' alt="logo" />
                </div>  
            </div>
        </div>
    <Footersimples/>
    </div>
)

export default Menu;