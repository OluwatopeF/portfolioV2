// This shows the components of the intro page by default
// use className: testing to check position of component and make changes if required
import React from 'react'

function Intro() {
  return (
    <div className='testing' id='homePg'>
      {/* Largest font of website */}
      <div className='intro-header'>
        <h1>Oluwatope Folorunso</h1>
        <h2>Software Developer</h2>
      </div>

      {/* link recent resume to btn as download or online display(preferred) */}
      <div className='intro-link'>
        <a href='#'><button className='intro-link-btn'>Download my Resume</button></a>
      </div>
    </div>
  )
}

export default Intro