import NavButtons from "./nav-button"
import Home from "./home"
import About from "./about"
import GanProject from "./gan-project"
import StockRL from "./stock-rl"
import Contact from "./contact"
import Projects from "./project"
import { Route, Switch } from "react-router-dom";
import {HashRouter} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';


function App() {
  return (
    <div>
      <div id="App">
        <div>
        <HashRouter className='App'>
          <Switch>
            <Route path="/" exact component={() => <div><div><NavButtons /></div><Home /><About/><Projects/><Contact/></div>} />
            <Route path="/projects/mnist-gan" exact component={() => <GanProject />} />
            <Route path="/projects/stock-rl" exact component={() => <StockRL />} />
          </Switch>
        </HashRouter>
        </div>
      </div>
    </div>
    
  );
}

export default App;
