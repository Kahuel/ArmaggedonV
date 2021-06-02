import React from "react";
import { Destruction, Asteroids, Info } from "pages";
import {
  Link,
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="title">
        <h1>ARMAGGEDON V</h1>
        <p>
          Сервис мониторинга и уничтожения астероидов, опасно подлетающих к
          Земле.
        </p>
        <div>
          <Link to="/main">
            <button>Астероиды</button>
          </Link>
          <Link to="/destruction">
            <button>Уничтожение</button>
          </Link>
        </div>
        <hr />
      </div>
      <Switch>
        <Route exact path="/">
          <Redirect to="/main" />
        </Route>
        <Route exact path="/main">
          <Asteroids />
        </Route>
        <Route path="/destruction">
          <Destruction />
        </Route>
        <Route path="/main/:id">
          <Info />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
