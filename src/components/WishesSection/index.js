import React, { useState, useEffect, useRef } from 'react';
import WishesContainer from './WishesContainer';
import { styWrapper, styForm } from './styles';
import { API_HOSTNAME } from '@/constants';
import { wishlist } from './wishlist-data';

const ALERT = {
  success: false,
  error: false,
};

function WishesSection() {
  const [loading, setLoading] = useState(false);
  const [loadingGet, setLoadingGet] = useState(false);
  const [showAlert, setShowAlert] = useState(ALERT);
  const [wishlist, setWishlist] = useState([]);

  const [name, setName] = useState('');
  const [ucapan, setUcapan] = useState('');
  const calledOne = useRef(false);

  const handleSetState = (e, setState) => {
    const value = e.target.value;
    setState(value);
  };

  const getData = async () => {
    setLoadingGet(true);

    try {
      const options = {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        method: 'GET',
      };

      const rawResult = await fetch(`${API_HOSTNAME}?action=read&tableName=ucapan`, options);
      const response = await rawResult.json();

      if (response.success) {
        setWishlist(response.data || []);
      } else {
        console.log('=> GAGAL');
      }

      setLoadingGet(false);
    } catch (e) {
      setLoadingGet(false);
    }

    setLoadingGet(false);
    calledOne.current = true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const config = `tableName=ucapan&action=insert_wish`;
      const rawResult = await fetch(
        `${API_HOSTNAME}?${config}&nama=${encodeURIComponent(name)}&wish=${encodeURIComponent(ucapan)}`,
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          method: 'POST',
        },
      );

      const response = await rawResult.json();
      if (response.success) {
        setShowAlert({ ...ALERT, success: true });
        setName('');
        setUcapan('');
        getData();
      } else {
        setShowAlert({ ...ALERT, error: false });
        alert('Gagal submit data, silahkan coba lagi!');
      }

      setLoading(false);
    } catch (e) {
      setLoading(false);
      setShowAlert({ ...ALERT, error: false });
      alert('Gagal submit data, silahkan coba lagi!');
    }
  };

  const renderAlert = () => {
    if (showAlert.success) {
      return (
        <div className="alert alert-success" role="alert">
          <b>Data berhasil disubmit ke database kami</b>. <br /> Terima kasih atas ucapan dan doanya! :)
        </div>
      );
    }

    if (showAlert.error) {
      return (
        <div className="alert alert-danger" role="alert">
          <b>Opps terjadi kesalahan!</b>. <br /> Silahkan coba beberapa saat lagi yaa! :)
        </div>
      );
    }

    return null;
  };

  /** Side effect to autoscroll */
  useEffect(() => {
    if (!calledOne.current) {
      getData();
    }
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2 className="main-font pr-co">Ucapkan Sesuatu</h2>
              <p>Kirimkan do'a & ucapan untuk kami.</p>
            </div>
          </div>
          <div>
            <form css={styForm} onSubmit={handleSubmit}>
              {renderAlert()}
              <div className="form-group">
                <input
                  type="Nama"
                  className="form-control"
                  min="6"
                  placeholder="Nama Anda"
                  value={name}
                  onChange={(e) => handleSetState(e, setName)}
                />
              </div>
              <div className="form-group">
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Doa & Ucapan"
                  value={ucapan}
                  onChange={(e) => handleSetState(e, setUcapan)}
                />
              </div>
              <button type="submit" value="Submit" className="btn btn-default buttonForm">
                {loading ? 'Memproses...' : 'Kirim Ucapan'}
              </button>
            </form>
          </div>
          <div className="row">
            <div className="col-md-12">
              {loadingGet ? <p className="text-center">Memproses data..</p> : <WishesContainer wishlist={wishlist} />}
            </div>
          </div>
        </div>
      </div>
      <div id="fh5co-testimonial" css={styWrapper} />
    </>
  );
}

export default WishesSection;
