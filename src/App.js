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

import image1 from "./assets/img/mainPage/IOT.jpg";
import image2 from "./assets/img/mainPage/Digitalization.jpg";
import image3 from "./assets/img/mainPage/BusinessPlatform.jpg";
import image4 from "./assets/img/mainPage/SecurityService.jpg";
// import Page1 from "./pages/landingPage/Page1";
// import Page2 from "./pages/landingPage/Page2";
// import Page3 from "./pages/landingPage/Page3";
// import Page4 from "./pages/landingPage/Page4";
import SecondPage1 from "./pages/secondPage/SecondPage1";
import ThirdPage1 from "./pages/thirdPage/ThirdPage1";
import FifthPage1 from "./pages/fifthPage/FifthPage1";
import FifthPage2 from "./pages/fifthPage/FifthPage2";
import FifthPage3 from "./pages/fifthPage/FifthPage3";
import Item from "./components/Item";
import Item2 from "./components/Item2";
import FifthPage4 from "./pages/fifthPage/FifthPage4";
import FourthPage1 from "./pages/forthPage/FourthPage1";

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
            <div className="app__itemsContainer">
              <Item2
                title="Internet of Things"
                desc="Do you believe that everything can be done easily? We believe, and
                we create it."
                descLink=""
                backgroundImg={image1}
                leftBtnTxt="ORDER NOW"
                leftBtnLink=""
                rightBtnTxt="FIND OUT MORE"
                rightBtnLink="/iot"
                // first
                itemPosition="item__right"
              />
              <Item2
                title="Digitalization"
                desc="Digital transformation? not just a discourse, see what we can do for
                you."
                descLink=""
                backgroundImg={image2}
                leftBtnTxt="CUSTOM ORDER"
                leftBtnLink=""
                rightBtnTxt="FIND OUT MORE"
                rightBtnLink="/digitalization"
                itemPosition="item__left"
              />
              <Item2
                title="Business Platform"
                desc="Everyone deserves a solution, and we're trying to help solve it."
                descLink=""
                backgroundImg={image3}
                leftBtnTxt="CUSTOM ORDER"
                leftBtnLink=""
                rightBtnTxt="LEARN MORE"
                rightBtnLink="/business-platform"
                itemPosition="item__center"
              />
              <Item2
                title="Professional Services"
                desc="Need technical specialist team to help your business? We initially
                focused on that support service."
                descLink=""
                backgroundImg={image4}
                leftBtnTxt="SHOP NOW"
                leftBtnLink=""
                rightBtnTxt="LEARN MORE"
                rightBtnLink="/support-service"
                itemPosition="item__center"
              />
            </div>

            {/* <Page1 background={image1} />
            <Page2 background={image2} />
            <Page3 background={image3} />
            <Page4 background={image4} />
            <SecondPage1 />
            <ThirdPage1 />
            <FifthPage1 /> */}
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

          <Route exact path="/iot">
            <SecondPage1 />
          </Route>
          <Route exact path="/digitalization">
            <ThirdPage1 />
          </Route>
          <Route exact path="/business-platform">
            <FourthPage1 />
          </Route>
          <Route exact path="/support-service">
            <FifthPage1 />
            <FifthPage2 />
            <FifthPage3 />
            <FifthPage4 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
