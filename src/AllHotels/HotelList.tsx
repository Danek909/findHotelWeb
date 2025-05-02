import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./AllHotels.module.css";
import { Hotel } from "./AllHotels";

interface Props {
  hotels: Hotel[];
  onHotelClick: (hotel: Hotel) => void;
}

const HotelList: React.FC<Props> = ({ hotels, onHotelClick }) => {
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
      {hotels.map(hotel => (
        <div key={hotel.id} className={styles.hotel_card} onClick={() => onHotelClick(hotel)}>
          <img src={hotel.imageUrl} alt={t(`hotels.${hotel.key}.name`)} />
          <h3>{t(`hotels.${hotel.key}.name`)}</h3>
          <p>{t("AllHotels.price")}: <span>${hotel.price}</span></p>
          <p>{t("AllHotels.rating")}: <span>{hotel.rating}</span></p>
          <p>{t("AllHotels.date")}: <span>{hotel.date}</span></p>
          {hotel.discount && <h4>{t("AllHotels.discount")}: {hotel.discount}%</h4>}
        </div>
      ))}
    </div>
  );
};

export default HotelList;
