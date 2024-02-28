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
              <p>Proyecto comercial para cafeterias, cuenta funcionalidades de contacto directo para Whatsapp,
                 Instagram, proveendo un marketing con aspectos teclogicos y futuristas para su local. 
                 Tambien cuenta con funciones directas para Linkedin e email, facilitando la busqueda de 
                 personal y la conexion directa entre un futuro empleado y empregador.
              </p>
              <ul>
              <div className='socials'>
                  <Wpf/>
                  <Igf/>
                  </div>
              </ul>
              <div className='footer-bottom'>
                  <p>copyright &copy;2024 Coffe. desingned by 
                      <span className='span-footer'> Krossler</span>
                      </p>
              </div>
          </div>
      </footer>
    </div>
  
  )
}
