import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./routes/landing";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          {/* <Route path="/detection">
                <Detection />
              </Route>
              <Route path="/result">
                <Result />
              </Route> */}
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
