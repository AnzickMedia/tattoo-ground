import NavBar from "./components/NavBar/NavBar";
import News from "./components/News/News";
import Events from "./components/Events/Events";
import Featured from "./components/Featured/Featured";
import { carouselInfo, carouselInfoTwo, carouselInfoThree } from "./globals.js";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Location from "./components/Location/Location";
import { all } from "./globals";



function App() {
  return (
    <div>
      <NavBar />
      <Router>
        <Routes>
          <Route
            path="/home"
            element={
              <>
                <News />
                <Events 
                all={all} />
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
          ></Route>
        </Routes>
      </Router>
      <Location all={all}/>
      <Footer />
    </div>
  );
}

export default App;
