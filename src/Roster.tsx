import React, { useState } from "react";
import "./Roster.css";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import ChampionshipBar from "./ChampionshipBar.tsx";
import rosterData, { Wrestler } from "./RosterData.ts";

const tabs = [
  "ALL", "Raw", "Smackdown", "Legend", "Undrafted", "GM", "Champions", "Men", "Women", "Tag Teams"
];

const RosterTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState("ALL");
  const [searchTerm, setSearchTerm] = useState("");

  // Function to filter wrestlers by tab and search term
  const filteredRoster = (tab: string) => {
    if (tab === "ALL") {
      rosterData.RAW = rosterData.ALL.filter(item => item.tag === "R");
      rosterData.SMACKDOWN = rosterData.ALL.filter(item => item.tag === "SD");
      rosterData.Legend = rosterData.ALL.filter(item => item.tag === "L");
      rosterData.Undrafted = rosterData.ALL.filter(item => item.tag === "UNDRAFTED");
      rosterData.Men = rosterData.ALL.filter(item => item.gender === "Man");
      rosterData.Women = rosterData.ALL.filter(item => item.gender === "Women");
      rosterData.GM = rosterData.ALL.filter(item => item.tag2 === "GM");
      rosterData.Champions = rosterData.ALL.filter(item => item.champion);
    }

    let filteredData = rosterData[tab]?.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Sort Champions tab by championRank if available
    if (tab === "Champions" && filteredData) {
      filteredData = [...filteredData].sort((a, b) => (a.championRank ?? 999) - (b.championRank ?? 999));
    }

    return filteredData;
  };

  return (
    <>
      <Header />
      <div className="RosterBackground">
        <div className="RosterContainer">
          <img className="RBanner" src="/src/Images/RosterHeader.png" alt="Roster Header" />

          <ChampionshipBar />

          {/* Tab list */}
          <div className="Generaltab">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`tablinks ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {`${tab} (${rosterData[tab]?.length || 0})`}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <input
            type="text"
            placeholder="Search for a wrestler..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="searchBar"
          />

          {tabs.map((tab) => (
            <div key={tab} className="tabcontent" style={{ display: activeTab === tab ? "block" : "none" }}>
              <div className="RosterText1">{`${tab} Roster`}</div>
              {filteredRoster(tab)
                ?.reduce((acc, item, index) => {
                  const groupSize = tab === "Champions" ? 4 : 6;
                  if (index % groupSize === 0) acc.push([]);
                  acc[acc.length - 1].push(item);
                  return acc;
                }, [] as Wrestler[][])
                .map((group, groupIndex) => (
                  <div key={groupIndex} className="centerRoster">
                    {group.map((item, index) => (
                      <img 
                        key={index} 
                        className={`roster-image ${item.className}`} 
                        src={item.src} 
                        alt={item.name} 
                        title={item.name} 
                      />
                    ))}
                  </div>
                ))}
            </div>
          ))}
          <div className="RosterText1">.....</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RosterTabs;
