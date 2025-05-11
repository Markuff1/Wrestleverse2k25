import { useState } from "react";
import "./Draft.css";
import Header from "./Header";
import Footer from "./Footer";

function Draft() {
  const superstars: string[] = [
    "AJ Styles",
    "Akam",
    "Akira Tozawa",
    "Alba Fyre",
    "Alexa Bliss",
    "Andrade",
    "Andre Chase",
    "Angel",
    "Angelo Dawkins",
    "Apollo Crews",
    "Ashante Thee Adonis",
    "Asuka",
    "Austin Theory",
    "Axiom",
    "B-Fab",
    "Baron Corbin",
    "Batista",
    "Bayley",
    "Becky Lynch",
    "Berto",
    "Bianca Belair",
    "Big E",
    "Blair Davenport",
    "Boogeyman",
    "Booker T",
    "Braun Strowman",
    "Bray Wyatt",
    "Bron Breakker",
    "Bronson Reed",
    "Brooks Jensen",
    "Brutus Creed",
    "Bubba Ray Dudley",
    "Cactus Jack",
    "Candice LeRae",
    "Carlito",
    "Carmella",
    "Carmelo Hayes",
    "Cedric Alexander",
    "Chad Gable",
    "Channing Lorenzo",
    "Charlie Dempsey",
    "Charlotte Flair",
    "Chelsea Green",
    "Chyna",
    "CM Punk",
    "Cody Rhodes",
    "Cora Jade",
    "Cruz Del Toro",
    "Dakota Kai",
    "D-Von Dudley",
    "Damian Priest",
    "DDP",
    "Dexter Lumis",
    "Diesel",
    "Doink The Clown",
    "Dominik Mysterio",
    "Dragon Lee",
    "Drew Mcintyre",
    "Dude Love",
    "Duke Hudson",
    "Dusty Rhodes",
    "Eddie Guerrero",
    "Eddy Thorpe",
    "Elektra Lopez",
    "Elton Prince",
    "Eric Bischoff",
    "Erick Rowan",
    "Erik",
    "Ethan Page",
    "Eve Torres",
    "Faarooq",
    "Fallon Henley",
    "Finn Balor",
    "Gigi Dolin",
    "Giovanni Vinci",
    "Grayson Waller",
    "Gunther",
    "Hulk Hogan",
    "Honky Tonk Man",
    "Ilja Dragunov",
    "Indi Hartwell",
    "Isla Dawn",
    "Ivar",
    "Ivy Nile",
    "Iyo Sky",
    "Jacob Fatu",
    "Jacy Jayne",
    "Jade Cargill",
    "Jaida Parker",
    "Jakara Jackson",
    "Jake The Snake Roberts",
    "JBL",
    "JD Mcdonagh",
    "Je'von Evans",
    "Jey Uso",
    "Jimmy Uso",
    "Jim Neidhart",
    "Joaquin Wilde",
    "Joe Coffey",
    "Joe Gacy",
    "John Cena",
    "Johnny Gargano",
    "Josh Briggs",
    "Julius Creed",
    "Kairi Sane",
    "Kane",
    "Karl Anderson",
    "Karrion Kross",
    "Katana Chance",
    "Kayden Carter",
    "Kelani Jordan",
    "Ken Shamrock",
    "Kevin Nash",
    "Kevin Owens",
    "Kiana James",
    "Kit Wilson",
    "Kofi Kingston",
    "Kurt Angle",
    "LA Knight",
    "Lash Legend",
    "Lexis King",
    "Lex Luger",
    "Lita",
    "Liv Morgan",
    "Logan Paul",
    "Lola Vice",
    "Ludwig Kaiser",
    "Luke Gallows",
    "Lyra Valkyria",
    "Macho Man Randy Savage",
    "Mankind",
    "Mark Coffey",
    "Maryse",
    "Maxxine Dupri",
    "Michelle McCool",
    "Michin",
    "Mick Foley",
    "Mighty Molly",
    "Molly Holly",
    "Montez Ford",
    "Mr Perfect",
    "Naomi",
    "Natalya",
    "Nathan Frazer",
    "Nia Jax",
    "Nikki Cross",
    "Nikkita Lyons",
    "Noam Dar",
    "Oba Femi",
    "Omos",
    "Oro Mensah",
    "Otis",
    "Pat Mcafee",
    "Pete Dunne",
    "Piper Niven",
    "R-Truth",
    "Randy Orton",
    "Raquel Rodriguez",
    "Razor Ramon",
    "Rey Mysterio",
    "Rezar",
    "Rhea Ripley",
    "Ricky Steamboat",
    "Ridge Holland",
    "Rikishi",
    "Rob Van Dam",
    "Roddy Piper",
    "Roman Reigns",
    "Rosey",
    "Roxanne Perez",
    "Sami Zayn",
    "Sandman",
    "Santos Escobar",
    "Scarlett",
    "Scott Hall",
    "Scott Steiner",
    "Seth Rollins",
    "Shawn Michaels",
    "Shawn Spears",
    "Shayna Baszler",
    "Sheamus",
    "Shinsuke Nakamura",
    "Shotzi",
    "Solo Sikoa",
    "Sol Ruca",
    "Sonya Deville",
    "Stacy Keibler",
    "Stardust",
    "Stephanie Mcmahon",
    "Stone Cold Steve Austin",
    "Syxx",
    "Tama Tonga",
    "Tamina",
    "Tatum Paxley",
    "Tegan Nox",
    "Terry Funk",
    "Thea Hail",
    "The Fiend",
    "The Great Muta",
    "The Hurricane",
    "The Iron Sheik",
    "The Miz",
    "The Rock",
    "Tiffany Stratton",
    "Tommaso Ciampa",
    "Tonga Loa",
    "Tony D'Angelo",
    "Trick Williams",
    "Triple H",
    "Trish Stratus",
    "Tyler Bate",
    "Tyler Breeze",
    "Ultimate Warrior",
    "Umaga",
    "Uncle Howdy",
    "Undertaker",
    "Vader",
    "Valhalla",
    "Wade Barrett",
    "Wendy Choo",
    "WesLee",
    "William Regal",
    "Wolfgang",
    "X-Pac",
    "Xavier Woods",
    "Yokozuna",
    "Zelina Vega",
    "Zoey Stark",
  ];

  const [rawRoster, setRawRoster] = useState<string[]>([]);
  const [smackdownRoster, setSmackdownRoster] = useState<string[]>([]);
  const [draftedSuperstars, setDraftedSuperstars] = useState<Set<string>>(new Set());
  const [draftCount, setDraftCount] = useState(0);

  // Function to manually assign a superstar to Raw or Smackdown
  const assignToShow = (superstar: string) => {
    if (!draftedSuperstars.has(superstar)) {
      setDraftedSuperstars(new Set(draftedSuperstars).add(superstar));

      if (draftCount % 2 === 0) {
        setRawRoster([...rawRoster, superstar]);
      } else {
        setSmackdownRoster([...smackdownRoster, superstar]);
      }

      setDraftCount(draftCount + 1);
    }
  };

  // Function to randomly draft all superstars
  const randomDraftAll = () => {
    // Filter out already drafted superstars
    const availableSuperstars = superstars.filter((superstar) => !draftedSuperstars.has(superstar));

    // Shuffle the available superstars array
    const shuffledSuperstars = [...availableSuperstars].sort(() => Math.random() - 0.5);

    // Assign superstars to Raw or Smackdown
    const newRawRoster: string[] = [];
    const newSmackdownRoster: string[] = [];

    shuffledSuperstars.forEach((superstar, index) => {
      if (index % 2 === 0) {
        newRawRoster.push(superstar);
      } else {
        newSmackdownRoster.push(superstar);
      }
    });

    // Update the state
    setRawRoster(newRawRoster);
    setSmackdownRoster(newSmackdownRoster);
    setDraftedSuperstars(new Set([...draftedSuperstars, ...shuffledSuperstars]));
    setDraftCount(draftedSuperstars.size + shuffledSuperstars.length);
  };

  const resetDraft = () => {
    setRawRoster([]);
    setSmackdownRoster([]);
    setDraftedSuperstars(new Set());
    setDraftCount(0);
  };

  const exportCSV = () => {
    const rawCsv = rawRoster.map((name, index) => `#${index + 1},${name}`).join("\n");
    const smackdownCsv = smackdownRoster.map((name, index) => `#${index + 1},${name}`).join("\n");
    const csvContent = `Raw Roster:\n${rawCsv}\n\nSmackDown Roster:\n${smackdownCsv}`;

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "wwe_draft_rosters.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Header />
      <div className="DraftBackground">
        <div className="DraftContainer">
          <img className="DraftBanner" src="/src/Images/DraftHeader.png" alt="Draft Banner" />

          <div className="ButtonContainer">
            <button className="ExportButton" onClick={exportCSV}>Export CSV</button>
            <button className="ResetButton" onClick={resetDraft}>Reset Draft</button>
            <button className="RandomDraftAllButton" onClick={randomDraftAll}>Random Draft All</button>
          </div>

          <div className="SuperstarsContainer">
            {superstars.map((superstar, index) => (
              <button
                key={index}
                className="SuperstarButton"
                onClick={() => assignToShow(superstar)}
                disabled={draftedSuperstars.has(superstar)}
              >
                {superstar}
              </button>
            ))}
          </div>

          <div className="Roster1Container">
            <div className="RawRoster">
              <h2>Raw</h2>
              <ul>
                {rawRoster.map((name, index) => (
                  <li className="li1" key={index}>#{index + 1} {name}</li>
                ))}
              </ul>
            </div>
            <div className="SmackdownRoster">
              <h2>SmackDown</h2>
              <ul>
                {smackdownRoster.map((name, index) => (
                  <li className="li1" key={index}>#{index + 1} {name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Draft;
