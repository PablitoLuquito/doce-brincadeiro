import { Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";

import "./App.css";

function App() {
  return (
    <main>
      <Switch>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/signup" exact>
          <Signup />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
      </Switch>
    </main>
  );
}

export default App;
