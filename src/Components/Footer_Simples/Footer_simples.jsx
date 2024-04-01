import React from 'react'
import "./Footer_simples.css"
import Wpf from '../Home/Buttons/Buttons-Wp-Footer/Wp'
import Igf from '../Home/Buttons/Buttons-Ig-Footer/Ig'

export default function Footersimples() {
  return (
    <div className='footerpage-node'>
      <footer className='footerbody'>
          <div className='footer-conteiner'>
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
