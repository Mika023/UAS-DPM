import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./AndroidLarge2.css";

const AndroidLarge2 = () => {
  const navigate = useNavigate();

  const onHalamanUtamaText1Click = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  return (
    <div className="thanks">
      <div className="thanks-child" />
      <b className="no-transaksi-123456">No Transaksi #123456</b>
      <b className="pembayaran-terverifikasi">
        <p className="pembayaran">{`Pembayaran `}</p>
        <p className="pembayaran">Terverifikasi</p>
      </b>
      <b className="terima-kasih">Terima kasih!</b>
      <div className="thanks-item" />
      <div className="thanks-item" />
      <div className="halaman-utama">Halaman Utama</div>
      <div className="thanks-item" />
      <div className="halaman-utama1" onClick={onHalamanUtamaText1Click}>
        Halaman Utama
      </div>
    </div>
  );
};

export default AndroidLarge2;
