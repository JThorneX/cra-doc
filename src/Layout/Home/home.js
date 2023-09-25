import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        &copy; {new Date().getFullYear()} <span>Light/Dark mode app</span>
      </div>
    </div>
  );
};

export default Home;
