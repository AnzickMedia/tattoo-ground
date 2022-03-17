import NavBar from "./components/NavBar/NavBar";
import News from "./components/News/News";
import Events from "./components/Events/Events";
import Featured from "./components/Featured/Featured";
import { carouselInfo, carouselInfoTwo, carouselInfoThree } from "./globals.js";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Location from "./components/Location/Location";
import { all } from "./globals";
import Artists from "./components/Artists/Artists";

function App() {
  return (
    <div>
      <NavBar />
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <News />
                <Events all={all} />
                <Featured
                  titulo="Featured Artists"
                  informacion={carouselInfo}
                />
                <Featured
                  titulo="Featured Shops"
                  informacion={carouselInfoTwo}
                />
                <Featured
                  titulo="Featured Products"
                  informacion={carouselInfoThree}
                />
              </>
            }
          />
          <Route exact path="/browse" element={<Location all={all} />}/>

          <Route exact path="/artists" element={ <Artists/>}/>
          
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
