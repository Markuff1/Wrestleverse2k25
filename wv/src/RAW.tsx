import React, { useState, useEffect } from "react";
import "./WeeklyShow.css";
import Header from "./Header";
import Footer from "./Footer";
import rosterData from "./RosterData"; // ✅ Import from RosterData.ts

const tabs = ["ALL", "Men", "Women", "Tag Teams", "Champions", "GM"];

const RAWData: Record<
  string,
  {
    className: string;
    src: string;
    name: string;
    gender?: string;
    Champion?: string;
    championRank?: number;
  }[]
> = {
  ALL: [],
  Men: [],
  Women: [],
  "Tag Teams": [
    { className: "ALLRAW", src: "/src/Images/Roster/TagTeam/AlphaAcadamy.png", name: "Alpha Acadamy" },
    { className: "ALLRAW", src: "/src/Images/Roster/TagTeam/ChaseU.png", name: "Chase U" },
    { className: "ALLRAW", src: "/src/Images/Roster/TagTeam/DIY.png", name: "DIY" },
    { className: "ALLRAW", src: "/src/Images/Roster/TagTeam/Gallus.png", name: "Gallus" },
    { className: "ALLRAW", src: "/src/Images/Roster/TagTeam/Lorenzo&D'Angelo.png", name: "Lorenzo & D'Angelo" },
    { className: "ALLRAW", src: "/src/Images/Roster/TagTeam/LWO.png", name: "LWO" },
    { className: "ALLRAW", src: "/src/Images/Roster/TagTeam/NewBloodline.png", name: "New Bloodline" },
    { className: "ALLRAW", src: "/src/Images/Roster/TagTeam/NewDay.png", name: "New Day" },
    { className: "ALLRAW", src: "/src/Images/Roster/TagTeam/OC.png", name: "OC" ,Champion: "RAWTT"},
    { className: "ALLRAW", src: "/src/Images/Roster/TagTeam/StreetProfits.png", name: "Street Profits" },
  ],
  Champions: [],
  GM: [
    { className: "ALLRAW", src: "/src/Images/Roster/TheRock.png", name: "The Rock", gender: "Man" },
  ]
};

// ✅ Populate RAWData.ALL from rosterData.ALL with tag === "R"
RAWData.ALL = rosterData.ALL
  .filter((item) => item.tag === "R")
  .map((item) => ({
    className: "ALLRAW",
    src: item.src,
    name: item.name,
    gender: item.gender,
    Champion: item.champion ?? undefined,
    championRank: item.championRank ?? undefined,
  }))
  .sort((a, b) => a.name.localeCompare(b.name));

// ✅ Sort Men, Women, Champions
const updateGenderTabs = () => {
  RAWData.Men = RAWData.ALL.filter((item) => item.gender === "Man");
  RAWData.Women = RAWData.ALL.filter((item) => item.gender === "Women");
  RAWData.Champions = RAWData.ALL
    .filter((item) => item.Champion)
    .sort((a, b) => (a.championRank ?? 999) - (b.championRank ?? 999));
};

updateGenderTabs();

const RAWTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState("ALL");
  const [searchTerm, setSearchTerm] = useState("");
  const [, setFilteredData] = useState(RAWData);

  const filteredRAW = (tab: string) => {
    return (
      RAWData[tab]?.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      ) || []
    );
  };

  useEffect(() => {
    updateGenderTabs();
    const updatedData = { ...RAWData };

    for (let tab of tabs) {
      updatedData[tab] = RAWData[tab].filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredData(updatedData);
  }, [searchTerm]);

  return (
    <>
      <Header />
      <div className="RAWBackground">
        <div className="RAWContainer">
          <img className="RAWBanner" src="/src/Images/RAWHeader.png" alt="RAW Header" />
          <div className="RAWInfo">
            <div className="RAWLocation">Location: Arena Near You</div>
            <div className="RAWDate">Date/Time: Every Monday Night</div>
          </div>
          <div className="RAWText1">Monday Night RAW</div>
          <div className="RAWText2">
            Monday Night’s flagship WWE show delivers top superstars, thrilling matches, and exciting storylines every
            week.
          </div>

          <input
            type="text"
            placeholder="Search for a wrestler..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="RAWsearchBar"
          />
          <div className="RAWTab">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`RAWtablinks ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab} ({filteredRAW(tab).length})
              </button>
            ))}
          </div>

          {tabs.map((tab) => (
            <div key={tab} className="RAWtabcontent" style={{ display: activeTab === tab ? "block" : "none" }}>
              <div className="RAWText3">Current {tab} Roster</div>
              {filteredRAW(tab)
                ?.reduce((acc, item, index) => {
                  const groupSize = tab === "Champions" ? 4 : 6;
                  if (index % groupSize === 0) acc.push([]);
                  acc[acc.length - 1].push(item);
                  return acc;
                }, [] as typeof RAWData.ALL[][])
                .map((group, groupIndex) => (
                  <div key={groupIndex} className="centerRoster">
                    {group.map((item, index) => (
                      <img
                        key={index}
                        className={`RAW-image ${item.Champion || "ALLRAW"}`}
                        src={item.src}
                        alt={item.name}
                        title={item.name}
                      />
                    ))}
                  </div>
                ))}
            </div>
          ))}
          <div className="RAWText1">.....</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RAWTabs;
