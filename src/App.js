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
              <Route path="/" element={<HomeLayout />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/myChart" element={<MyChart />} />
              <Route path="/aboutUs" element={<AboutUs />} />
              <Route path="/appointments" element={<Appointments />} />
              <Route path="/prescriptions" element={<Prescriptions />} />
              <Route path="/login" element={<Login />} />
              <Route path="/payBill" element={<PayBill />} />
              <Route path="/register" element={<Register />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/testResults" element={<TestResults />} />
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
