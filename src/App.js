import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import SearchResults from './Components/SearchResults';
import Explore from './Components/Explore';

//importing react-routers
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SearchState from './Context/Search/SearchState';


function App() {
  return (
    <div className="App bgcolor" style={{ height: "fit-content", width: "100vw" }}>
      <SearchState>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/SearchResults">
              <SearchResults />
            </Route>

            <Route exact path="/Explore">
              <Explore />
            </Route>

          </Switch>
        </Router>
      </SearchState>

    </div>
  );
}

export default App;
