import React from 'react'

function Contact() {
  return (
    // Target element
    <div className='testing' id='contact-page'>
      <div className='contactMain'>

      <section className='contactSocials'>
        <h1>Contact Me:</h1>
        {/* logos required */}
        <ul>
          <li>
            <a href= "#" target="_blank"><button className='contactSocials-L'><img src='ln.jpg' className='contactSoc-btnImg'></img>Linkedin</button></a>
          </li>

          <li>
            <a href='mailto:topeumar@gmail.com' target='_blank'>
            <button className='contactSocials-M'><img src='ln.jpg' className='contactSoc-btnImg'></img>Gmail</button>
            </a>
          </li>
        </ul>
      </section> 

      {/* Contact misc is meant for larger projects. e.g: if I had a large project that needs a demo. */}
      
      <section className='contactMisc'>
        <h1>Misc:</h1>
        <ul>
          <li>
            <a href='https://www.github.com/OluwatopeF' target='_blank'>
            <button className='contactSocials-G'><img src='ln.jpg' className='contactSoc-btnImg'></img>Github</button></a>
          </li>
        </ul>
      </section>

      </div>
    </div>
  )
}

export default Contact