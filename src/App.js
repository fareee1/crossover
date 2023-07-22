import logo from "./images/yelp_logo.png";
import { Searchbar } from "./components/Searchbar.js";
import { Links } from "./components/Links.js";

function App() {
  return (
    <div className="App">
      <div className="backgroundContainer">
        <div class="logoWrapper">
          <img src={logo} className="logo" alt="logo" />
        </div>
        <Searchbar />
        <Links />
      </div>
    </div>
  );
}

export default App;
