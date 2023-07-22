import logo from "./images/yelp_logo.png";
import {Searchbar} from "./components/Searchbar.js";
import {Links} from "./components/Links.js";

function App() {
  return (
    <div className="App">
      <div>
        <img src={logo} alt="logo" />
        <Searchbar />
        <Links />
      </div>
      
    </div>
  );
}

export default App;
