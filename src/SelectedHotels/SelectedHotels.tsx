import React, { useEffect, useState } from 'react';
import styles from './SelectedHotels.module.css';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useTranslation } from 'react-i18next';
import { Hotel } from '../AllHotels/AllHotels';
import HotelModal from '../AllHotels/HotelModal';

const SelectedHotels = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [cookies, setCookie] = useCookies(['favorites']);
  const [favorites, setFavorites] = useState<Hotel[]>([]);
  const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(null); 

  useEffect(() => {
    if (cookies.favorites) {
      setFavorites(cookies.favorites);
    }
  }, [cookies.favorites]);

  const handleRemoveFavorite = (hotelId: number) => {
    const updatedFavorites = favorites.filter(h => h.id !== hotelId);
    setFavorites(updatedFavorites);
    setCookie('favorites', updatedFavorites, { path: '/', maxAge: 86400 });
  };

  return (
    <section className={styles.SelectedHotelsSection}>
      <div className={styles.content}>
        <h1 className={styles.textH1}>{t('SelectedHotels.title')}</h1>
        <div className={styles.divButton}>
          <button className={styles.buttonClose} onClick={() => navigate('/')}>
            {t('SelectedHotels.close')}
          </button>
        </div>
          {favorites.length === 0 ? (
            <p className={styles.noFavorites}>{t('SelectedHotels.noFavorites')}</p>
          ) : (
            <div className={styles.hotel_list}>
              {favorites.map(hotel => (
                <div
                  key={hotel.id}
                  className={styles.hotel_card}
                  onClick={() => setSelectedHotel(hotel)} >
                  <img src={hotel.imageUrl} alt={t(`hotels.${hotel.key}.name`)} />
                  <h3>{t(`hotels.${hotel.key}.name`)}</h3>
                  <p>{t('AllHotels.price')}: <span>${hotel.price}</span></p>
                  <p>{t('AllHotels.rating')}: <span>{hotel.rating}</span></p>
                  <p>{t('AllHotels.date')}: <span>{hotel.date}</span></p>
                  {hotel.discount && <h4>{t('AllHotels.discount')}: {hotel.discount}%</h4>}
                  <button className={`${styles.favoriteButton} ${hotel.discount ? styles.discountButton : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemoveFavorite(hotel.id);
                    }}>
                    <img className={styles.LikeImg} src={`/findHotelWeb/image/likeImg.png`} alt="delete" />
                  </button>
                </div>
              ))}
            </div>
          )}
     
      </div>

      {selectedHotel && (
        <HotelModal hotel={selectedHotel} onClose={() => setSelectedHotel(null)} />
      )}
    </section>
  );
};

export default SelectedHotels;
