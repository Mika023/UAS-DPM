import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  const onRectangle2Click = useCallback(() => {
    navigate("/free-fire-tab");
  }, [navigate]);

  const onRectangle3Click = useCallback(() => {
    navigate("/genshin-impact-tab");
  }, [navigate]);

  const onRectangle4Click = useCallback(() => {
    navigate("/sausage-tab");
  }, [navigate]);

  const onRectangle8Click = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  return (
    <div className="home-page">
      <div className="home-page-child" />
      <div className="home-page-item" />
      <img
        className="home-page-inner"
        alt=""
        src="/rectangle-3.svg"
        onClick={onRectangle2Click}
      />
      <img className="games-group-icon" alt="" src="/games-group-icon.svg" />
      <img
        className="home-page-child1"
        alt=""
        src="/rectangle-3.svg"
        onClick={onRectangle3Click}
      />
      <img
        className="home-page-child2"
        alt=""
        src="/rectangle-3.svg"
        onClick={onRectangle4Click}
      />
      <div className="hots-item">Hots item!</div>
      <div className="line-div" />
      <img className="home-page-child3" alt="" src="/polygon-1.svg" />
      <img className="home-page-child4" alt="" src="/polygon-2.svg" />
      <div className="home-page-child5" />
      <b className="games">Games</b>
      <img className="home-page-child6" alt="" src="/vector-2.svg" />
      <div className="home-page-child7" />
      <div className="home-page-child8" />
      <div className="home-page-child9" onClick={onRectangle8Click} />
    </div>
  );
};

export default HomePage;
