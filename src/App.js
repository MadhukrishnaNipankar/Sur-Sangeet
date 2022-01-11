import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import SearchResults from './Components/SearchResults';
import Explore from './Components/Explore';

//importing react-routers
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App bgcolor" style={{ height: "fit-content", width: "100vw" }}>
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
            <Explore/>
          </Route>

        </Switch>
        {/* <Footer/> */}
      </Router>
    </div>
  );
}

export default App;
