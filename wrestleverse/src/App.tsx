import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Roster from "./Roster";
import News from "./News";
import Shows from "./Shows";
import Header from "./Header";
import Footer from "./Footer";
import SD from "./SD";
import RAW from "./RAW";
import Draft from "./Draft";

import WWEUndisputed from "./ChampionshipPages/WWEUndisputedChamp";
import WomenUndisputed from "./ChampionshipPages/WomenUndisputedChamp";
import WorldHeavyweight from "./ChampionshipPages/WorldHeavyweightChamp";
import WomenWorld from "./ChampionshipPages/WomenWorldChamp";
import Intercontinental from "./ChampionshipPages/IntercontinentalChamp";
import UnitedStates from "./ChampionshipPages/UnitedStatesChamp";
import WomenIntercontinental from "./ChampionshipPages/WomenIntercontinentalChamp";
import WomenUnitedStates from "./ChampionshipPages/WomenUnitedStatesChamp";
import RawTagTeam from "./ChampionshipPages/RawTagTeamChamps";
import SmackdownTagTeam from "./ChampionshipPages/SmackdownTagTeamChamps";



import Backlash from "./PPVPages/Backlash/Backlash";
import MITB from "./PPVPages/MITB/MITB";
import ONS from "./PPVPages/ONS/ONS";
import Summerslam from "./PPVPages/Summerslam/Summerslam";
import NoMercy from "./PPVPages/NoMercy/NoMercy";
import CyberSunday from "./PPVPages/CyberSunday/CyberSunday";
import SurvivorSeries from "./PPVPages/SurvivorSeries/SurvivorSeries";
import TLC from "./PPVPages/TLC/TLC";
import NYR from "./PPVPages/NYR/NYR";
import RoyalRumble from "./PPVPages/RoyalRumble/RoyalRumble";
import NoWayOut from "./PPVPages/NoWayOut/NoWayOut";

function App() {
  return (
      
      <Router>
        <Header/>
        <Routes>
          {/* Home route */}
          <Route path="/" element={<Home/>} />
          
          {/* Nav Bar routes */}
          <Route path="/Roster" element={<Roster/>} />
          <Route path="/News" element={<News/>} />
          <Route path="/Shows" element={<Shows/>} />

          {/* Weekly Shows routes */}
          <Route path="/RAW" element={<RAW/>} />
          <Route path="/SD" element={<SD/>} />
          <Route path="/Draft" element={<Draft/>} />


          {/* Championship routes */}
          <Route path="/WWEUndisputedChamp" element={<WWEUndisputed />} />
          <Route path="/WomenUndisputedChamp" element={<WomenUndisputed />} />
          <Route path="/WorldHeavyweightChamp" element={<WorldHeavyweight />} />
          <Route path="/WomenWorldChamp" element={<WomenWorld />} />
          <Route path="/IntercontinentalChamp" element={<Intercontinental />} />
          <Route path="/UnitedStatesChamp" element={<UnitedStates />} />
          <Route path="/WomenIntercontinentalChamp" element={<WomenIntercontinental />} />
          <Route path="/WomenUnitedStatesChamp" element={<WomenUnitedStates />} />
          <Route path="/RawTagTeamChamps" element={<RawTagTeam />} />
          <Route path="/SmackdownTagTeamChamps" element={<SmackdownTagTeam />} />

          {/* PPV routes */}
          <Route path="/Backlash" element={<Backlash />} />
          <Route path="/MITB" element={<MITB />} />
          <Route path="/ONS" element={<ONS />} />
          <Route path="/Summerslam" element={<Summerslam />} />
          <Route path="/NoMercy" element={<NoMercy />} />
          <Route path="/CyberSunday" element={<CyberSunday />} />
          <Route path="/SurvivorSeries" element={<SurvivorSeries />} />
          <Route path="/TLC" element={<TLC />} />
          <Route path="/NYR" element={<NYR />} />
          <Route path="/RoyalRumble" element={<RoyalRumble />} />
          <Route path="/NoWayOut" element={<NoWayOut />} />
        </Routes>
        <Footer/>
      </Router>
      
  );
}

export default App;