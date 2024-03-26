import React from 'react'
import "./Footer.css"
import Wpf from '../Home/Buttons/Buttons-Wp-Footer/Wp'
import Igf from '../Home/Buttons/Buttons-Ig-Footer/Ig'

export default function Footer() {
  return (
    <div className='footerpage-node'>
      <footer className='footerbody'>
          <div className='footer-conteiner'>
              <h3>Coffe.</h3>
              <p>Aplicacion online para empresas gastronomicas, cuenta con funcionalidades de contacto por Whatsapp y
                 Instagram, proyectando una rapida acesibilidad para un posible cliente.
                 Diseñada con aspectos comunicativos prospectando la publicidad de productos y servicios. 
                 Tambien cuenta con funciones directas para Linkedin e email, facilitando la busqueda labural 
                  e conexion entre empleado y empregador.
              </p>
              <ul>
              <div className='socials'>
                  <Wpf/>
                  <Igf/>
                  </div>
              </ul>
              <div className='footer-bottom'>
                  <p>copyright &copy;2024 Coffe. by 
                      <span className='span-footer'> Krossler</span>
                      </p>
              </div>
          </div>
      </footer>
    </div>
  
  )
}
