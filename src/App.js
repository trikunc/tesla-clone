import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Menu from "./components/Menu";
import Login from "./components/Login";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./app/firebase";
import Signup from "./components/Signup";
import TeslaAccount from "./components/TeslaAccount";

import image1 from "./assets/img/Picture1.jpg";
import image2 from "./assets/img/Picture2.jpg";
import image3 from "./assets/img/Picture3.png";
import image4 from "./assets/img/Picture4.jpg";
import Page1 from "./pages/landingPage/Page1";
import Page2 from "./pages/landingPage/Page2";
import Page3 from "./pages/landingPage/Page3";
import Page4 from "./pages/landingPage/Page4";

function App() {
  const user = useSelector(selectUser);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // User is signed in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        );
      } else {
        // User is signed out
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            {isMenuOpen && <Menu />}
            <Page1 background={image1} />
            <Page2 background={image2} />
            <Page2 background={image3} />
            <Page2 background={image4} />
          </Route>
          <Route path="/login">
            {user ? <Redirect to="/teslaaccount" /> : <Login />}
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/teslaaccount">
            {!user ? (
              <Redirect to="/login" />
            ) : (
              <>
                <TeslaAccount
                  isMenuOpen={isMenuOpen}
                  setIsMenuOpen={setIsMenuOpen}
                />
                {isMenuOpen && <Menu />}
              </>
            )}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
