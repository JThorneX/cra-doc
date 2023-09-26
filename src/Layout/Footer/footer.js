import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        &copy; {new Date().getFullYear()} <span>Light/Dark mode app</span>
      </div>
    </div>
  );
};

export default Footer;
