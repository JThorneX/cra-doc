import Header from "./Header/header";
import Home from "./Home/home";
import "./styles.scss";
import { ParallaxProvider } from "react-scroll-parallax";

const Layout = () => {
  return (
    <ParallaxProvider>
      <div className="layout-wrapper">
        <div className="main-wrapper">
          <Header />
          <Home />
        </div>
      </div>
    </ParallaxProvider>
  );
};

export default Layout;
