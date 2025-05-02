import React from "react";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import styles from "./AllHotels.module.css";
import { Hotel } from "./AllHotels";

interface Props {
  hotel: Hotel;
  onClose: () => void;
}

const HotelModal: React.FC<Props> = ({ hotel, onClose }) => {
  const { t } = useTranslation();

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <Slider {...sliderSettings}>
          {[1, 2, 3].map((num) => (
            <img
              key={num}
              src={`/findHotelWeb/image/Hotel${hotel.key.charAt(0).toUpperCase() + hotel.key.slice(1)}_${num}.jpg`}
              alt={`Photo ${num}`}
              className={styles.sliderImage}
            />
          ))}
        </Slider>
        <div className={styles.hotelInfo}>
          <h2>{t(`hotels.${hotel.key}.name`)}</h2>
          <li>{t(`hotels.${hotel.key}.description`)}</li>
          <p>{t("AllHotels.price")}: <span>${hotel.price}</span></p>
          <p>{t("AllHotels.rating")}: <span>{hotel.rating}</span></p>
          {hotel.discount && <h3>{t("AllHotels.discount")}: {hotel.discount}%</h3>}
        </div>

        <div className={styles.reviews}>
          <h3>{t("AllHotels.reviews")}:</h3>
          <ul className={styles.reviewsUl}>
            {(t(`hotels.${hotel.key}.reviews`, { returnObjects: true }) as string[]).map((review, index) => (
              <li key={index}>{review}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HotelModal;
