// My projects component
// needs a list that can be infinitely stacked
// place a minimum of at least two projects
// pull project image and description from public folder

import React from 'react';
import desc from '../src/assets/desc.json';
import icons from '../src/assets/icon.json';

function MyProjects() {


  return (
    <div className='testing' id='project'>
      <h1>My projects</h1>

      <div className='project-showcase'>
        {/* append multiple div boxes */}
        {/* fill each with project name and description */}

        {desc.map((item) => (
          <div className='project-item' key={item.id}>
          <div className='project-item-img'>
            <img src={item.image}  alt={item.title}/>
          </div>
          
          <div className='project-item-desc'>
            <h1>{item.title}</h1>
            <h2>{item.description}</h2> 
          </div>
          
          <a href={item.link} target="_blank"><button className='project-item-btn'>Open Project</button></a>
          </div>
        ))}

    
      </div>
        <br></br>
        <h1>Programming languages used</h1>

      <div className='project-roulette'>
        {icons.map((data) =>(
          <div key={data.id}>
              <img src={data.image} className='pSkill-img'/>
          </div>
        ))}
      </div>


    </div>
  )
}

export default MyProjects