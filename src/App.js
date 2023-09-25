import logo from "./logo.svg";
import "./App.css";
import { useState } from 'react';
import { ThemeContext } from "./contexts/theme-context";
import Layout from "./Layout/layout"

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`theme-${theme}`}>
        <Layout>// Your code here</Layout>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
