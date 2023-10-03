import "./App.css";
import { useState } from "react";
import { ThemeContext } from "./contexts/theme-context";
import HomeLayout from "./Layout/Home/home";
import Footer from "./Layout/Footer/footer";
import Header from "./Layout/Header/header";
import AboutUs from "./Layout/Layouts/AboutUs/aboutUsLayout";
import Appointments from "./Layout/Layouts/Appointments/appointmentsLayout";
import Contact from "./Layout/Layouts/Contact/contactLayout";
import Login from "./Layout/Layouts/Login/loginLayout";
import MyChart from "./Layout/Layouts/MyChart/myChart";
import PayBill from "./Layout/Layouts/PayBill/payBill";
import Prescriptions from "./Layout/Layouts/Prescription/prescriptionLayout";
import Register from "./Layout/Layouts/Register/registerLayout";
import TestResults from "./Layout/Layouts/TestResults/testResults";
import Messages from "./Layout/Layouts/Messages/messages";

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
            <Routes>
              <Route path="cra-doc/" element={<HomeLayout />} />
              <Route path="cra-doc/contact" element={<Contact />} />
              <Route path="cra-doc/myChart" element={<MyChart />} />
              <Route path="cra-doc/aboutUs" element={<AboutUs />} />
              <Route path="cra-doc/appointments" element={<Appointments />} />
              <Route path="cra-doc/prescriptions" element={<Prescriptions />} />
              <Route path="cra-doc/login" element={<Login />} />
              <Route path="cra-doc/payBill" element={<PayBill />} />
              <Route path="cra-doc/register" element={<Register />} />
              <Route path="cra-doc/messages" element={<Messages />} />
              <Route path="cra-doc/testResults" element={<TestResults />} />
            </Routes>
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
