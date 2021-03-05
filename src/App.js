import logo from "./logo.svg";
import "./App.css";

//Component
import Home from "./components/screens/home/home.js";
import FormNalog from "./components/screens/form-nalog/form-nalog";
import FormProizvod from "./components/screens/form-proizvod/form-proizvod";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route path="/FormNalog" component={FormNalog}></Route>
            <Route path="/FormProizvod" component={FormProizvod}></Route>
            <Route path="/" component={Home}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
