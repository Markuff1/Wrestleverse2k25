import React, { useState, useEffect } from "react";
import "./WeeklyShow.css";
import Header from "./Header";
import Footer from "./Footer";

const tabs = ["ALL", "Men", "Women", "Tag Teams", "Champions", "GM"];

const RAWData: Record<
  string,
  { className: string; src: string; name: string; gender?: string; Champion?: string }[]
> = {
  Men: [],
  Women: [],
  "Tag Teams": [
    { className: "ALLRAW", src: "/src/Images/Roster/TagTeam/AlphaAcadamy.png", name: "Alpha Acadamy" },
    { className: "ALLRAW", src: "/src/Images/Roster/TagTeam/ChaseU.png", name: "Chase U" },
    { className: "ALLRAW", src: "/src/Images/Roster/TagTeam/DIY.png", name: "DIY", Champion:"RAWTT"},
    { className: "ALLRAW", src: "/src/Images/Roster/TagTeam/Gallus.png", name: "Gallus" },
    { className: "ALLRAW", src: "/src/Images/Roster/TagTeam/Lorenzo&D'Angelo.png", name: "Lorenzo & D'Angelo" },
    { className: "ALLRAW", src: "/src/Images/Roster/TagTeam/LWO.png", name: "LWO" },
    { className: "ALLRAW", src: "/src/Images/Roster/TagTeam/NewBloodline.png", name: "New Bloodline" },
    { className: "ALLRAW", src: "/src/Images/Roster/TagTeam/NewDay.png", name: "New Day" },
    { className: "ALLRAW", src: "/src/Images/Roster/TagTeam/OC.png", name: "OC" },
    { className: "ALLRAW", src: "/src/Images/Roster/TagTeam/StreetProfits.png", name: "Street Profits" },
  ],
  Champions: [],
  GM: [
    { className: "ALLRAW", src: "/src/Images/Roster/TheRock.png", name: "The Rock", gender: "Man"},
  ]
};

// Populate ALL tab
RAWData.ALL = [
  { className: "ALLRAW", src: "/src/Images/Roster/AJStyles.png", name: "AJ Styles", gender: "Man",},
  { className: "ALLRAW", src: "/src/Images/Roster/AkiraTozawa.png", name: "Akira Tozawa", gender: "Man"},
  { className: "ALLRAW", src: "/src/Images/Roster/AlbaFyre.png", name: "Alba Fyre", gender: "Women"},
  { className: "ALLRAW", src: "/src/Images/Roster/AndreChase.png", name: "Andre Chase", gender: "Man"},
  { className: "ALLRAW", src: "/src/Images/Roster/AngeloDawkins.png", name: "Angelo Dawkins", gender: "Man"},
  { className: "ALLRAW", src: "/src/Images/Roster/ApolloCrews.png", name: "Apollo Crews", gender: "Man"},
  { className: "ALLRAW", src: "/src/Images/Roster/Axiom.png", name: "Axiom", gender: "Man"},
  { className: "ALLRAW", src: "/src/Images/Roster/B-Fab.png", name: "B Fab", gender: "Women"},
  { className: "ALLRAW", src: "/src/Images/Roster/Batista.png", name: "Batista", gender: "Man"},
  { className: "ALLRAW", src: "/src/Images/Roster/Bayley.png", name: "Bayley", gender: "Women"},
  { className: "ALLRAW", src: "/src/Images/Roster/BronBreakker.png", name: "Bron Breakker", gender: "Man"},
  { className: "ALLRAW", src: "/src/Images/Roster/BronsonReed.png", name: "Bronson Reed", gender: "Man"},
  { className: "ALLRAW", src: "/src/Images/Roster/BrooksJensen.png", name: "Brooks Jensen", gender: "Man"},
  { className: "ALLRAW", src: "/src/Images/Roster/BrutusCreed.png", name: "Brutus Creed", gender: "Man"},
  { className: "ALLRAW", src: "/src/Images/Roster/CandiceLeRae.png", name: "Candice LeRae", gender: "Women"},
  { className: "ALLRAW", src: "/src/Images/Roster/Carlito.png", name: "Carlito", gender: "Man"},
  { className: "ALLRAW", src: "/src/Images/Roster/ChadGable.png", name: "Chad Gable", gender: "Man"},
  { className: "ALLRAW", src: "/src/Images/Roster/CharlieDempsey.png", name: "Charlie Dempsey", gender: "Man"},
  { className: "ALLRAW", src: "/src/Images/Roster/CharlotteFlair.png", name: "Charlotte Flair", gender: "Women", },
  { className: "ALLRAW", src: "/src/Images/Roster/ChelseaGreen.png", name: "Chelsea Green", gender: "Women"},
  { className: "ALLRAW", src: "/src/Images/Roster/CMPunk.png", name: "CM Punk", gender: "Man"},
  { className: "ALLRAW", src: "/src/Images/Roster/CoraJade.png", name: "Cora Jade", gender: "Women"},
  { className: "ALLRAW", src: "/src/Images/Roster/CruzDelToro.png", name: "Cruz Del Toro", gender: "Man"},
  { className: "ALLRAW", src: "/src/Images/Roster/DakotaKai.png", name: "Dakota Kai", gender: "Women"},
  { className: "ALLRAW", src: "/src/Images/Roster/DukeHudson.png", name: "Duke Hudson", gender: "Man"},
  { className: "ALLRAW", src: "/src/Images/Roster/EthanPage.png", name: "Ethan Page", gender: "Man"},
  { className: "ALLRAW", src: "/src/Images/Roster/EveTorres.png", name: "Eve Torres", gender: "Women"},
  { className: "ALLRAW", src: "/src/Images/Roster/FallonHenley.png", name: "Fallon Henley", gender: "Women"},
  { className: "ALLRAW", src: "/src/Images/Roster/IndiHartwell.png", name: "Indi Hartwell", gender: "Women"},
  { className: "ALLRAW", src: "/src/Images/Roster/IvyNile.png", name: "Ivy Nile", gender: "Women"},
  { className: "ALLRAW", src: "/src/Images/Roster/JacyJayne.png", name: "Jacy Jayne", gender: "Women"},
  { className: "ALLRAW", src: "/src/Images/Roster/JaidaParker.png", name: "Jaida Parker", gender: "Women"},
  { className: "ALLRAW", src: "/src/Images/Roster/JeyUso.png", name: "Jey Uso", gender: "Man"},
  { className: "ALLRAW", src: "/src/Images/Roster/JoaquinWilde.png", name: "Joaquin Wilde", gender: "Man"},
  { className: "ALLRAW", src: "/src/Images/Roster/JoeCoffey.png", name: "Joe Coffey", gender: "Man"},
  { className: "ALLRAW", src: "/src/Images/Roster/JohnnyGargano.png", name: "Johnny Gargano", gender: "Man"},
  { className: "ALLRAW", src: "/src/Images/Roster/JoshBriggs.png", name: "Josh Briggs", gender: "Man"},
  { className: "ALLRAW", src: "/src/Images/Roster/JuliusCreed.png", name: "Julius Creed", gender: "Man"},
  { className: "ALLRAW", src: "/src/Images/Roster/Kane.png", name: "Kane", gender: "Man"},
  { className: "ALLRAW", src: "/src/Images/Roster/KarlAnderson.png", name: "Karl Anderson", gender: "Man"},
  { className: "ALLRAW", src: "/src/Images/Roster/KarrionKross.png", name: "Karrion Kross", gender: "Man"},
  { className: "ALLRAW", src: "/src/Images/Roster/KelaniJordan.png", name: "Kelani Jordan", gender: "Women"},
  { className: "ALLRAW", src: "/src/Images/Roster/KianaJames.png", name: "Kiana James", gender: "Women"},
  { className: "ALLRAW", src: "/src/Images/Roster/KofiKingston.png", name: "Kofi Kingston", gender: "Man"},
  { className: "ALLRAW", src: "/src/Images/Roster/LAKnight.png", name: "LA Knight", gender: "Man"},
  { className: "ALLRAW", src: "/src/Images/Roster/LoganPaul.png", name: "Logan Paul", gender: "Man"},
  { className: "ALLRAW", src: "/src/Images/Roster/LudwigKaiser.png", name: "Ludwig Kaiser", gender: "Man"},
  { className: "ALLRAW", src: "/src/Images/Roster/LukeGallows.png", name: "Luke Gallows", gender: "Man"},
  { className: "ALLRAW", src: "/src/Images/Roster/LyraValkyria.png", name: "Lyra Valkyria", gender: "Women"},
  { className: "ALLRAW", src: "/src/Images/Roster/MarkCoffey.png", name: "Mark Coffey", gender: "Man"},
  { className: "ALLRAW", src: "/src/Images/Roster/MaxxineDupri.png", name: "Maxxine Dupri", gender: "Women"},
  { className: "ALLRAW", src: "/src/Images/Roster/MichelleMcCool.png", name: "Michelle McCool", gender: "Women"},
  { className: "ALLRAW", src: "/src/Images/Roster/MontezFord.png", name: "Montez Ford", gender: "Man"},
  { className: "ALLRAW", src: "/src/Images/Roster/Natalya.png", name: "Natalya", gender: "Women"},
  { className: "ALLRAW", src: "/src/Images/Roster/NathanFrazer.png", name: "Nathan Frazer", gender: "Man"},
  { className: "ALLRAW", src: "/src/Images/Roster/NiaJax.png", name: "Nia Jax", gender: "Women"},
  { className: "ALLRAW", src: "/src/Images/Roster/NikkitaLyons.png", name: "Nikkita Lyons", gender: "Women"},
  { className: "ALLRAW", src: "/src/Images/Roster/NoamDar.png", name: "Noam Dar", gender: "Man"},
  { className: "ALLRAW", src: "/src/Images/Roster/ObaFemi.png", name: "Oba Femi", gender: "Man", Champion: "US"},
  { className: "ALLRAW", src: "/src/Images/Roster/OroMensah.png", name: "Oro Mensah", gender: "Man"},
  { className: "ALLRAW", src: "/src/Images/Roster/Otis.png", name: "Otis", gender: "Man"},
  { className: "ALLRAW", src: "/src/Images/Roster/PiperNiven.png", name: "Piper Niven", gender: "Women", Champion: "WIC"},
  { className: "ALLRAW", src: "/src/Images/Roster/R-Truth.png", name: "R-Truth", gender: "Man"},
  { className: "ALLRAW", src: "/src/Images/Roster/RandyOrton.png", name: "Randy Orton", gender: "Man", Champion:"UC"},
  { className: "ALLRAW", src: "/src/Images/Roster/TheRock.png", name: "The Rock", gender: "Man"},
  { className: "ALLRAW", src: "/src/Images/Roster/RobVanDam.png", name: "Rob Van Dam", gender: "Man"},
  { className: "ALLRAW", src: "/src/Images/Roster/RomanReigns.png", name: "Roman Reigns", gender: "Man"},
  { className: "ALLRAW", src: "/src/Images/Roster/RoxannePerez.png", name: "Roxanne Perez", gender: "Women", Champion: "WUC"},
  { className: "ALLRAW", src: "/src/Images/Roster/SamiZayn.png", name: "Sami Zayn", gender: "Man"},
  { className: "ALLRAW", src: "/src/Images/Roster/SantosEscobar.png", name: "Santos Escobar", gender: "Man"},
  { className: "ALLRAW", src: "/src/Images/Roster/Scarlett.png", name: "Scarlett", gender: "Women"},
  { className: "ALLRAW", src: "/src/Images/Roster/ShaynaBaszler.png", name: "Shayna Baszler", gender: "Women"},
  { className: "ALLRAW", src: "/src/Images/Roster/Sheamus.png", name: "Sheamus", gender: "Man"},
  { className: "ALLRAW", src: "/src/Images/Roster/SoloSikoa.png", name: "Solo Sikoa", gender: "Man"},
  { className: "ALLRAW", src: "/src/Images/Roster/TamaTonga.png", name: "Tama Tonga", gender: "Man"},
  { className: "ALLRAW", src: "/src/Images/Roster/Tamina.png", name: "Tamina", gender: "Women"},
  { className: "ALLRAW", src: "/src/Images/Roster/TheaHail.png", name: "Thea Hail", gender: "Women"},
  { className: "ALLRAW", src: "/src/Images/Roster/TiffanyStratton.png", name: "Tiffany Stratton", gender: "Women"},
  { className: "ALLRAW", src: "/src/Images/Roster/TommasoCiampa.png", name: "Tommaso Ciampa", gender: "Man"},
  { className: "ALLRAW", src: "/src/Images/Roster/TongaLoa.png", name: "Tonga Loa", gender: "Man"},
  { className: "ALLRAW", src: "/src/Images/Roster/TrickWilliams.png", name: "Trick Williams", gender: "Man"},
  { className: "ALLRAW", src: "/src/Images/Roster/TylerBreeze.png", name: "Tyler Breeze", gender: "Man"},
  { className: "ALLRAW", src: "/src/Images/Roster/Umaga.png", name: "Umaga", gender: "Man"},
  { className: "ALLRAW", src: "/src/Images/Roster/WadeBarrett.png", name: "Wade Barrett", gender: "Man"},
  { className: "ALLRAW", src: "/src/Images/Roster/WendyChoo.png", name: "Wendy Choo", gender: "Women"},
  { className: "ALLRAW", src: "/src/Images/Roster/WesLee.png", name: "Wes Lee", gender: "Man"},
  { className: "ALLRAW", src: "/src/Images/Roster/Wolfgang.png", name: "Wolfgang", gender: "Man"},
  { className: "ALLRAW", src: "/src/Images/Roster/XavierWoods.png", name: "Xavier Woods", gender: "Man"},
  { className: "ALLRAW", src: "/src/Images/Roster/ZelinaVega.png", name: "ZelinaVega", gender: "Women"},
  { className: "ALLRAW", src: "/src/Images/Roster/ZoeyStark.png", name: "Zoey Stark", gender: "Women"},
];

// Function to dynamically update Men and Women tabs, and Champions tab
const updateGenderTabs = () => {
  RAWData.Men = RAWData.ALL.filter((item) => item.gender === "Man");
  RAWData.Women = RAWData.ALL.filter((item) => item.gender === "Women");

  // Update the Champions tab with any items that have the 'Champion' tag
  RAWData.Champions = RAWData.ALL.filter((item) => item.Champion);
};

// Update gender tabs initially
updateGenderTabs();

const RAWTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState("ALL");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(RAWData);

  // Function to filter wrestlers by tab and search term
  const filteredRAW = (tab: string) => {
    return (
      RAWData[tab]?.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      ) || []
    );
  };

  // Update filtered data when searchTerm changes
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
                }, [] as { className: string; src: string; name: string; Champion?: string }[][])
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

