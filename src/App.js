import "./App.css";
import { useState } from "react";
import { ThemeContext } from "./contexts/theme-context";
import HomeLayout from "./Layout/Home/home";
import Footer from "./Layout/Footer/footer";
import Header from "./Layout/Header/header";

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
