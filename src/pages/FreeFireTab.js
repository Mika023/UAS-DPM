import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./FreeFireTab.css";

const FreeFireTab = () => {
  const navigate = useNavigate();

  const onPolygonIcon1Click = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  const onSubmitTextClick = useCallback(() => {
    navigate("/confirm-payment");
  }, [navigate]);

  return (
    <div className="free-fire-tab">
      <div className="free-fire-tab-child" />
      <img className="free-fire-tab-item" alt="" src="/vector-2.svg" />
      <div className="free-fire-tab-inner" />
      <div className="free-fire-tab-child1" />
      <div className="free-fire-banner">Free fire Banner</div>
      <div className="jenis-topup-freefire2">
        <div className="jenis-topup-freefire-child16" />
        <div className="jenis-topup-freefire-child17" />
        <div className="jenis-topup-freefire-child18" />
        <div className="jenis-topup-freefire-child19" />
        <div className="jenis-topup-freefire-child20" />
        <div className="jenis-topup-freefire-child21" />
        <div className="jenis-topup-freefire-child22" />
        <div className="jenis-topup-freefire-child23" />
        <div className="jenis-topup-freefire-child24" />
      </div>
      <div className="tab-id2">
        <div className="tab-id-child6" />
        <div className="tab-id-child7" />
        <div className="masukkan-id-kamu2">Masukkan ID Kamu</div>
        <div className="deskripsi2">Deskripsi</div>
        <div className="tab-id-child8" />
        <div className="your-id2">Your ID</div>
      </div>
      <div className="tab-nomor2">
        <div className="tab-nomor-child2" />
        <div className="tab-nomor-child3" />
        <div className="nomor3">{`Nomor `}</div>
        <b className="masukkin-nomor-wa2">Masukkin nomor WA kamu</b>
      </div>
      <div className="metode-pembayaran5">
        <div className="metode-pembayaran-child2" />
        <b className="metode-pembayaran6">Metode Pembayaran</b>
        <img
          className="metode-pembayaran-child3"
          alt=""
          src="/polygon-31.svg"
        />
        <img
          className="metode-pembayaran-child4"
          alt=""
          src="/polygon-42.svg"
          onClick={onPolygonIcon1Click}
        />
      </div>
      <div className="submit-tab2">
        <img className="rectangle-icon" alt="" src="/rectangle-34.svg" />
        <b className="submit2" onClick={onSubmitTextClick}>
          Submit
        </b>
      </div>
    </div>
  );
};

export default FreeFireTab;
