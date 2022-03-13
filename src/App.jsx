import NavBar from "./components/NavBar/NavBar";
import News from "./components/News/News";
import Events from "./components/Events/Events"
import Featured from "./components/Featured/Featured";
import {carouselInfo, carouselInfoTwo,carouselInfoThree} from "./globals.js";
import Footer from "./components/Footer/Footer";



function App() {

  return (
    <div>
  
  <NavBar/>
  <News></News>
  <Events></Events>
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

  <Footer/>
    </div>
  );
}

export default App;
