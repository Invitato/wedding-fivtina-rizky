import React, { useState, useEffect, useCallback, useRef } from 'react';

import { API_HOSTNAME } from '@/constants';
import WishesItem from './WishesItem';
import { styButtonWrapper } from './styles';

const INTERVAL_SLIDE = 35000;

function WishesContainer() {
  const [active, setActive] = useState(0);
  const [pauseSlide, setPauseSlide] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(false);
  const totalWishes = wishlist.length || 0;

  const calledAPI = useRef(false);

  const handleSetActive = (isNext = true) => {
    if (isNext) {
      if (active === totalWishes - 1) {
        setActive(0);
      } else {
        setActive(active + 1);
      }
    } else {
      if (active === 0) {
        setActive(totalWishes - 1);
      } else {
        setActive(active - 1);
      }
    }

    setPauseSlide(true);

    setTimeout(() => {
      setPauseSlide(false);
    }, INTERVAL_SLIDE);
  };

  const handleSetNext = useCallback(() => {
    if (active === wishlist.length - 1) {
      setActive(0);
    } else {
      setActive(active + 1);
    }
  }, [active]);

  const getData = async () => {
    setLoading(true);

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

      setLoading(false);
    } catch (e) {
      setLoading(false);
    }

    calledAPI.current = true;
  };

  const renderWishlist = () => {
    return wishlist.map((w, index) => (
      <WishesItem key={index} name={w.nama} description={w.ucapan} isActive={index === active} />
    ));
  };

  /** Side effect to autoscroll */
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!pauseSlide && !calledAPI.current) {
        handleSetNext();
      } else {
        clearInterval(interval);
      }
    }, INTERVAL_SLIDE);

    return () => clearInterval(interval);
  }, [handleSetNext, pauseSlide]);

  if (loading) return <div>Memproses data..</div>;

  if (wishlist.length === 0) return null;

  return (
    <div className="wrap-testimony">
      {renderWishlist()}
      {wishlist.length > 1 && (
        <div css={styButtonWrapper}>
          <button className="btn btn-sm button-nav" onClick={() => handleSetActive(false)}>{`< Sebelumnya`}</button>
          <button className="btn btn-sm button-nav" onClick={() => handleSetActive(true)}>{`Selanjutnya >`}</button>
        </div>
      )}
    </div>
  );
}

export default React.memo(WishesContainer);
