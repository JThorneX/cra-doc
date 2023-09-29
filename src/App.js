import "./App.css";
import { useState } from "react";
import { ThemeContext } from "./contexts/theme-context";
import Layout from "./Layout/Layouts/Home/homeLayout";

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
    <>
      <Router>
        <ScrollToTop />
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <div className={`theme-${theme}`}>
            <Routes>
              <Route path="/" element={<Layout />} />
            </Routes>
          </div>
        </ThemeContext.Provider>
      </Router>
    </>
  );
}

export default App;
