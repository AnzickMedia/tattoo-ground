import NavBar from "./components/NavBar/NavBar";
import News from "./components/News/News";
import Events from "./components/Events/Events";
import Featured from "./components/Featured/Featured";
import { carouselInfo, carouselInfoTwo, carouselInfoThree } from "./globals.js";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <News />
                <Events />
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
      <Footer />
    </div>
  );
}

export default App;
