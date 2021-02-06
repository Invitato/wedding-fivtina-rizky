import React, { useState } from 'react';
import { string, bool } from 'prop-types';
import { Link } from 'gatsby';

import WithAnimation from '../WithAnimation';
import useDateCountdown from '@/hooks/useDateCountdown';
import { API_HOSTNAME } from '@/constants';
import { styWrapper, styFlex } from './styles';

const HADIR = 'Hadir';
const TIDAK_HADIR = 'Tidak bisa hadir';
const ALERT = {
  success: false,
  error: false,
};

function ConfirmationSection({ isInvitation, guestName, codeLink }) {
  const { timeHasRunOut } = useDateCountdown();

  const [name, setName] = useState('');
  const [hp, setHP] = useState('');
  const [address, setAddress] = useState('');
  const [attended, setAttended] = useState(HADIR);
  const [totalGuest, setTotalGuest] = useState('1');
  const [showAlert, setShowAlert] = useState(ALERT);
  const [loading, setLoading] = useState(false);

  if (timeHasRunOut) return null;

  const handleSetForm = (e, setState) => {
    const value = e.target.value;
    setState(value);
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    if (loading) return;

    if (!name) {
      alert('Nama tidak boleh kosong');
      return;
    }

    if (!hp) {
      alert('Nomor HP tidak boleh kosong');
      return;
    }

    if (!address) {
      alert('Alamat tidak boleh kosong');
      return;
    }

    setLoading(true);

    try {
      const config = `tableName=tamu&action=insert`;
      const rawResult = await fetch(
        `${API_HOSTNAME}?${config}&nama=${encodeURIComponent(name)}&alamat=${encodeURIComponent(
          address,
        )}&hp=${encodeURIComponent(hp)}&hadir=${encodeURIComponent(attended)}&jumlah_tamu=${totalGuest}`,
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
        setAttended('');
        setHP('');
        setAddress('');
        setTotalGuest('');
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
          <b>Data berhasil disubmit ke database kami</b>. <br /> Terima kasih atas konfirmasinya! :)
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

  return (
    <div css={styWrapper}>
      <div className="container">
        <WithAnimation>
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2 className="main-font color__primary" style={{ marginTop: '20px' }}>
                Konfirmasi Kehadiran
              </h2>
              <form className="my_form" onSubmit={handleSubmitForm}>
                {renderAlert()}
                <div className="form-group">
                  <p className="labelForm">Nama</p>
                  <input
                    type="text"
                    className="form-control"
                    min="6"
                    value={name}
                    onChange={(e) => handleSetForm(e, setName)}
                    placeholder=""
                  />
                </div>
                <div className="form-group">
                  <p className="labelForm">Nomor HP (Whatsapp)</p>
                  <input
                    type="tel"
                    min="8"
                    max="14"
                    className="form-control"
                    value={hp}
                    onChange={(e) => handleSetForm(e, setHP)}
                    placeholder=""
                  />
                </div>
                <div className="form-group">
                  <p className="labelForm">Alamat</p>
                  <textarea
                    type="text"
                    className="form-control"
                    value={address}
                    onChange={(e) => handleSetForm(e, setAddress)}
                    placeholder=""
                  />
                </div>
                <div className="form-group">
                  <p className="labelForm">Konfirmasi Kehadiran</p>
                  <select value={attended} className="form-control" onChange={(e) => handleSetForm(e, setAttended)}>
                    <option value={HADIR}>Hadir</option>
                    <option value={TIDAK_HADIR}>Tidak bisa hadir</option>
                  </select>
                </div>
                {attended === HADIR && (
                  <div className="form-group">
                    <p className="labelForm">Jumlah Tamu</p>
                    <select
                      value={totalGuest}
                      onChange={(e) => handleSetForm(e, setTotalGuest)}
                      className="form-control"
                    >
                      <option value="1">1 (Satu orang)</option>
                      <option value="2">2 (Dua Orang)</option>
                    </select>
                  </div>
                )}
                <button type="submit" value="Submit" className="btn btn-default buttonForm">
                  {loading ? 'Memproses...' : 'Kirim'}
                </button>
              </form>
            </div>
          </div>
        </WithAnimation>
      </div>
    </div>
  );
}

ConfirmationSection.propTypes = {
  codeLink: string.isRequired,
  isInvitation: bool.isRequired,
  guestName: string.isRequired,
};

export default React.memo(ConfirmationSection);
