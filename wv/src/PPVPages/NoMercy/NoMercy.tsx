import "../../PPVShow.css";
import Header from "../../Header";
import Footer from "../../Footer";

function NoMercy() {
  const matchCard = [
    {match: "New Catch Republic Vs Dudley Boys", title:"SmackDown Tag Team Championships", type:"Normal"},
    {match: "Raquel Roderiquez Vs Sol Ruca", title: "Women's United States Championship", type: "Normal"},
    {match: "Bron Breakker Vs Oba Femi", title: "United States Championship", type: "Normal"},
    {match: "CM Punk Vs AJ Styles", type: "Extreme Rules"},
    {match: "Dragon Lee Vs Ilja Dragonov Vs Baron Corbin", title:"Intercontinetal Championship", type:"Triple Threat"},
    {match: "Naomi Vs Becky Lynch", title:"Women's World Championship", type:"Normal"},
    {match: "Gunther Vs Drew Mcintyre", title:"World Heavyweight Championship", type:"Normal"},
    {match: "Roxanne Perez Vs Tiffany Stratton", title:"Women's Undisputed Championship", type:"Normal"},
    {match: "Roman Reigns Vs Randy Orton", title:"WWE Undisputed Championship", type:"Extreme Rules"},
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
            src="/src/Images/PPV/NoMercy/NoMercyHeader.png"
            alt="NoMercy Banner"
          />

          <div className="PPVInfo">
            <div className="PPVLocation">
              <strong>Location:</strong> State Farm Arena, Atlanta, Georgia
            </div>
            <div className="PPVDate">
              <strong>Date/Time:</strong> Saturday, September 20th 2025
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
                  src={`src/Images/PPV/NoMercy/2025MC/M${index + 1}.png`}
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

export default NoMercy;
