import Header from "../../Header/header";
import Home from "../../Home/home";
import Footer from "../../Footer/footer";
import "./homeStyles.scss";

const Layout = () => {
  return (
    <div className="layout-wrapper">
      <div className="main-wrapper">
        <Header />
        <Home />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
