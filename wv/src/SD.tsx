import React, { useState, useEffect } from "react";
import "./WeeklyShow.css";
import Header from "./Header";
import Footer from "./Footer";

const tabs = ["ALL", "Men", "Women", "Tag Teams", "Champions", "GM"];

const SDData: Record<
  string,
  { className: string; src: string; name: string; gender?: string; Champion?: string }[]
> = {
  Men: [],
  Women: [],
  "Tag Teams": [
    { className: 'ALLSD ',src: "/src/Images/Roster/TagTeam/AmericanMade.png", name: "American Made"},
    { className: 'ALLSD ',src: "/src/Images/Roster/TagTeam/Angel&Berto.png", name: "Angel & Berto"},
    { className: 'ALLSD ',src: "/src/Images/Roster/TagTeam/AOP.png", name: "AOP"},
    { className: 'ALLSD ',src: "/src/Images/Roster/TagTeam/DudleyBoys.png", name: "Dudley Boys"},
    { className: 'ALLSD ',src: "/src/Images/Roster/TagTeam/JudgementDay.png", name: "Judgement Day"},
    { className: 'ALLSD ',src: "/src/Images/Roster/TagTeam/NCR.png", name: "New Catch Republic", Champion:"SDTT"},
    { className: 'ALLSD ',src: "/src/Images/Roster/TagTeam/PrettyDeadly.png", name: "Pretty Deadly"},
    { className: 'ALLSD ',src: "/src/Images/Roster/TagTeam/Theory&Waller.png", name: "Theory & Waller"},
    { className: 'ALLSD ',src: "/src/Images/Roster/TagTeam/VikingRaiders.png", name: "Viking Raiders"},
    { className: 'ALLSD ',src: "/src/Images/Roster/TagTeam/WyattSix.png", name: "Wyatt Six"},
  ],
  Champions: [],
  GM: [
    { className: "ALLSD", src: "/src/Images/Roster/WilliamRegal.png", name: "William Regal", gender: "Man"},
  ]
};

// Populate ALL tab
SDData.ALL = [
  { className: "ALLSD", src: "/src/Images/Roster/Akam.png", name: "Akam", gender: "Man", },
  { className: "ALLSD", src: "/src/Images/Roster/AlexaBliss.png", name: "Alexa Bliss", gender: "Women", },
  { className: "ALLSD", src: "/src/Images/Roster/Andrade.png", name: "Andrade", gender: "Man"},
  { className: "ALLSD", src: "/src/Images/Roster/Angel.png", name: "Angel", gender: "Man", },
  { className: "ALLSD", src: "/src/Images/Roster/AshanteTheeAdonis.png", name: "Ashante Thee Adonis", gender: "Man", },
  { className: "ALLSD", src: "/src/Images/Roster/Asuka.png", name: "Asuka", gender: "Women", },
  { className: "ALLSD", src: "/src/Images/Roster/AustinTheory.png", name: "Austin Theory", gender: "Man", },
  { className: "ALLSD", src: "/src/Images/Roster/BaronCorbin.png", name: "Baron Corbin", gender: "Man", Champion:"IC" },
  { className: "ALLSD", src: "/src/Images/Roster/BeckyLynch.png", name: "Becky Lynch", gender: "Women", },
  { className: "ALLSD", src: "/src/Images/Roster/Berto.png", name: "Berto", gender: "Man", },
  { className: "ALLSD", src: "/src/Images/Roster/BiancaBelair.png", name: "Bianca Belair", gender: "Women", },
  { className: "ALLSD", src: "/src/Images/Roster/BigE.png", name: "Big E", gender: "Man", },
  { className: "ALLSD", src: "/src/Images/Roster/BlairDavenport.png", name: "Blair Davenport", gender: "Women", },
  { className: "ALLSD", src: "/src/Images/Roster/BraunStrowman.png", name: "Braun Strowman", gender: "Man", },
  { className: "ALLSD", src: "/src/Images/Roster/BrayWyatt.png", name: "Bray Wyatt", gender: "Man", },
  { className: "ALLSD", src: "/src/Images/Roster/BubbaRayDudley.png", name: "Bubba Ray Dudley", gender: "Man", },
  { className: "ALLSD", src: "/src/Images/Roster/Carmella.png", name: "Carmella", gender: "Women", },
  { className: "ALLSD", src: "/src/Images/Roster/CarmeloHayes.png", name: "Carmelo Hayes", gender: "Man", },
  { className: "ALLSD", src: "/src/Images/Roster/CedricAlexander.png", name: "Cedric Alexander", gender: "Man", },
  { className: "ALLSD", src: "/src/Images/Roster/ChanningLorenzo.png", name: "Channing Lorenzo", gender: "Man", },
  { className: "ALLSD", src: "/src/Images/Roster/CodyRhodes.png", name: "Cody Rhodes", gender: "Man", Champion: "WH"},
  { className: "ALLSD", src: "/src/Images/Roster/D-VonDudley.png", name: "D-Von Dudley", gender: "Man", },
  { className: "ALLSD", src: "/src/Images/Roster/DamianPriest.png", name: "Damian Priest", gender: "Man", },
  { className: "ALLSD", src: "/src/Images/Roster/DexterLumis.png", name: "Dexter Lumis", gender: "Man", },
  { className: "ALLSD", src: "/src/Images/Roster/DominikMysterio.png", name: "Dominik Mysterio", gender: "Man", },
  { className: "ALLSD", src: "/src/Images/Roster/DragonLee.png", name: "Dragon Lee", gender: "Man" },
  { className: "ALLSD", src: "/src/Images/Roster/DrewMcintyre.png", name: "Drew Mcintyre", gender: "Man"},
  { className: "ALLSD", src: "/src/Images/Roster/EddyThorpe.png", name: "Eddy Thorpe", gender: "Man", },
  { className: "ALLSD", src: "/src/Images/Roster/ElektraLopez.png", name: "Elektra Lopez", gender: "Women", },
  { className: "ALLSD", src: "/src/Images/Roster/EltonPrince.png", name: "Elton Prince", gender: "Man", },
  { className: "ALLSD", src: "/src/Images/Roster/ErickRowan.png", name: "Erick Rowan", gender: "Man", },
  { className: "ALLSD", src: "/src/Images/Roster/Erik.png", name: "Erik", gender: "Man", },
  { className: "ALLSD", src: "/src/Images/Roster/FinnBalor.png", name: "Finn Balor", gender: "Man", },
  { className: "ALLSD", src: "/src/Images/Roster/GigiDolin.png", name: "Gigi Dolin", gender: "Women", },
  { className: "ALLSD", src: "/src/Images/Roster/GiovanniVinci.png", name: "Giovanni Vinci", gender: "Man", },
  { className: "ALLSD", src: "/src/Images/Roster/GraysonWaller.png", name: "Grayson Waller", gender: "Man", },
  { className: "ALLSD", src: "/src/Images/Roster/Gunther.png", name: "Gunther", gender: "Man", },
  { className: "ALLSD", src: "/src/Images/Roster/IljaDragunov.png", name: "Ilja Dragunov", gender: "Man", },
  { className: "ALLSD", src: "/src/Images/Roster/IslaDawn.png", name: "Isla Dawn", gender: "Women", },
  { className: "ALLSD", src: "/src/Images/Roster/Ivar.png", name: "Ivar", gender: "Man", },
  { className: "ALLSD", src: "/src/Images/Roster/IyoSky.png", name: "Iyo Sky", gender: "Women", },
  { className: "ALLSD", src: "/src/Images/Roster/JacobFatu.png", name: "Jacob Fatu", gender: "Man", },
  { className: "ALLSD", src: "/src/Images/Roster/JadeCargill.png", name: "Jade Cargill", gender: "Women", },
  { className: "ALLSD", src: "/src/Images/Roster/JakaraJackson.png", name: "Jakara Jackson", gender: "Women", },
  { className: "ALLSD", src: "/src/Images/Roster/JBL.png", name: "JBL", gender: "Man", },
  { className: "ALLSD", src: "/src/Images/Roster/JDMcdonagh.png", name: "JD Mcdonagh", gender: "Man", },
  { className: "ALLSD", src: "/src/Images/Roster/Je'vonEvans.png", name: "Je'von Evans", gender: "Man", },
  { className: "ALLSD", src: "/src/Images/Roster/JimmyUso.png", name: "Jimmy Uso", gender: "Man", },
  { className: "ALLSD", src: "/src/Images/Roster/JoeGacy.png", name: "Joe Gacy", gender: "Man", },
  { className: "ALLSD", src: "/src/Images/Roster/JohnCena.png", name: "John Cena", gender: "Man", },
  { className: "ALLSD", src: "/src/Images/Roster/KairiSane.png", name: "Kairi Sane", gender: "Women", },
  { className: "ALLSD", src: "/src/Images/Roster/KatanaChance.png", name: "Katana Chance", gender: "Women", },
  { className: "ALLSD", src: "/src/Images/Roster/KaydenCarter.png", name: "Kayden Carter", gender: "Women", },
  { className: "ALLSD", src: "/src/Images/Roster/KevinOwens.png", name: "Kevin Owens", gender: "Man"},
  { className: "ALLSD", src: "/src/Images/Roster/KitWilson.png", name: "Kit Wilson", gender: "Man", },
  { className: "ALLSD", src: "/src/Images/Roster/KurtAngle.png", name: "Kurt Angle", gender: "Man", },
  { className: "ALLSD", src: "/src/Images/Roster/LashLegend.png", name: "Lash Legend", gender: "Women", },
  { className: "ALLSD", src: "/src/Images/Roster/LexisKing.png", name: "Lexis King", gender: "Man", },
  { className: "ALLSD", src: "/src/Images/Roster/Lita.png", name: "Lita", gender: "Women", },
  { className: "ALLSD", src: "/src/Images/Roster/LivMorgan.png", name: "Liv Morgan", gender: "Women", Champion: "WMITB" },
  { className: "ALLSD", src: "/src/Images/Roster/LolaVice.png", name: "Lola Vice", gender: "Women", },
  { className: "ALLSD", src: "/src/Images/Roster/Michin.png", name: "Michin", gender: "Women", },
  { className: "ALLSD", src: "/src/Images/Roster/Naomi.png", name: "Naomi", gender: "Women", Champion:"WWH"},
  { className: "ALLSD", src: "/src/Images/Roster/NikkiCross.png", name: "Nikki Cross", gender: "Women", },
  { className: "ALLSD", src: "/src/Images/Roster/Omos.png", name: "Omos", gender: "Man", },
  { className: "ALLSD", src: "/src/Images/Roster/PeteDunne.png", name: "Pete Dunne", gender: "Man", },
  { className: "ALLSD", src: "/src/Images/Roster/RaquelRodriguez.png", name: "Raquel Rodriguez", gender: "Women", Champion:"WUS" },
  { className: "ALLSD", src: "/src/Images/Roster/ReyMysterio.png", name: "Rey Mysterio", gender: "Man", },
  { className: "ALLSD", src: "/src/Images/Roster/Rezar.png", name: "Rezar", gender: "Man", },
  { className: "ALLSD", src: "/src/Images/Roster/RheaRipley.png", name: "Rhea Ripley", gender: "Women", },
  { className: "ALLSD", src: "/src/Images/Roster/RidgeHolland.png", name: "Ridge Holland", gender: "Man", },
  { className: "ALLSD", src: "/src/Images/Roster/SethRollins.png", name: "Seth Rollins", gender: "Man", },
  { className: "ALLSD", src: "/src/Images/Roster/ShawnMichaels.png", name: "Shawn Michaels", gender: "Man", },
  { className: "ALLSD", src: "/src/Images/Roster/ShawnSpears.png", name: "Shawn Spears", gender: "Man", },
  { className: "ALLSD", src: "/src/Images/Roster/ShinsukeNakamura.png", name: "Shinsuke Nakamura", gender: "Man", },
  { className: "ALLSD", src: "/src/Images/Roster/Shotzi.png", name: "Shotzi", gender: "Women", },
  { className: "ALLSD", src: "/src/Images/Roster/SolRuca.png", name: "Sol Ruca", gender: "Women", },
  { className: "ALLSD", src: "/src/Images/Roster/SonyaDeville.png", name: "Sonya Deville", gender: "Women", },
  { className: "ALLSD", src: "/src/Images/Roster/TatumPaxley.png", name: "Tatum Paxley", gender: "Women", },
  { className: "ALLSD", src: "/src/Images/Roster/TeganNox.png", name: "Tegan Nox", gender: "Women", },
  { className: "ALLSD", src: "/src/Images/Roster/TheFiend.png", name: "The Fiend", gender: "Man", },
  { className: "ALLSD", src: "/src/Images/Roster/TheMiz.png", name: "The Miz", gender: "Man", },
  { className: "ALLSD", src: "/src/Images/Roster/TonyD'Angelo.png", name: "Tony D'Angelo", gender: "Man", },
  { className: "ALLSD", src: "/src/Images/Roster/TrishStratus.png", name: "Trish Stratus", gender: "Women", },
  { className: "ALLSD", src: "/src/Images/Roster/TylerBate.png", name: "Tyler Bate", gender: "Man", },
  { className: "ALLSD", src: "/src/Images/Roster/UncleHowdy.png", name: "Uncle Howdy", gender: "Man", },
  { className: "ALLSD", src: "/src/Images/Roster/Valhalla.png", name: "Valhalla", gender: "Women", },
  { className: "ALLSD", src: "/src/Images/Roster/WilliamRegal.png", name: "William Regal", gender: "Man"},
];

// Function to dynamically update Men and Women tabs, and Champions tab
const updateGenderTabs = () => {
  SDData.Men = SDData.ALL.filter((item) => item.gender === "Man");
  SDData.Women = SDData.ALL.filter((item) => item.gender === "Women");

  // Update the Champions tab with any items that have the 'Champion' tag
  SDData.Champions = SDData.ALL.filter((item) => item.Champion);
};

// Update gender tabs initially
updateGenderTabs();

const SDTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState("ALL");
  const [searchTerm, setSearchTerm] = useState("");
  const [, setFilteredData] = useState(SDData);

  // Function to filter wrestlers by tab and search term
  const filteredSD = (tab: string) => {
    return (
      SDData[tab]?.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      ) || []
    );
  };

  // Update filtered data when searchTerm changes
  useEffect(() => {
    updateGenderTabs();
    const updatedData = { ...SDData };

    for (let tab of tabs) {
      updatedData[tab] = SDData[tab].filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredData(updatedData);
  }, [searchTerm]);

  return (
    <>
      <Header />
      <div className="SDBackground">
        <div className="SDContainer">
          <img className="SDBanner" src="/src/Images/SDHeader.png" alt="SD Header" />
          <div className="SDInfo">
            <div className="SDLocation">Location: Arena Near You</div>
            <div className="SDDate">Date/Time: Every Friday Night</div>
          </div>

          <div className="SDText1">Friday night Smackdown</div>
          <div className="SDText2">Friday night’s WWE spectacle brings high-energy action, intense rivalries, and unforgettable moments every week.</div>


          <input
            type="text"
            placeholder="Search for a wrestler..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="SDsearchBar"
          />
          <div className="SDTab">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`SDtablinks ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab} ({filteredSD(tab).length})
              </button>
            ))}
          </div>

          {tabs.map((tab) => (
            <div key={tab} className="SDtabcontent" style={{ display: activeTab === tab ? "block" : "none" }}>
              <div className="SDText3">Current {tab} Roster</div>
              {filteredSD(tab)
                ?.reduce((acc, item, index) => {
                  const groupSize = tab === "Champions" ? 4 : 6;
                  if (index % groupSize === 0) acc.push([]);
                  acc[acc.length - 1].push(item);
                  return acc;
                }, [] as { className: string; src: string; name: string; Champion?: string }[][])
                .map((group, groupIndex) => (
                  <div key={groupIndex} className="centerRoster">
                    {group.map((item, index) => (
                      <img
                        key={index}
                        className={`SD-image ${item.Champion || "ALLSD"}`}
                        src={item.src}
                        alt={item.name}
                        title={item.name}
                      />
                    ))}
                  </div>
                ))}
            </div>
          ))}
          <div className="SDText1">.....</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SDTabs;


