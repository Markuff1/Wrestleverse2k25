import "./News.css";
import Header from "./Header";
import Footer from "./Footer";

const newsData = [
  {
    image: "/src/Images/WWE2K25SP.png",
    title: "WWE 2K25 Season Pass DLC",
    description: ["*exact dates coming soon*"], // Make description an array for consistency
    packs: [
      {
        name: "---------- New Wave Pack - May 2025 ----------",
        items: ["Alex Shelly", "Chris Sabin", "Giulia", "Stephanie Vaquer", "Special celebrity guest"]
      },
      {
        name: "---------- Dunk & Destruction Pack - June 2025 ----------",
        items: ["Abyss", "Great Khali", "Three NBA stars to be announced"]
      },
      {
        name: "---------- Fearless Pack - July 2025 ----------",
        items: ["New Jack", "Jordynne Grace", "Penta", "Bull Nakano", "Special celebrity guest to be announced"]
      },
      {
        name: "---------- Attitude Era Pack - September 2025 ----------",
        items: ["D'Lo Brown", "Billy Gunn", "Road Dogg", "Victoria", "Mark Henry"]
      },
      {
        name: "---------- SNME Pack - November 2025 ----------",
        items: ["Jesse Ventura", "Mr. Wonderful", "Tito Santana", "Junk Yard Dog", "Sid Justice"]
      }
    ]
  },
  {
    image: "/src/Images/RAW.png",
    title: "First RAW on 31st March 2025",
    description: [
      "WWE Raw goes live this weekend, kicking off an electrifying new era in the WWE 2K25 Universe! Fans can expect intense rivalries, shocking surprises, and must-see action as the top superstars battle for supremacy.",
      "Anything can happen when Raw goes live this weekend so Are you Ready?!!!!"
    ]
  },
  {
    image: "/src/Images/SD.png",
    title: "First Smackdown on 4th April 2025",
    description: [
      "WWE SmackDown goes live this weekend, bringing non-stop action and intense rivalries to the WWE 2K25 Universe!",
      "With top superstars battling for supremacy and championship gold within reach, anything can happen. Surprises, showdowns, and unforgettable moments await as the blue brand takes center stage!!!!!"
    ]
  }
];

function News() {
  return (
    <>
      <Header />
      <div className="NewsBackground">
        <div className="NewsContainer">
          <img className="NBanner" src='/src/Images/NewsHeader.png' alt="News Header" />
          
          {newsData.map((news, index) => (
            <div key={index} className="NewsSection">
              <img className="NewsImage" src={news.image} alt={news.title} />
              <div className="NewsTitle">{news.title}</div>

              {/* If packs exist, display them, otherwise display the description */}
              {news.packs ? (
                <>
                  <div className="NewsDescript1">{news.description[0]}</div> 
                  {news.packs.map((pack, i) => (
                    <div key={i}>
                      <div className="NewsDescript3">{pack.name}</div>
                      <ul className="NewsList">
                        {pack.items.map((item, j) => (
                          <li key={j}>- {item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </>
              ) : (
                news.description.map((desc, i) => (
                  <div key={i} className="NewsDescript1">{desc}</div>
                ))
              )}

              {/* White line divider */}
              {index < newsData.length - 1 && <hr className="NewsDivider" />}
            </div>
          ))}
          <div className="NewsTitle">....</div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default News;
