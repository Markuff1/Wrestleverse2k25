import "./Header.css";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const [breakingNews] = useState();
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);  //Gets the username to display
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("username");
    setUsername("");                     //Removes the username when you logout so that it secures the website for unauthorised users
    navigate("/")                        //And takes you back to the login page
  }

  return (
    <div>
      {/* Breaking News Banner */}
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
              <li><Link to="/Home">HOME</Link></li>
              <li><Link to="/news">NEWS</Link></li>
              <li className="dropdown">
                <Link to="/shows">SHOWS</Link>
                <div className="dropdown-content">
                  <Link to="/raw">RAW</Link>
                  <Link to="/SD">SMACKDOWN</Link>
                  <Link to="/Draft">DRAFT</Link>
                  <Link to="/SurvivorSeries">LATEST PPV</Link>
                </div>
              </li>
              <li><Link to="/Roster">ROSTER</Link></li>
              <li>
                  <div className="welcome-text">{username ? `Hi ${username}!!!!!` : ''}</div>
                  <button className="logoutButton" onClick={handleLogout}>LogOut</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
