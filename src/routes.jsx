import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import FlightSearch from './components/flightSearch';
import FlightResults from './components/flightResults';

export default function Routes() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/"><FlightSearch/></Route>
          <Route path="/flightResults" component={FlightResults}></Route>
        </Switch>
      </div>
    </Router>
  );
}