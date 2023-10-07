//THE USUAL
import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Media from "react-media";

//DESKTOP
import HomeLayout from "./Layout/Layouts/Home/home";
import AboutUs from "./Layout/Layouts/AboutUs/aboutUs";
import Appointments from "./Layout/Layouts/Appointments/appointments";
import Contact from "./Layout/Layouts/Contact/contact";
import Login from "./Layout/Layouts/Login/login";
import Register from "./Layout/Layouts/Register/register";
import MyChart from "./Layout/Layouts/MyChart/myChart";
import PayBill from "./Layout/Layouts/PayBill/payBill";
import Prescriptions from "./Layout/Layouts/Prescription/prescriptions";
import TestResults from "./Layout/Layouts/TestResults/testResults";
import Messages from "./Layout/Layouts/Messages/messages";
import Privacy from "./Layout/Layouts/Privacy/privacy";
import Disclaimer from "./Layout/Layouts/Disclaimer/disclaimer";
import Settings from "./Layout/Layouts/UserSettings/userSettings";
import FourOhFour from "./Layout/Layouts/404/404";

//TABLET
import SplashTablet from "./Layout/Layouts/Tablet/Splash/splash";
import HomeTablet from "./Layout/Layouts/Tablet/Home/homeTablet";
import AboutUsTablet from "./Layout/Layouts/Tablet/AboutUs/aboutUs";
import AppointmentsTablet from "./Layout/Layouts/Tablet/Appointments/appointments";
import ContactTablet from "./Layout/Layouts/Tablet/Contact/contact";
import LoginTablet from "./Layout/Layouts/Tablet/Login/login";
import RegisterTablet from "./Layout/Layouts/Tablet/Register/register";
import PayBillTablet from "./Layout/Layouts/Tablet/PayBill/payBill";
import PrescriptionTablet from "./Layout/Layouts/Tablet/Prescription/prescription";
import TestResultsTablet from "./Layout/Layouts/Tablet/TestResults/testResults";
import MessagesTablet from "./Layout/Layouts/Tablet/Messages/messages";
import PrivacyTablet from "./Layout/Layouts/Tablet/Privacy/privacy";
import DisclaimerTablet from "./Layout/Layouts/Tablet/Disclaimer/disclaimer";
import SettingsTablet from "./Layout/Layouts/Tablet/UserSettings/userSettings";
import FourOhFourTablet from "./Layout/Layouts/Tablet/404/404";

//MOBILE
import SplashMobile from "./Layout/Layouts/Mobile/Splash/splash";
import HomeMobile from "./Layout/Layouts/Mobile/Home/homeMobile";
import AboutUsMobile from "./Layout/Layouts/Mobile/AboutUs/aboutUs";
import AppointmentsMobile from "./Layout/Layouts/Mobile/Appointments/appointments";
import ContactMobile from "./Layout/Layouts/Mobile/Contact/contact";
import LoginMobile from "./Layout/Layouts/Mobile/Login/login";
import RegistertMobile from "./Layout/Layouts/Mobile/Register/register";
import PayBillMobile from "./Layout/Layouts/Mobile/PayBill/payBill";
import PrescriptionMobile from "./Layout/Layouts/Mobile/Prescription/prescription";
import TestResultsMobile from "./Layout/Layouts/Mobile/TestResults/testResults";
import MessagesMobile from "./Layout/Layouts/Mobile/Messages/messages";
import PrivacyMobile from "./Layout/Layouts/Mobile/Privacy/privacy";
import DisclaimerMobile from "./Layout/Layouts/Mobile/Disclaimer/disclaimer";
import SettingsMobile from "./Layout/Layouts/Mobile/UserSettings/userSettings";
import FourOhFourMobile from "./Layout/Layouts/Mobile/404/404";

//3RD PARTY

import ScrollToTop from "./components/scrollToTop";
import { ThemeContext } from "./contexts/theme-context";

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
            <Media
              queries={{
                small: "(max-width: 600px)",
                medium: "(min-width:600px) and (max-width:1080px)",
                large: "(min-width: 1080px)",
              }}
            >
              {(matches) => (
                <Routes>
                  {/* home routes */}
                  {matches.small && (
                    <Route path="/cra-doc" element={<SplashMobile />} />
                  )}
                  {matches.small && (
                    <Route path="/cra-doc-home" element={<HomeMobile />} />
                  )}
                  {matches.medium && (
                    <Route path="/cra-doc" element={<SplashTablet />} />
                  )}
                  {matches.medium && (
                    <Route path="/cra-doc-home" element={<HomeTablet />} />
                  )}
                  {matches.large && (
                    <Route path="/cra-doc" element={<HomeLayout />} />
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
          </div>
        </ThemeContext.Provider>
      </Router>
    </div>
  );
}

export default App;
