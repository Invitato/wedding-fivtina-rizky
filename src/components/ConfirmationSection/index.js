import React, { useState } from 'react';
import { string, bool } from 'prop-types';
import { Link } from 'gatsby';

import WithAnimation from '../WithAnimation';
import { API_HOSTNAME } from '@/constants';
import { styWrapper, styFlex } from './styles';

const HADIR = 'Hadir';
const TIDAK_HADIR = 'Tidak bisa hadir';

function ConfirmationSection({ isInvitation, guestName, codeLink }) {
  const [name, setName] = useState('');
  const [hp, setHP] = useState('');
  const [address, setAddress] = useState('');
  const [attended, setAttended] = useState(HADIR);
  const [totalGuest, setTotalGuest] = useState(true);

  const handleSetForm = (e, setState) => {
    const value = e.target.value;
    setState(value);
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

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

    try {
      const rawResult = await fetch(
        `${API_HOSTNAME}?nama=${encodeURIComponent(name)}&alamat=${encodeURIComponent(address)}&hp=${encodeURIComponent(
          hp,
        )}&hadir=${encodeURIComponent(attended)}&jumlah_tamu=${totalGuest}`,
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          method: 'POST',
        },
      );

      const response = rawResult.json();
      if (response.success) {
        alert('Data berhasil disubmit');
      } else {
        alert('Gagal submit data, silahkan coba lagi!');
      }
    } catch (e) {
      console.error(e);
      alert('Gagal submit data, silahkan coba lagi!');
    }
  };

  return (
    <div css={styWrapper}>
      <div className="container">
        <WithAnimation>
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2 className="main-font color__primary">Konfirmasi Kehadiran</h2>
              <form className="my_form" onSubmit={handleSubmitForm}>
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
                  Submit
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
