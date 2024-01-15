import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./AndroidLarge4.css";

const AndroidLarge4 = () => {
  const navigate = useNavigate();

  const onEllipse3Click = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  return (
    <div className="laman-admin">
      <div className="laman-admin-child" />
      <div className="page">Page</div>
      <div className="seller">Seller</div>
      <div className="selection-bar">
        <div className="selection-bar-child" />
        <div className="search-bar">Search Bar</div>
      </div>
      <div className="laman-admin-item" />
      <div className="admin1231">Admin1231</div>
      <div className="laman-admin-inner" />
      <div className="laman-admin-child1" />
      <div className="laman-admin-child2" />
      <div className="chat">Chat</div>
      <div className="penjualan">Penjualan</div>
      <div className="komplain">Komplain</div>
      <div className="wait-list">Wait List</div>
      <div className="ellipse-div" />
      <div className="laman-admin-child3" />
      <div className="laman-admin-child4" onClick={onEllipse3Click} />
      <div className="laman-admin-child5" />
      <div className="pesanan-baru">Pesanan Baru</div>
      <div className="menunggu-konfirmasi">Menunggu Konfirmasi</div>
      <div className="div">7</div>
      <div className="div1">7</div>
      <img className="group-icon" alt="" src="/group-1.svg" />
      <img className="laman-admin-child6" alt="" src="/group-1.svg" />
      <div className="laman-admin-child7" />
      <img className="vector-icon" alt="" src="/vector-21.svg" />
      <div className="statistik-penjualan-minggu-container">
        <span>S</span>
        <span className="tatistik-penjualan-minggu">
          tatistik Penjualan Minggu ini
        </span>
      </div>
    </div>
  );
};

export default AndroidLarge4;
