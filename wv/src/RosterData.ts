// rosterData.ts

export interface Wrestler {
  className?: string;
  src: string;
  name: string;
  gender?: string;
  tag?: string;
  tag2?: string;
  champion?: string;
  championRank?: number;
}

const rosterData: Record<string, Wrestler[]> = {
   ALL: [
      { src: "/src/Images/Roster/AJStyles.png", name: "AJ Styles", gender: "Man", tag: "R", champion:""},
      { src: "/src/Images/Roster/Akam.png", name: "Akam", gender: "Man", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/AkiraTozawa.png", name: "Akira Tozawa", gender: "Man", tag: "R" , champion:""},
      { src: "/src/Images/Roster/AlbaFyre.png", name: "Alba Fyre", gender: "Women", tag: "R" , champion:""},
      { src: "/src/Images/Roster/AlexaBliss.png", name: "Alexa Bliss", gender: "Women", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/AlexShelley.png", name: "Alex Shelley", gender: "Man", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/Andrade.png", name: "Andrade", gender: "Man", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/AndreChase.png", name: "Andre Chase", gender: "Man", tag: "R" , champion:""},
      { src: "/src/Images/Roster/Angel.png", name: "Angel", gender: "Man", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/AngeloDawkins.png", name: "Angelo Dawkins", gender: "Man", tag: "R" , champion:""},
      { src: "/src/Images/Roster/ApolloCrews.png", name: "Apollo Crews", gender: "Man", tag: "R" , champion:""},
      { src: "/src/Images/Roster/AshanteTheeAdonis.png", name: "Ashante Thee Adonis", gender: "Man", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/Asuka.png", name: "Asuka", gender: "Women", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/AustinTheory.png", name: "Austin Theory", gender: "Man", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/Axiom.png", name: "Axiom", gender: "Man", tag: "R" , champion:""},
      { src: "/src/Images/Roster/B-Fab.png", name: "B Fab", gender: "Women", tag: "R" , champion:""},
      { src: "/src/Images/Roster/BaronCorbin.png", name: "Baron Corbin", gender: "Man", tag: "SD"},
      { src: "/src/Images/Roster/Batista.png", name: "Batista", gender: "Man", tag: "R" , champion:""},
      { src: "/src/Images/Roster/Bayley.png", name: "Bayley", gender: "Women", tag: "R" , champion:""},
      { src: "/src/Images/Roster/BeckyLynch.png", name: "Becky Lynch", gender: "Women", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/Berto.png", name: "Berto", gender: "Man", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/BiancaBelair.png", name: "Bianca Belair", gender: "Women", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/BigE.png", name: "Big E", gender: "Man", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/BlairDavenport.png", name: "Blair Davenport", gender: "Women", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/Boogeyman.png", name: "Boogeyman", gender: "Man", tag: "L" , champion:""},
      { src: "/src/Images/Roster/BookerT.png", name: "Booker T", gender: "Man", tag: "L" , champion:""},

      { src: "/src/Images/Roster/BraunStrowman.png", name: "Braun Strowman", gender: "Man", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/BrayWyatt.png", name: "Bray Wyatt", gender: "Man", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/BronBreakker.png", name: "Bron Breakker", gender: "Man", tag: "R" , champion:"US",championRank:5},
      { src: "/src/Images/Roster/BronsonReed.png", name: "Bronson Reed", gender: "Man", tag: "R" , champion:""},
      { src: "/src/Images/Roster/BrooksJensen.png", name: "Brooks Jensen", gender: "Man", tag: "R" , champion:""},
      { src: "/src/Images/Roster/BrutusCreed.png", name: "Brutus Creed", gender: "Man", tag: "R" , champion:""},
      { src: "/src/Images/Roster/BubbaRayDudley.png", name: "Bubba Ray Dudley", gender: "Man", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/CactusJack.png", name: "Cactus Jack", gender: "Man", tag: "L" , champion:""},
      { src: "/src/Images/Roster/CandiceLeRae.png", name: "Candice LeRae", gender: "Women", tag: "R" , champion:""},
      { src: "/src/Images/Roster/Carlito.png", name: "Carlito", gender: "Man", tag: "R" , champion:""},
      { src: "/src/Images/Roster/Carmella.png", name: "Carmella", gender: "Women", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/CarmeloHayes.png", name: "Carmelo Hayes", gender: "Man", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/CedricAlexander.png", name: "Cedric Alexander", gender: "Man", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/ChadGable.png", name: "Chad Gable", gender: "Man", tag: "R" , champion:""},
      { src: "/src/Images/Roster/ChanningLorenzo.png", name: "Channing Lorenzo", gender: "Man", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/CharlieDempsey.png", name: "Charlie Dempsey", gender: "Man", tag: "R" , champion:""},
      { src: "/src/Images/Roster/CharlotteFlair.png", name: "Charlotte Flair", gender: "Women", tag: "R" , champion:""},
      { src: "/src/Images/Roster/ChelseaGreen.png", name: "Chelsea Green", gender: "Women", tag: "R" , champion:""},
      { src: "/src/Images/Roster/ChrisSabin.png", name: "Chris Sabin", gender: "Man", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/Chyna.png", name: "Chyna", gender: "Women", tag: "L" , champion:""},
      { src: "/src/Images/Roster/CMPunk.png", name: "CM Punk", gender: "Man", tag: "R" , champion:""},
      { src: "/src/Images/Roster/CodyRhodes.png", name: "Cody Rhodes", gender: "Man", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/CoraJade.png", name: "Cora Jade", gender: "Women", tag: "R" , champion:""},
      { src: "/src/Images/Roster/CruzDelToro.png", name: "Cruz Del Toro", gender: "Man", tag: "R" , champion:""},
      { src: "/src/Images/Roster/DakotaKai.png", name: "Dakota Kai", gender: "Women", tag: "R" , champion:""},
      { src: "/src/Images/Roster/D-VonDudley.png", name: "D-Von Dudley", gender: "Man", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/DamianPriest.png", name: "Damian Priest", gender: "Man", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/DDP.png", name: "DDP", gender: "Man", tag: "L" , champion:""},
      { src: "/src/Images/Roster/DexterLumis.png", name: "Dexter Lumis", gender: "Man", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/Diesel.png", name: "Diesel", gender: "Man", tag: "L" , champion:""},
      { src: "/src/Images/Roster/DoinkTheClown.png", name: "Doink The Clown", gender: "Man", tag: "L" , champion:""},
      { src: "/src/Images/Roster/DominikMysterio.png", name: "Dominik Mysterio", gender: "Man", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/DragonLee.png", name: "Dragon Lee", gender: "Man", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/DrewMcintyre.png", name: "Drew Mcintyre", gender: "Man", tag: "SD" , champion:""},

      { src: "/src/Images/Roster/DudeLove.png", name: "Dude Love", gender: "Man", tag: "L" , champion:""},
      { src: "/src/Images/Roster/DukeHudson.png", name: "Duke Hudson", gender: "Man", tag: "R" , champion:""},
      { src: "/src/Images/Roster/DustyRhodes.png", name: "Dusty Rhodes", gender: "Man", tag: "L" , champion:""},
      { src: "/src/Images/Roster/EddieGuerrero.png", name: "Eddie Guerrero", gender: "Man", tag: "L" , champion:""},
      { src: "/src/Images/Roster/EddyThorpe.png", name: "Eddy Thorpe", gender: "Man", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/ElektraLopez.png", name: "Elektra Lopez", gender: "Women", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/EltonPrince.png", name: "Elton Prince", gender: "Man", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/EricBischoff.png", name: "Eric Bischoff", gender: "Man", tag: "L" , champion:""},
      { src: "/src/Images/Roster/ErickRowan.png", name: "Erick Rowan", gender: "Man", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/Erik.png", name: "Erik", gender: "Man", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/EthanPage.png", name: "Ethan Page", gender: "Man", tag: "R" , champion:""},
      { src: "/src/Images/Roster/EveTorres.png", name: "Eve Torres", gender: "Women", tag: "R" , champion:""},
      { src: "/src/Images/Roster/Faarooq.png", name: "Faarooq", gender: "Man", tag: "L" , champion:""},
      { src: "/src/Images/Roster/FallonHenley.png", name: "Fallon Henley", gender: "Women", tag: "R" , champion:""},
      { src: "/src/Images/Roster/FinnBalor.png", name: "Finn Balor", gender: "Man", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/GigiDolin.png", name: "Gigi Dolin", gender: "Women", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/GiovanniVinci.png", name: "Giovanni Vinci", gender: "Man", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/Giulia.png", name: "Giulia", gender: "Women", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/GraysonWaller.png", name: "Grayson Waller", gender: "Man", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/Gunther.png", name: "Gunther", gender: "Man", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/HulkHogan.png", name: "HulkHogan", gender: "Man", tag: "L" , champion:""},
      { src: "/src/Images/Roster/HonkyTonkMan.png", name: "Honky Tonk Man", gender: "Man", tag: "L" , champion:""},
      { src: "/src/Images/Roster/IljaDragunov.png", name: "Ilja Dragunov", gender: "Man", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/IndiHartwell.png", name: "Indi Hartwell", gender: "Women", tag: "R" , champion:""},
      { src: "/src/Images/Roster/IslaDawn.png", name: "Isla Dawn", gender: "Women", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/Ivar.png", name: "Ivar", gender: "Man", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/IvyNile.png", name: "Ivy Nile", gender: "Women", tag: "R" , champion:""},
      { src: "/src/Images/Roster/IyoSky.png", name: "Iyo Sky", gender: "Women", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/JacobFatu.png", name: "Jacob Fatu", gender: "Man", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/JacyJayne.png", name: "Jacy Jayne", gender: "Women", tag: "R" , champion:""},
      { src: "/src/Images/Roster/JadeCargill.png", name: "Jade Cargill", gender: "Women", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/JaidaParker.png", name: "Jaida Parker", gender: "Women", tag: "R" , champion:""},
      { src: "/src/Images/Roster/JakaraJackson.png", name: "Jakara Jackson", gender: "Women", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/JakeTheSnakeRoberts.png", name: "Jake The Snake Roberts", gender: "Man", tag: "L" , champion:""},
      { src: "/src/Images/Roster/JBL.png", name: "JBL", gender: "Man", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/JDMcdonagh.png", name: "JD Mcdonagh", gender: "Man", tag: "SD" , champion:"IC",championRank:6},
      { src: "/src/Images/Roster/Je'vonEvans.png", name: "Je'von Evans", gender: "Man", tag: "SD" , champion:""},

      { src: "/src/Images/Roster/JeyUso.png", name: "Jey Uso", gender: "Man", tag: "R" , champion:""},
      { src: "/src/Images/Roster/JimmyUso.png", name: "Jimmy Uso", gender: "Man", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/JimNeidhart.png", name: "Jim Neidhart", gender: "Man", tag: "L" , champion:""},
      { src: "/src/Images/Roster/JoaquinWilde.png", name: "Joaquin Wilde", gender: "Man", tag: "R" , champion:""},
      { src: "/src/Images/Roster/JoeCoffey.png", name: "Joe Coffey", gender: "Man", tag: "R" , champion:""},
      { src: "/src/Images/Roster/JoeGacy.png", name: "Joe Gacy", gender: "Man", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/JohnCena.png", name: "John Cena", gender: "Man", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/JohnnyGargano.png", name: "Johnny Gargano", gender: "Man", tag: "R" , champion:""},
      { src: "/src/Images/Roster/JoshBriggs.png", name: "Josh Briggs", gender: "Man", tag: "R" , champion:""},
      { src: "/src/Images/Roster/JuliusCreed.png", name: "Julius Creed", gender: "Man", tag: "R" , champion:""},
      { src: "/src/Images/Roster/KairiSane.png", name: "Kairi Sane", gender: "Women", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/Kane.png", name: "Kane", gender: "Man", tag: "R" , champion:""},
      { src: "/src/Images/Roster/KarlAnderson.png", name: "Karl Anderson", gender: "Man", tag: "R" , champion:""},
      { src: "/src/Images/Roster/KarrionKross.png", name: "Karrion Kross", gender: "Man", tag: "R" , champion:""},
      { src: "/src/Images/Roster/KatanaChance.png", name: "Katana Chance", gender: "Women", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/KaydenCarter.png", name: "Kayden Carter", gender: "Women", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/KelaniJordan.png", name: "Kelani Jordan", gender: "Women", tag: "R" , champion:""},
      { src: "/src/Images/Roster/KenShamrock.png", name: "Ken Shamrock", gender: "Man", tag: "L" , champion:""},
      { src: "/src/Images/Roster/KevinNash.png", name: "Kevin Nash", gender: "Man", tag: "L" , champion:""},
      { src: "/src/Images/Roster/KevinOwens.png", name: "Kevin Owens", gender: "Man", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/KianaJames.png", name: "Kiana James", gender: "Women", tag: "R" , champion:""},
      { src: "/src/Images/Roster/KitWilson.png", name: "Kit Wilson", gender: "Man", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/KofiKingston.png", name: "Kofi Kingston", gender: "Man", tag: "R" , champion:""},
      { src: "/src/Images/Roster/KurtAngle.png", name: "Kurt Angle", gender: "Man", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/LAKnight.png", name: "LA Knight", gender: "Man", tag: "R" , champion:""},
      { src: "/src/Images/Roster/LashLegend.png", name: "Lash Legend", gender: "Women", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/LexisKing.png", name: "Lexis King", gender: "Man", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/LexLuger.png", name: "Lex Luger", gender: "Man", tag: "L" , champion:""},
      { src: "/src/Images/Roster/Lita.png", name: "Lita", gender: "Women", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/LivMorgan.png", name: "Liv Morgan", gender: "Women", tag: "SD" , champion:"WWH",championRank:4},
      { src: "/src/Images/Roster/LoganPaul.png", name: "Logan Paul", gender: "Man", tag: "R" , champion:""},
      { src: "/src/Images/Roster/LolaVice.png", name: "Lola Vice", gender: "Women", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/LudwigKaiser.png", name: "Ludwig Kaiser", gender: "Man", tag: "R" , champion:""},
      { src: "/src/Images/Roster/LukeGallows.png", name: "Luke Gallows", gender: "Man", tag: "R" , champion:""},
      { src: "/src/Images/Roster/LyraValkyria.png", name: "Lyra Valkyria", gender: "Women", tag: "R" , champion:""},
      { src: "/src/Images/Roster/MachoManRandySavage.png", name: "Macho Man Randy Savage", gender: "Man", tag: "L" , champion:""},
      { src: "/src/Images/Roster/Mankind.png", name: "Mankind", gender: "Man", tag: "L" , champion:""},
      { src: "/src/Images/Roster/MarkCoffey.png", name: "Mark Coffey", gender: "Man", tag: "R" , champion:""},
      { src: "/src/Images/Roster/Maryse.png", name: "Maryse", gender: "Women", tag: "L" , champion:""},

      { src: "/src/Images/Roster/MaxxineDupri.png", name: "Maxxine Dupri", gender: "Women", tag: "R" , champion:""},
      { src: "/src/Images/Roster/MichelleMcCool.png", name: "Michelle McCool", gender: "Women", tag: "R" , champion:"WIC",championRank:8},
      { src: "/src/Images/Roster/Michin.png", name: "Michin", gender: "Women", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/MickFoley.png", name: "Mick Foley", gender: "Man", tag: "UNDRAFTED", champion:""},
      { src: "/src/Images/Roster/MightyMolly.png", name: "Mighty Molly", gender: "Women", tag: "L" , champion:""},
      { src: "/src/Images/Roster/MollyHolly.png", name: "Molly Holly", gender: "Women", tag: "L" , champion:""},
      { src: "/src/Images/Roster/MontezFord.png", name: "Montez Ford", gender: "Man", tag: "R" , champion:""},
      { src: "/src/Images/Roster/MrPerfect.png", name: "Mr Perfect", gender: "Man", tag: "L" , champion:""},
      { src: "/src/Images/Roster/Naomi.png", name: "Naomi", gender: "Women", tag: "SD"},
      { src: "/src/Images/Roster/Natalya.png", name: "Natalya", gender: "Women", tag: "R" , champion:""},
      { src: "/src/Images/Roster/NathanFrazer.png", name: "Nathan Frazer", gender: "Man", tag: "R" , champion:""},
      { src: "/src/Images/Roster/NiaJax.png", name: "Nia Jax", gender: "Women", tag: "R" , champion:""},
      { src: "/src/Images/Roster/NikkiCross.png", name: "Nikki Cross", gender: "Women", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/NikkitaLyons.png", name: "Nikkita Lyons", gender: "Women", tag: "R" , champion:""},
      { src: "/src/Images/Roster/NoamDar.png", name: "Noam Dar", gender: "Man", tag: "R" , champion:""},
      { src: "/src/Images/Roster/ObaFemi.png", name: "Oba Femi", gender: "Man", tag: "R" , champion:""},
      { src: "/src/Images/Roster/Omos.png", name: "Omos", gender: "Man", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/OroMensah.png", name: "Oro Mensah", gender: "Man", tag: "R" , champion:""},
      { src: "/src/Images/Roster/Otis.png", name: "Otis", gender: "Man", tag: "R" , champion:""},
      { src: "/src/Images/Roster/PatMcafee.png", name: "Pat Mcafee", gender: "Man", tag: "L" , champion:""},
      { src: "/src/Images/Roster/PeteDunne.png", name: "Pete Dunne", gender: "Man", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/PiperNiven.png", name: "Piper Niven", gender: "Women", tag: "R"},
      { src: "/src/Images/Roster/R-Truth.png", name: "R-Truth", gender: "Man", tag: "R" , champion:""},
      { src: "/src/Images/Roster/RandyOrton.png", name: "Randy Orton", gender: "Man", tag: "R" , champion:""},
      { src: "/src/Images/Roster/RaquelRodriguez.png", name: "Raquel Rodriguez", gender: "Women", tag: "SD" , champion:"WUS",championRank:9},
      { src: "/src/Images/Roster/RazorRamon.png", name: "Razor Ramon", gender: "Man", tag: "L" , champion:""},
      { src: "/src/Images/Roster/ReyMysterio.png", name: "Rey Mysterio", gender: "Man", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/Rezar.png", name: "Rezar", gender: "Man", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/RheaRipley.png", name: "Rhea Ripley", gender: "Women", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/RickySteamboat.png", name: "Ricky Steamboat", gender: "Man", tag: "L" , champion:""},
      { src: "/src/Images/Roster/RidgeHolland.png", name: "Ridge Holland", gender: "Man", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/Rikishi.png", name: "Rikishi", gender: "Man", tag: "L" , champion:""},
      { src: "/src/Images/Roster/RobVanDam.png", name: "Rob Van Dam", gender: "Man", tag: "R" , champion:""},
      { src: "/src/Images/Roster/RoddyPiper.png", name: "Roddy Piper", gender: "Man", tag: "L" , champion:""},
      { src: "/src/Images/Roster/RomanReigns.png", name: "Roman Reigns", gender: "Man", tag: "R" , champion:"UC", championRank:1},
      { src: "/src/Images/Roster/Rosey.png", name: "Rosey", gender: "Man", tag: "L" , champion:""},
      { src: "/src/Images/Roster/RoxannePerez.png", name: "Roxanne Perez", gender: "Women", tag: "R"},
      { src: "/src/Images/Roster/SamiZayn.png", name: "Sami Zayn", gender: "Man", tag: "R" , champion:""},

      { src: "/src/Images/Roster/Sandman.png", name: "Sandman", gender: "Man", tag: "L" , champion:""},
      { src: "/src/Images/Roster/SantosEscobar.png", name: "Santos Escobar", gender: "Man", tag: "R" , champion:""},
      { src: "/src/Images/Roster/Scarlett.png", name: "Scarlett", gender: "Women", tag: "R" , champion:""},
      { src: "/src/Images/Roster/ScottHall.png", name: "Scott Hall", gender: "Man", tag: "L" , champion:""},
      { src: "/src/Images/Roster/ScottSteiner.png", name: "Scott Steiner", gender: "Man", tag: "L" , champion:""},
      { src: "/src/Images/Roster/SethRollins.png", name: "Seth Rollins", gender: "Man", tag: "SD" , champion:"WH", championRank:2},
      { src: "/src/Images/Roster/ShawnMichaels.png", name: "Shawn Michaels", gender: "Man", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/ShawnSpears.png", name: "Shawn Spears", gender: "Man", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/ShaynaBaszler.png", name: "Shayna Baszler", gender: "Women", tag: "R" , champion:""},
      { src: "/src/Images/Roster/Sheamus.png", name: "Sheamus", gender: "Man", tag: "R" , champion:""},
      { src: "/src/Images/Roster/ShinsukeNakamura.png", name: "Shinsuke Nakamura", gender: "Man", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/Shotzi.png", name: "Shotzi", gender: "Women", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/SoloSikoa.png", name: "Solo Sikoa", gender: "Man", tag: "R" , champion:""},
      { src: "/src/Images/Roster/SolRuca.png", name: "Sol Ruca", gender: "Women", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/SonyaDeville.png", name: "Sonya Deville", gender: "Women", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/StacyKeibler.png", name: "Stacy Keibler", gender: "Women", tag: "L" , champion:""},
      { src: "/src/Images/Roster/Stardust.png", name: "Stardust", gender: "Man", tag: "L" , champion:""},
      { src: "/src/Images/Roster/StephanieMcmahon.png", name: "Stephanie Mcmahon", gender: "Women", tag: "L" , champion:""},
      { src: "/src/Images/Roster/StephanieVaquer.png", name: "Stephanie Vaquer", gender: "Women", tag: "R" , champion:""},
      { src: "/src/Images/Roster/StoneColdSteveAustin.png", name: "Stone Cold Steve Austin", gender: "Man", tag: "L" , champion:""},
      { src: "/src/Images/Roster/Syxx.png", name: "Syxx", gender: "Man", tag: "L" , champion:""},
      { src: "/src/Images/Roster/TamaTonga.png", name: "Tama Tonga", gender: "Man", tag: "R" , champion:""},
      { src: "/src/Images/Roster/Tamina.png", name: "Tamina", gender: "Women", tag: "R" , champion:""},
      { src: "/src/Images/Roster/TatumPaxley.png", name: "Tatum Paxley", gender: "Women", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/TeganNox.png", name: "Tegan Nox", gender: "Women", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/TerryFunk.png", name: "Terry Funk", gender: "Man", tag: "L" , champion:""},
      { src: "/src/Images/Roster/TheaHail.png", name: "Thea Hail", gender: "Women", tag: "R" , champion:""},
      { src: "/src/Images/Roster/TheFiend.png", name: "The Fiend", gender: "Man", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/TheGreatMuta.png", name: "The Great Muta", gender: "Man", tag: "L" , champion:""},
      { src: "/src/Images/Roster/TheHurricane.png", name: "The Hurricane", gender: "Man", tag: "L" , champion:""},
      { src: "/src/Images/Roster/TheIronSheik.png", name: "The Iron Sheik", gender: "Man", tag: "L" , champion:""},
      { src: "/src/Images/Roster/TheMiz.png", name: "The Miz", gender: "Man", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/TheRock.png", name: "The Rock", gender: "Man", tag: "R" , tag2: "GM", champion:""},
      { src: "/src/Images/Roster/TiffanyStratton.png", name: "Tiffany Stratton", gender: "Women", tag: "R" , champion:"WUC",championRank:3},
      { src: "/src/Images/Roster/TommasoCiampa.png", name: "Tommaso Ciampa", gender: "Man", tag: "R" , champion:""},
      { src: "/src/Images/Roster/TongaLoa.png", name: "Tonga Loa", gender: "Man", tag: "R" , champion:""},
      { src: "/src/Images/Roster/TonyD'Angelo.png", name: "Tony D'Angelo", gender: "Man", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/TrickWilliams.png", name: "Trick Williams", gender: "Man", tag: "R" , champion:""},
      { src: "/src/Images/Roster/TripleH.png", name: "Triple H", gender: "Man", tag: "UNDRAFTED" , champion:""},
      { src: "/src/Images/Roster/TrishStratus.png", name: "Trish Stratus", gender: "Women", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/TylerBate.png", name: "Tyler Bate", gender: "Man", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/TylerBreeze.png", name: "Tyler Breeze", gender: "Man", tag: "R" , champion:""},
      { src: "/src/Images/Roster/UltimateWarrior.png", name: "Ultimate Warrior", gender: "Man", tag: "L" , champion:""},
      { src: "/src/Images/Roster/Umaga.png", name: "Umaga", gender: "Man", tag: "R" , champion:""},
      { src: "/src/Images/Roster/UncleHowdy.png", name: "Uncle Howdy", gender: "Man", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/Undertaker.png", name: "Undertaker", gender: "Man", tag: "UNDRAFTED" , champion:""},
      { src: "/src/Images/Roster/Vader.png", name: "Vader", gender: "Man", tag: "L" , champion:""},
      { src: "/src/Images/Roster/Valhalla.png", name: "Valhalla", gender: "Women", tag: "SD" , champion:""},
      { src: "/src/Images/Roster/WadeBarrett.png", name: "Wade Barrett", gender: "Man", tag: "R" , champion:""},
      { src: "/src/Images/Roster/WendyChoo.png", name: "Wendy Choo", gender: "Women", tag: "R" , champion:""},
      { src: "/src/Images/Roster/WesLee.png", name: "Wes Lee", gender: "Man", tag: "R" , champion:""},
      { src: "/src/Images/Roster/WilliamRegal.png", name: "William Regal", gender: "Man", tag: "SD", tag2: "GM" , champion:""},
      { src: "/src/Images/Roster/Wolfgang.png", name: "Wolfgang", gender: "Man", tag: "R" , champion:""},
      { src: "/src/Images/Roster/X-Pac.png", name: "X-Pac", gender: "Man", tag: "L" , champion:""},
      { src: "/src/Images/Roster/XavierWoods.png", name: "Xavier Woods", gender: "Man", tag: "R" , champion:""},
      { src: "/src/Images/Roster/Yokozuna.png", name: "Yokozuna", gender: "Man", tag: "L" , champion:""},
      { src: "/src/Images/Roster/ZelinaVega.png", name: "ZelinaVega", gender: "Women", tag: "R" , champion:""},
      { src: "/src/Images/Roster/ZoeyStark.png", name: "Zoey Stark", gender: "Women", tag: "R" , champion:""},
  ],
  RAW: [],
  SMACKDOWN: [],
  Legend: [],
  Champions: [],
  Men: [],
  Women: [],
  "Tag Teams": [
    { src: "/src/Images/Roster/TagTeam/AlphaAcadamy.png", name: "Alpha Acadamy", tag: "RAW", champion:""},
    { src: "/src/Images/Roster/TagTeam/AmericanMade.png", name: "American Made", tag: "SD", champion:""},
    { src: "/src/Images/Roster/TagTeam/Angel&Berto.png", name: "Angel & Berto", tag: "SD", champion:""},
    { src: "/src/Images/Roster/TagTeam/AOP.png", name: "AOP", tag: "SD", champion:""},
    { src: "/src/Images/Roster/TagTeam/ChaseU.png", name: "Chase U", tag: "RAW", champion:""},
    { src: "/src/Images/Roster/TagTeam/DIY.png", name: "DIY", tag: "RAW", champion:""},
    { src: "/src/Images/Roster/TagTeam/DudleyBoys.png", name: "Dudley Boys", tag: "SD", champion:""},
    { src: "/src/Images/Roster/TagTeam/Gallus.png", name: "Gallus", tag: "RAW", champion:""},
    { src: "/src/Images/Roster/TagTeam/JudgementDay.png", name: "Judgement Day", tag: "SD", champion:""},
    { src: "/src/Images/Roster/TagTeam/Lorenzo&D'Angelo.png", name: "Lorenzo & D'Angelo", tag: "RAW", champion:""},
    { src: "/src/Images/Roster/TagTeam/LWO.png", name: "LWO", tag: "RAW", champion:""},
    { src: "/src/Images/Roster/TagTeam/MCMG.png", name: "MCMG", tag: "SD", champion:"SDTT"},
    { src: "/src/Images/Roster/TagTeam/NCR.png", name: "New Catch Republic", tag: "SD", champion:""},
    { src: "/src/Images/Roster/TagTeam/NewBloodline.png", name: "New Bloodline", tag: "RAW", champion:""},
    { src: "/src/Images/Roster/TagTeam/NewDay.png", name: "New Day", tag: "RAW", champion:""},
    { src: "/src/Images/Roster/TagTeam/OC.png", name: "OC", tag: "RAW", champion:"RAWTT"},
    { src: "/src/Images/Roster/TagTeam/PrettyDeadly.png", name: "Pretty Deadly", tag: "SD", champion:""},
    { src: "/src/Images/Roster/TagTeam/StreetProfits.png", name: "Street Profits", tag: "RAW", champion:""},
    { src: "/src/Images/Roster/TagTeam/Theory&Waller.png", name: "Theory & Waller", tag: "SD", champion:""},
    { src: "/src/Images/Roster/TagTeam/VikingRaiders.png", name: "Viking Raiders", tag: "SD", champion:""},
    { src: "/src/Images/Roster/TagTeam/WyattSix.png", name: "Wyatt Six", tag: "SD", champion:""},
  ],
  Undrafted: [],
  GM: []
};

// Assign appropriate className based on champion
rosterData.ALL.forEach(wrestler => {
  if (wrestler.champion) {
    wrestler.className = wrestler.champion;
    rosterData.Champions.push(wrestler);
  } else if (wrestler.tag === "R") {
    wrestler.className = "ALLRAW";
  } else if (wrestler.tag === "SD") {
    wrestler.className = "ALLSD";
  } else if (wrestler.tag === "L") {
    wrestler.className = "ALLLegend";
  } else if (wrestler.tag === "UNDRAFTED") {
    wrestler.className = "ALLGeneral";
  }
});

// Update "Tag Teams" to include champions in the "Champions" tab
rosterData["Tag Teams"].forEach(tagTeam => {
  if (tagTeam.champion) {
    tagTeam.className = tagTeam.champion;
    rosterData.Champions.push(tagTeam);
  } else if (tagTeam.tag === "RAW") {
    tagTeam.className = "ALLRAW";
  } else if (tagTeam.tag === "SD") {
    tagTeam.className = "ALLSD";
  }
});

export default rosterData;
