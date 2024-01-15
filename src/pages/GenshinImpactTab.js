import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./GenshinImpactTab.css";

const GenshinImpactTab = () => {
  const navigate = useNavigate();

  const onSubmitTextClick = useCallback(() => {
    navigate("/confirm-payment");
  }, [navigate]);

  const onPolygonIcon2Click = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  return (
    <div className="genshin-impact-tab">
      <div className="genshin-impact-tab-child" />
      <img className="genshin-impact-tab-item" alt="" src="/vector-2.svg" />
      <div className="submit-tab1">
        <img className="submit-tab-item" alt="" src="/rectangle-34.svg" />
        <b className="submit1" onClick={onSubmitTextClick}>
          Submit
        </b>
        <div className="submit-tab-inner" />
        <div className="submit-tab-child1" />
      </div>
      <div className="genshin-impact-banner">Genshin Impact Banner</div>
      <div className="tab-id1">
        <div className="tab-id-child1" />
        <div className="tab-id-child2" />
        <div className="masukkan-id-kamu1">Masukkan ID Kamu</div>
        <div className="deskripsi1">Deskripsi</div>
        <div className="tab-id-child3" />
        <div className="your-id1">Your ID</div>
        <div className="tab-id-child4" />
        <div className="pilih-server">Pilih Server</div>
        <img className="tab-id-child5" alt="" src="/polygon-41.svg" />
      </div>
      <div className="jenis-topup-freefire1">
        <div className="jenis-topup-freefire-child7" />
        <div className="jenis-topup-freefire-child8" />
        <div className="jenis-topup-freefire-child9" />
        <div className="jenis-topup-freefire-child10" />
        <div className="jenis-topup-freefire-child11" />
        <div className="jenis-topup-freefire-child12" />
        <div className="jenis-topup-freefire-child13" />
        <div className="jenis-topup-freefire-child14" />
        <div className="jenis-topup-freefire-child15" />
      </div>
      <div className="tab-nomor1">
        <div className="tab-nomor-inner" />
        <div className="tab-nomor-child1" />
        <div className="nomor2">{`Nomor `}</div>
        <b className="masukkin-nomor-wa1">Masukkin nomor WA kamu</b>
      </div>
      <div className="metode-pembayaran3">
        <div className="metode-pembayaran-inner" />
        <b className="metode-pembayaran4">Metode Pembayaran</b>
        <img className="metode-pembayaran-child1" alt="" src="/polygon-3.svg" />
      </div>
      <img
        className="genshin-impact-tab-inner"
        alt=""
        src="/polygon-4.svg"
        onClick={onPolygonIcon2Click}
      />
    </div>
  );
};

export default GenshinImpactTab;
