import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Switch} from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
      <Router>
        <NavBar/>
        <div className="container mt-3">
            <Switch>
                <Route></Route>
                <Route></Route>
                <Route></Route>
            </Switch>
        </div>
      </Router>
  );
}

export default App;
