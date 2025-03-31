import React from "react";
import "./Summerslam.css";
import Header from "../../Header";
import Footer from "../../Footer";

function Summerslam() {
  const matchCard = [
    { match: "Sheamus Def. Jey Uso", title: "US Title", type: "Singles Match" },
  ];

  return (
    <>
      <Header />
      <div className="SummerslamBackground">
        <div className="SummerslamContainer">
          <img
            className="SummerslamBanner"
            src="/src/Images/PPV/Summerslam/SummerslamHeader.png"
            alt="Summerslam Banner"
          />

          <div className="SummerslamInfo">
            <div className="SummerslamLocation">
              <strong>Location:</strong> Allstate Arena, Rosemont, Illinois
            </div>
            <div className="SummerslamDate">
              <strong>Date/Time:</strong> Saturday, May 24th, 2025
            </div>
          </div>

          <div className="MCTitle">Match Card</div>
          <table className="MCList">
            <thead>
              <tr>
                <th>Match</th>
                <th>Title</th>
                <th>Match Type</th>
              </tr>
            </thead>
            <tbody>
              {matchCard.map((match, index) => (
                <tr key={index}>
                  <td>{match.match}</td>
                  <td>{match.title}</td>
                  <td>{match.type}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="MCTitle">Match Card Summary</div>
          <div className="MatchImages">
            {matchCard.map((match, index) => (
              <div key={index} className="MatchItem">
                <h3 className="MatchTitle">{match.match}</h3>
                <img
                  className="MatchImage"
                  src={`src/Images/PPV/Summerslam/2025MC/M${index + 1}.png`}
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

export default Summerslam;
