import React, { useState } from 'react';
import { useScrollHeader } from '../hooks/useScrollHeader';

const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isScrolled = useScrollHeader();

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('body');
  };

  return (
    <header id="header" className={isScrolled ? 'scrolled' : ''}>
      <nav className="container-1 flex">
        <div className="nav-logo flex">
          <h4>KAY TEE</h4>
        </div>
        
        <div className="nav-list" style={{ display: mobileMenuOpen ? 'block' : '' }}>
          <ul className="flex">
            <li><a className="nav-active">Home</a></li>
            <li><a>About Me<i className="fa-solid fa-caret-down"></i></a></li>
            <li><a>Category<i className="fa-solid fa-caret-down"></i></a></li>
            <li><a>Blogs<i className="fa-solid fa-caret-down"></i></a></li>
            <li><a>Pages<i className="fa-solid fa-caret-down"></i></a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>
        
        <div className="nav-search flex">
          <div className="searchbar">
            <i className="fa-solid fa-magnifying-glass" onClick={() => setSearchOpen(!searchOpen)}></i>
            <div className="searchclick" style={{ display: searchOpen ? 'block' : 'none' }}>
              <form>
                <input type="text" placeholder="Search..." />
                <i className="fa-solid fa-magnifying-glass"></i>
              </form>
              <div className="tagssec">
                <h3>Popular tags:</h3>
                <div className="tags flex">
                  <a href="#">#JPD113<span>,</span></a>
                  <a href="#">#kt<span>,</span></a>
                  <a href="#">#KhanhTrinh<span>,</span></a>
                  <a href="#">#jpd23<span>,</span></a>
                  <a href="#">#jpd133</a>
                </div>
              </div>
            </div>
          </div>

          <div className="toggle-switch">
            <input 
              type="checkbox" 
              id="check" 
              checked={darkMode}
              onChange={handleDarkModeToggle}
            />
            <label htmlFor="check" className="btntoggle"></label>
          </div>
          
          <div className="subbtn">
            <button>
              <a href="https://www.facebook.com/kaytee1204/" target="_blank" rel="noopener noreferrer">
                KhanhTrinh1204
              </a>
            </button>
          </div>
          
          <input 
            type="checkbox" 
            id="checkbox"
            checked={mobileMenuOpen}
            onChange={() => setMobileMenuOpen(!mobileMenuOpen)}
          />
          <label htmlFor="checkbox" className="toggle">
            <div className="bars" id="bar1"></div>
            <div className="bars" id="bar2"></div>
            <div className="bars" id="bar3"></div>
          </label>
        </div>
      </nav>
    </header>
  );
};

export default Header;
