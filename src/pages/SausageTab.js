import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SausageTab.css";

const SausageTab = () => {
  const navigate = useNavigate();

  const onSubmitTextClick = useCallback(() => {
    navigate("/confirm-payment");
  }, [navigate]);

  const onPolygonIcon1Click = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  return (
    <div className="sausage-tab">
      <div className="sausage-tab-child" />
      <img className="sausage-tab-item" alt="" src="/vector-2.svg" />
      <div className="submit-tab">
        <img className="submit-tab-child" alt="" src="/rectangle-34.svg" />
        <b className="submit" onClick={onSubmitTextClick}>
          Submit
        </b>
      </div>
      <div className="sausage-tab-inner" />
      <div className="sausage-tab-child1" />
      <div className="tab-id">
        <div className="tab-id-child" />
        <div className="tab-id-item" />
        <div className="masukkan-id-kamu">Masukkan ID Kamu</div>
        <div className="deskripsi">Deskripsi</div>
        <div className="tab-id-inner" />
        <div className="your-id">Your ID</div>
      </div>
      <div className="sausage-banner">Sausage Banner</div>
      <div className="jenis-topup-freefire">
        <div className="jenis-topup-freefire-child" />
        <div className="jenis-topup-freefire-item" />
        <div className="jenis-topup-freefire-inner" />
        <div className="jenis-topup-freefire-child1" />
        <div className="jenis-topup-freefire-child2" />
        <div className="jenis-topup-freefire-child3" />
        <div className="jenis-topup-freefire-child4" />
        <div className="jenis-topup-freefire-child5" />
        <div className="jenis-topup-freefire-child6" />
      </div>
      <div className="tab-nomor">
        <div className="tab-nomor-child" />
        <div className="tab-nomor-item" />
        <div className="nomor1">{`Nomor `}</div>
        <b className="masukkin-nomor-wa">Masukkin nomor WA kamu</b>
      </div>
      <div className="metode-pembayaran1">
        <div className="metode-pembayaran-child" />
        <b className="metode-pembayaran2">Metode Pembayaran</b>
        <img className="metode-pembayaran-item" alt="" src="/polygon-3.svg" />
      </div>
      <img
        className="polygon-icon"
        alt=""
        src="/polygon-4.svg"
        onClick={onPolygonIcon1Click}
      />
    </div>
  );
};

export default SausageTab;
