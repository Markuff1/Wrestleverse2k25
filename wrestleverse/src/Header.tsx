import "./Header.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [breakingNews, setBreakingNews] = useState();

  return (
    <div>
      {/* Breaking News Banner (Only Displays if There is News) */}
      {breakingNews && (
        <div className="BreakingNewsBanner">
          <div className="BreakingNewsContent">
            <span>BREAKING NEWS : {breakingNews}!!!!!!</span>
          </div>
        </div>
      )}

      {/* Header Section */}
      <div className="HeaderBackground">
        <div className="HeaderContainer">
          <img className="WLogo" src="/src/Images/Wrestleverse2K25.png" alt="Logo" />
          <nav className="nav">
            <ul className="nav__links" id="sidemenu">
              <li><Link to="/">HOME</Link></li>
              <li><Link to="/news">NEWS</Link></li>
              <li className="dropdown">
                <Link to="/shows">SHOWS</Link>
                <div className="dropdown-content">
                  <Link to="/raw">RAW</Link>
                  <Link to="/SD">SMACKDOWN</Link>
                  <Link to="/Draft">DRAFT</Link>
                  <Link to="/NoMercy">LATEST PPV</Link>
                </div>
              </li>
              <li><Link to="/Roster">ROSTER</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;

