'use client';
import { useState } from 'react';


function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [titleOpen, setTitleOpen] = useState(false);

  const showMenumobile = () =>{
    setMenuOpen(prev => !prev);
  };

  const titleGone = () =>{
    setTitleOpen(prev => !prev);
  };

  // All this on one button?!
  const handleClick = () =>{
    showMenumobile();
    titleGone();
  };

  const handleHome = () =>{
    showMenumobile();
    titleGone();
    toHome();
  };

  const handleProject = () =>{
    showMenumobile();
    titleGone();
    toProjects();
  };

  const handleContact = () =>{
    showMenumobile();
    titleGone();
    toContact();
  };

  // onClick, showMenumobile opens and closes menu

  // to{destination} functions auto-scroll to specified destination 
  const toContact= () => {
    document.getElementById('contact-page')?.scrollIntoView({ behavior: 'smooth'})
   };
  // const toHome();
  const toHome= () => {
    document.getElementById('homePg')?.scrollIntoView({behavior: 'smooth'})
   };
  // const toProjects();
  const toProjects= () => {
    document.getElementById('project')?.scrollIntoView({behavior: 'smooth'})
   };

  

  return (
    <nav className='navBar'>
        <a className={titleOpen ? 'titleName gone': 'titleName'}>OLUWATOPE FOLORUNSO</a>

        {/* mobile only: btn opens and closes menu. menu closed as default */}
        <a className='mobileMenu-btn' onClick={handleClick} >
          {/* onClick={showMenumobile} */}
          <i>{menuOpen ? 'close' : 'open'}</i>
        </a>

        <ul className={menuOpen ? 'mobileMenu open' : 'mobileMenu'}>
          <li><a onClick={handleHome} href='#Home'>Home</a></li>
          <li><a onClick={handleProject} href='#Myprojects'>My projects</a></li>
          <li><a onClick={handleContact}href='#Contact'>Contact Me</a></li>
        </ul>

        {/* contact btn leads to email message */}
        <li className='contactBtn'><a href='mailto:topeumar@gmail.com'>CONTACT</a></li>
    </nav>

    // MOBILE VERSION 

  );
}

export default Navbar