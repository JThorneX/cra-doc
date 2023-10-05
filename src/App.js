import "./App.css";
import { useState } from "react";
import Media from "react-media";
import { ThemeContext } from "./contexts/theme-context";
import HomeLayout from "./Layout/Layouts/Home/home";
import Footer from "./Layout/Footer/footer";
import Header from "./Layout/Header/header";
import AboutUs from "./Layout/Layouts/AboutUs/aboutUsLayout";
import Appointments from "./Layout/Layouts/Appointments/appointmentsLayout";
import Contact from "./Layout/Layouts/Contact/contactLayout";
import Login from "./Layout/Layouts/Login/loginLayout";
import MyChart from "./Layout/Layouts/MyChart/myChart";
import PayBill from "./Layout/Layouts/PayBill/payBill";
import Prescriptions from "./Layout/Layouts/Prescription/prescriptionsLayout";
import Register from "./Layout/Layouts/Register/registerLayout";
import TestResults from "./Layout/Layouts/TestResults/testResults";
import Messages from "./Layout/Layouts/Messages/messages";
import Privacy from "./Layout/Layouts/Privacy/privacy";
import Disclaimer from "./Layout/Layouts/Disclaimer/disclaimer";

import HomeMobile from "./Layout/Layouts/Mobile/Home/homeMobile";
import LoginMobile from "./Layout/Layouts/Mobile/Login/loginMobile";
import Splash from "./Layout/Layouts/Mobile/Splash/splash";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop";

function App() {
  const isBrowserDefaultDark = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const getDefaultTheme = () => {
    const localStorageTheme = localStorage.getItem("default-theme");
    const browserDefault = isBrowserDefaultDark() ? "dark" : "light";
    return localStorageTheme || browserDefault;
  };

  const [theme, setTheme] = useState(getDefaultTheme());

  return (
    <div className="siteWrapper">
      <Router>
        <ScrollToTop />
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <div className={`theme-${theme}`}>
            <Header />
            <Media
              queries={{
                small: "(max-width: 600px)",
                large: "(min-width: 600px)",
              }}
            >
              {(matches) => (
                <Routes>
                  {matches.small && (
                    <Route path="/cra-doc" element={<Splash />} />
                  )}
                  {matches.large && (
                    <Route path="/cra-doc" element={<HomeLayout />} />
                  )}
                  {matches.small && (
                    <Route path="/home" element={<HomeMobile />} />
                  )}
                  {matches.large && (
                    <Route path="/contact" element={<Contact />} />
                  )}
                  {matches.large && (
                    <Route path="/myChart" element={<MyChart />} />
                  )}
                  {matches.large && (
                    <Route path="/aboutUs" element={<AboutUs />} />
                  )}
                  {matches.large && (
                    <Route path="/appointments" element={<Appointments />} />
                  )}
                  {matches.large && (
                    <Route path="/prescriptions" element={<Prescriptions />} />
                  )}
                  {matches.small && (
                    <Route path="/login-mobile" element={<LoginMobile />} />
                  )}
                  {matches.large && <Route path="/login" element={<Login />} />}
                  {matches.large && (
                    <Route path="/payBill" element={<PayBill />} />
                  )}
                  {matches.large && (
                    <Route path="/register" element={<Register />} />
                  )}
                  {matches.large && (
                    <Route path="/messages" element={<Messages />} />
                  )}
                  {matches.large && (
                    <Route path="/testResults" element={<TestResults />} />
                  )}
                  {matches.large && (
                    <Route path="/privacy" element={<Privacy />} />
                  )}
                  {matches.large && (
                    <Route path="/disclaimer" element={<Disclaimer />} />
                  )}
                </Routes>
              )}
            </Media>
            <div className="uniFooter">
              <Footer />
            </div>
          </div>
        </ThemeContext.Provider>
      </Router>
    </div>
  );
}

export default App;
