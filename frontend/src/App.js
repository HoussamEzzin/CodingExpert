import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import AddTutorial from "./components/AddTutorial";
import Tutorial from "./components/Tutorial";
import TutorialsList from "./components/TutorialsList";

function App() {
  return (
      <Router>
        <NavBar/>
        <div className="container mt-3">
            <Switch>
                <Route exact path={["/", "/tutorials"]} component={TutorialsList} />
                <Route exact path="/add" component={AddTutorial} />
                <Route path="/tutorials/:id" component={Tutorial}/>
            </Switch>
        </div>
      </Router>
  );
}

export default App;
