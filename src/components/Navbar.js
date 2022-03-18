import React, { useState, useEffect } from "react";
import { HiOutlineMenuAlt1, HiAcademicCap } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button } from "./Button";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <HiAcademicCap className="fa-typo3" /> Julia
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {!click ? <HiOutlineMenuAlt1 /> : <IoMdClose />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Start
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/śmierć"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Śmierć
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/pamięć"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Pamięć
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/zbrodnie"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Zbrodnie
              </Link>
            </li>
          </ul>
          {button && (
            <Link to="/zbrodnie" className="nav-links-b">
              Zbrodnie
            </Link>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
