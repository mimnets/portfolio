import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <Router>
      <Switch>
      <Route path="/projects">
          <Projects></Projects>
        </Route>
        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
