//THE USUAL
import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import Prescription from "./Layout/Layouts/Prescription/prescriptions";
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
import MyChartTablet from "./Layout/Layouts/Tablet/MyChart/myChart";
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
import RegisterMobile from "./Layout/Layouts/Mobile/Register/register";
import MyChartMobile from "./Layout/Layouts/Mobile/MyChart/myChart";
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
                  {/* Home Routes 
                  
                  */}
                  {matches.small && (
                    <Route path="/" element={<SplashMobile />} />
                  )}
                  {matches.small && (
                    <Route path="/home" element={<HomeMobile />} />
                  )}
                  {matches.medium && (
                    <Route path="/" element={<SplashTablet />} />
                  )}
                  {matches.medium && (
                    <Route path="/home" element={<HomeTablet />} />
                  )}
                  {matches.large && <Route path="/" element={<HomeLayout />} />}

                  {/* About Us Routes 
                  
                  */}

                  {matches.small && (
                    <Route path="/about-us" element={<AboutUsMobile />} />
                  )}

                  {matches.medium && (
                    <Route path="/about-us" element={<AboutUsTablet />} />
                  )}

                  {matches.large && (
                    <Route path="/about-us" element={<AboutUs />} />
                  )}

                  {/* Appointments Routes  
                  
                  */}

                  {matches.small && (
                    <Route
                      path="/appointments"
                      element={<AppointmentsMobile />}
                    />
                  )}

                  {matches.medium && (
                    <Route
                      path="/appointments"
                      element={<AppointmentsTablet />}
                    />
                  )}

                  {matches.large && (
                    <Route path="/appointments" element={<Appointments />} />
                  )}

                  {/* Contact Routes  
                  
                  */}

                  {matches.small && (
                    <Route path="/contact" element={<ContactMobile />} />
                  )}

                  {matches.medium && (
                    <Route path="/contact" element={<ContactTablet />} />
                  )}

                  {matches.large && (
                    <Route path="/contact" element={<Contact />} />
                  )}

                  {/* Login Routes  
                  
                  */}

                  {matches.small && (
                    <Route path="/login" element={<LoginMobile />} />
                  )}

                  {matches.medium && (
                    <Route path="/login" element={<LoginTablet />} />
                  )}

                  {matches.large && <Route path="/login" element={<Login />} />}

                  {/* Register Routes  
                  
                  */}

                  {matches.small && (
                    <Route path="/register" element={<RegisterMobile />} />
                  )}

                  {matches.medium && (
                    <Route path="/register" element={<RegisterTablet />} />
                  )}

                  {matches.large && (
                    <Route path="/register" element={<Register />} />
                  )}

                  {/* My Chart Routes  
                  
                  */}

                  {matches.small && (
                    <Route path="/my-chart" element={<MyChartMobile />} />
                  )}

                  {matches.medium && (
                    <Route path="/my-chart" element={<MyChartTablet />} />
                  )}

                  {matches.large && (
                    <Route path="/my-chart" element={<MyChart />} />
                  )}

                  {/* Pay Bill Routes  
                  
                  */}

                  {matches.small && (
                    <Route path="/pay-bill" element={<PayBillMobile />} />
                  )}

                  {matches.medium && (
                    <Route path="/pay-bill" element={<PayBillTablet />} />
                  )}

                  {matches.large && (
                    <Route path="/pay-bill" element={<PayBill />} />
                  )}

                  {/* Prescription Routes 
                  
                  */}

                  {matches.small && (
                    <Route
                      path="/prescriptions"
                      element={<PrescriptionMobile />}
                    />
                  )}

                  {matches.medium && (
                    <Route
                      path="/prescriptions"
                      element={<PrescriptionTablet />}
                    />
                  )}

                  {matches.large && (
                    <Route path="/prescriptions" element={<Prescription />} />
                  )}

                  {/* Test Results Routes  
                  
                  */}
                  {matches.small && (
                    <Route
                      path="/test-results"
                      element={<TestResultsMobile />}
                    />
                  )}

                  {matches.medium && (
                    <Route
                      path="/test-results"
                      element={<TestResultsTablet />}
                    />
                  )}

                  {matches.large && (
                    <Route path="/test-results" element={<TestResults />} />
                  )}

                  {/* Messages Routes
                   
                   */}
                  {matches.small && (
                    <Route path="/messages" element={<MessagesMobile />} />
                  )}

                  {matches.medium && (
                    <Route path="/messages" element={<MessagesTablet />} />
                  )}

                  {matches.large && (
                    <Route path="/messages" element={<Messages />} />
                  )}

                  {/* Privacy Routes  
                  
                  */}
                  {matches.small && (
                    <Route path="/privacy" element={<PrivacyMobile />} />
                  )}

                  {matches.medium && (
                    <Route path="/privacy" element={<PrivacyTablet />} />
                  )}

                  {matches.large && (
                    <Route path="/privacy" element={<Privacy />} />
                  )}

                  {/* Disclaimer Routes  
                  
                  */}

                  {matches.small && (
                    <Route path="/disclaimer" element={<DisclaimerMobile />} />
                  )}

                  {matches.medium && (
                    <Route path="/disclaimer" element={<DisclaimerTablet />} />
                  )}

                  {matches.large && (
                    <Route path="/disclaimer" element={<Disclaimer />} />
                  )}

                  {/* Settings Routes  
                  
                  */}

                  {matches.small && (
                    <Route path="/user-settings" element={<SettingsMobile />} />
                  )}

                  {matches.medium && (
                    <Route path="/user-settings" element={<SettingsTablet />} />
                  )}

                  {matches.large && (
                    <Route path="/user-settings" element={<Settings />} />
                  )}

                  {/* 404 Routes  
                  
                  */}

                  {matches.small && (
                    <Route path="/404" element={<FourOhFourMobile />} />
                  )}

                  {matches.medium && (
                    <Route path="/404" element={<FourOhFourTablet />} />
                  )}

                  {matches.large && (
                    <Route path="/404" element={<FourOhFour />} />
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
