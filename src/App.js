import React from "react";
import "./App.css";
import User from "./components/User";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import { Provider } from "react-redux"; //to connect react with redux
import store from "./redux/store";
import UserDetails from "./components/UserDetails";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route exact path="/users">
              <User />
            </Route>
            <Route path="/users/:id">
              <UserDetails />
            </Route>
          </Switch>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
