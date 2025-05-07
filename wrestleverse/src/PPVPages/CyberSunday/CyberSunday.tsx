import React from "react";
import "../../PPVShow.css";
import Header from "../../Header";
import Footer from "../../Footer";

function CyberSunday() {
  const matchCard = [
    {match: "New Catch Republic Vs Dudley Boys", title: "SmackDown Tag Team Championships", type: "Tables"},
    {match: "Randy Orton Vs Sami Zayn", title: null, type: "Extreme Rules"},
    {match: "Bron Breakker Vs Oba Femi", title: "United States Championship", type: "Last Man Standing"},
    {match: "Piper Niven Vs Michelle McCool", title: "Women's Intercontinental Championship", type: "Extreme Rules"},
    {match: "Baron Corbin Vs Dragon Lee Vs Ilja Dragunov Vs Damian Priest Vs Rey Mysterio", title: "Intercontinental Championship", type: "Ladder"},
    {match: "Naomi Vs Rhea Ripley", title: "Women's World Championship", type: "Normal"},
    {match: "AJ Styles Vs CM Punk", title: null, type: "Ambulance"},
    {match: "Roxanne Perez Vs Tiffiany Stratton", title: "Women's Undisputed Championship", type: "Extreme Rules"},
    {match: "Roman Reigns Vs RVD", title: "WWE Undisputed Championship", type: "Normal"},
    {match: "Gunther Vs Cody Rhoads Vs Drew McIntyre", title: "World Heavyweight Championship", type: "Triple Threat"}
  ];
  

  // Function to scroll to match image
  const scrollToMatch = (index: number) => {
    const element = document.getElementById(`match-${index}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <Header />
      <div className="PPVBackground">
        <div className="PPVContainer">
          <img
            className="PPVBanner"
            src="/src/Images/PPV/CyberSunday/CyberSundayHeader.png"
            alt="CyberSunday Banner"
          />

          <div className="PPVInfo">
            <div className="PPVLocation">
              <strong>Location:</strong> Capital One Arena, Washington, DC
            </div>
            <div className="PPVDate">
              <strong>Date/Time:</strong> Saturday, October 25th 2025
            </div>
          </div>

          <div className="MCTitle">Match Card</div>
          <table className="MCList">
            <thead>
              <tr>
                <th>Match Number</th>
                <th>Match</th>
                <th>Title</th>
                <th>Match Type</th>
              </tr>
            </thead>
            <tbody>
              {matchCard.map((match, index) => (
                <tr key={index} onClick={() => scrollToMatch(index)} style={{ cursor: "pointer" }}>
                  <td>{index + 1}</td>
                  <td>{match.match}</td>
                  <td>{match.title}</td>
                  <td>{match.type} Match</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="MCTitle">Match Card Summary</div>
          <div className="MatchImages">
            {matchCard.map((match, index) => (
              <div key={index} className="MatchItem" id={`match-${index}`}>
                <h3 className="MatchTitle">{match.match}</h3>
                <h3 className="MatchChampionship">{match.title}</h3>
                <h3 className="MatchType">{match.type} match</h3>
                <img
                  className="MatchImage"
                  src={`src/Images/PPV/CyberSunday/2025MC/M${index + 1}.png`}
                  alt={match.match}
                />
                <div className="MatchDivider"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CyberSunday;
