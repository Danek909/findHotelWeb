import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./AllHotels.module.css";
import { Hotel } from "./AllHotels";

interface Props {
  hotels: Hotel[];
  onHotelClick: (hotel: Hotel) => void;
  onToggleFavorite: (hotel: Hotel) => void;
  favorites: Hotel[];
}

const HotelList: React.FC<Props> = ({ hotels, onHotelClick, onToggleFavorite, favorites }) => {
  const { t } = useTranslation();

  if (!hotels.length) {
    return (
      <span className={styles.noResults}>
        <h2>{t("AllHotels.noResults")}</h2>
      </span>
    );
  }

  return (
    <div className={styles.hotel_list}>
      {hotels.map(hotel => {
        const isFavorite = (hotel: Hotel) => favorites.some(h => h.id === hotel.id);
        return (
          <div key={hotel.id} className={styles.hotel_card}>
            <img
              src={hotel.imageUrl}
              alt={t(`hotels.${hotel.key}.name`)}
              onClick={() => onHotelClick(hotel)}
            />
            <h3>{t(`hotels.${hotel.key}.name`)}</h3>
            <p>{t("AllHotels.price")}: <span>${hotel.price}</span></p>
            <p>{t("AllHotels.rating")}: <span>{hotel.rating}</span></p>
            <p>{t("AllHotels.date")}: <span>{hotel.date}</span></p>
            {hotel.discount && <h4>{t("AllHotels.discount")}: {hotel.discount}%</h4>}
            <button
              className={`${styles.favoriteButton} ${hotel.discount ? styles.discountButton : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                onToggleFavorite(hotel);
              }}
>
              {isFavorite(hotel) ? (
                <img className={styles.LikeImg} src={`/findHotelWeb/image/likeImg.png`} alt="delete" />
              ) : (
                <img className={styles.LikeImg} src={`/findHotelWeb/image/noLike.png`} alt="delete" />
              )}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default HotelList;
