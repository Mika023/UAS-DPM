import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./AndroidLarge1.css";

const AndroidLarge1 = () => {
  const navigate = useNavigate();

  const onBayarTextClick = useCallback(() => {
    navigate("/thanks");
  }, [navigate]);

  return (
    <div className="confirm-payment">
      <div className="confirm-payment-child" />
      <div className="confirm-payment-item" />
      <div className="bayar" onClick={onBayarTextClick}>
        Bayar
      </div>
      <div className="menunggu-konfirmasi-pembayaran">
        Menunggu Konfirmasi Pembayaran
      </div>
      <div className="confirm-payment-inner" />
      <div className="confirm-payment-child1" />
      <b className="no-transaksi">No. Transaksi</b>
      <b className="b">#123456</b>
      <b className="nama-barang">Nama Barang</b>
      <b className="jumlah-pembayaran">Jumlah Pembayaran</b>
      <b className="rp-123123123">Rp. 123123123</b>
      <b className="top-up-diamond-container">
        <p className="top-up-diamond">Top Up Diamond</p>
        <p className="top-up-diamond">Free Fire 500DM</p>
      </b>
      <div className="confirm-payment-child2" />
      <b className="metode-pembayaran">Metode Pembayaran</b>
      <b className="bank-a">Bank A</b>
    </div>
  );
};

export default AndroidLarge1;
