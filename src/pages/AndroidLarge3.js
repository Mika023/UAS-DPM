import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./AndroidLarge3.css";

const AndroidLarge3 = () => {
  const navigate = useNavigate();

  const onLogoutTextClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onVectorIconClick = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  return (
    <div className="profile">
      <div className="profile-child" />
      <div className="ubah-foto-profile">Ubah Foto Profile</div>
      <div className="profile-item" />
      <div className="profile-inner" />
      <div className="info-profile">Info Profile</div>
      <div className="nama">Nama</div>
      <div className="nomor">Nomor</div>
      <div className="abcdffg">Abcdffg</div>
      <div className="abcdffg123">Abcdffg123</div>
      <div className="div2">0821123123</div>
      <div className="abcdgmailcom">abcd@gmail.com</div>
      <div className="e-mail">E-mail</div>
      <div className="nama">Nama</div>
      <div className="username">Username</div>
      <div className="profile-child1" />
      <div className="logout" onClick={onLogoutTextClick}>
        Logout
      </div>
      <img
        className="profile-child2"
        alt=""
        src="/vector-1.svg"
        onClick={onVectorIconClick}
      />
    </div>
  );
};

export default AndroidLarge3;
