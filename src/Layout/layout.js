import Header from "./Header/header";
import Home from "./Home/home"
import "./styles.scss";

const Layout = () => {
  return (
    <div className="layout-wrapper">
      <div className="main-wrapper">
        <Header />
        <Home />
      </div>
    </div>
  );
};

export default Layout;
