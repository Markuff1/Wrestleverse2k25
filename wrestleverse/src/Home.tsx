import React from "react";
import "./Home.css";
import Header from "./Header";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Header />
      <div className="HomeBackground">
        <div className="HomeContainer">
          {/* Properly reference the image */}
          <img className="Poster" src="src/Images/WWE2K25.PNG" alt="WWE 2K25" />

          <div className="HomeText1">WWE 2K25 Universe is coming soon!!</div>
          <div className="HomeText2">
            With WWE 2K25 launching on March 7th, a new era is about to begin… and trust me, you won’t want to miss it!
          </div>
          <div className="HomeText2">Are you ready?</div>
          <div className="HomeText2">
            NO! I SAID… ARE… YOU… READYYYY?!?!? 🔥🔥
          </div>
          <div className="HomeText2">
            Because once the lights go down and the pyro hits, my custom WWE Universe comes to life. New champions will rise, legends will fall, and shocking moments will leave you speechless! This isn’t just any Universe Mode—this is a place where rivalries get personal, where superstars climb the ladder of success… or get buried trying.
          </div>
          <div className="HomeText2">
            Will the dominant reign continue, or will an underdog shock the world? Will alliances hold strong, or will betrayal strike when you least expect it? One thing’s for sure - anything can happen in my WWE Universe!
          </div>
          <div className="HomeText2">So sit back, grab your popcorn, and get ready to witness history.</div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
