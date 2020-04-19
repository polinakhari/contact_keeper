import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/layout/NavBar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import "./App.css";
import ContactState from "./context/contact/ContactState";
import AuthState from "./context/auth/AuthState";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import AlertState from './context/alert/AlertState';
import Alerts from "./components/layout/Alerts"
import setAuthToken from "./utils/setAuthToken"
import PrivateRoute from "./components/routing/privatRoute"

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState> 
    <ContactState>
      <AlertState>           
        <Router>
          <>
            <NavBar />
            <div className="container">
              <Alerts/>
              <Switch>
                <PrivateRoute exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
              </Switch>
            </div>
          </>
        </Router>
      
      </AlertState>
    </ContactState>
    </AuthState>
  );
};

export default App;
