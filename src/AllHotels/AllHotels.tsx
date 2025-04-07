import React, { useEffect, useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import styles from "./AllHotels.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
interface Hotel {
  id: number;
  name: string;
  price: number;
  rating: number;
  date: string;
  imageUrl: string;
  discount?: number;
  description?: string;
  reviews?: string[];
}
const sliderSettings = {
  speed: 500,
  slidesToShow: 1,  // Показувати один слайд одночасно
  slidesToScroll: 1,
  arrows: true,
  prevArrow: false, // Приховати кнопку попереднього слайду
  nextArrow: false 
};

const AllHotels = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const [hotels, setHotels] = useState<Hotel[]>([
    { id: 1, name: "Hotel Paris", price: 200, rating: 4.5, date: "2025-03-20", imageUrl: "/findHotelWeb/image/ImgHotels_1.png", description: "Романтичний готель з видом на Ейфелеву вежу.", reviews: ["Неймовірний досвід! ⭐⭐⭐⭐⭐", "Привітний персонал і чистота. ⭐⭐⭐⭐", "Хороше розташування. ⭐⭐⭐⭐"] },
    { id: 2, name: "Hotel London", price: 150, rating: 4.0, date: "2025-03-19", imageUrl: "/findHotelWeb/image/ImgHotels_2.png", description: "Затишний готель у самому центрі Лондона.", reviews: ["Все добре, але шумно з вулиці. ⭐⭐⭐", "Дуже близько до метро. ⭐⭐⭐⭐", "Комфортно і зручно. ⭐⭐⭐⭐"] },
    { id: 3, name: "Hotel New York", price: 300, rating: 5.0, date: "2025-03-18", imageUrl: "/findHotelWeb/image/ImgHotels_3.png", discount: 10, description: "Розкішний готель у самому серці Манхеттена.", reviews: ["Просто вау! ⭐⭐⭐⭐⭐", "Обслуговування на найвищому рівні. ⭐⭐⭐⭐⭐", "Обожнюю це місце! ⭐⭐⭐⭐⭐"] },
    { id: 4, name: "Hotel Tokyo", price: 180, rating: 4.2, date: "2025-03-17", imageUrl: "/findHotelWeb/image/ImgHotels_4.png", description: "Сучасний готель зі зручним доступом до метро.", reviews: ["Дуже технологічно! ⭐⭐⭐⭐", "Смачна їжа, але кімнати трохи маленькі. ⭐⭐⭐⭐", "Чисто та зручно. ⭐⭐⭐⭐"] },
    { id: 5, name: "Hotel Sydney", price: 250, rating: 4.7, date: "2025-03-16", imageUrl: "/findHotelWeb/image/ImgHotels_5.png", description: "Готель з видом на гавань та Оперний театр.", reviews: ["Прекрасний вид! ⭐⭐⭐⭐⭐", "Затишно та просторо. ⭐⭐⭐⭐⭐", "Гарний сервіс. ⭐⭐⭐⭐"] },
    { id: 6, name: "Hotel Berlin", price: 220, rating: 4.3, date: "2025-03-15", imageUrl: "/findHotelWeb/image/ImgHotels_6.png", description: "Стильний готель біля історичних місць Берліна.", reviews: ["Зручно, але могло бути краще. ⭐⭐⭐", "Чистота на висоті. ⭐⭐⭐⭐", "Гарний сніданок. ⭐⭐⭐⭐"] },
    { id: 7, name: "Hotel Rome", price: 280, rating: 4.6, date: "2025-03-14", imageUrl: "/findHotelWeb/image/ImgHotels_7.png", discount: 15, description: "Історичний готель поруч з Колізеєм.", reviews: ["Атмосфера просто неймовірна. ⭐⭐⭐⭐⭐", "Відмінне обслуговування. ⭐⭐⭐⭐", "Хочу повернутись. ⭐⭐⭐⭐"] },
    { id: 8, name: "Hotel Los Angeles", price: 350, rating: 4.8, date: "2025-03-13", imageUrl: "/findHotelWeb/image/ImgHotels_8.png", description: "Сучасний готель з басейном на даху.", reviews: ["Нереальний краєвид! ⭐⭐⭐⭐⭐", "Дуже зручно та просторо. ⭐⭐⭐⭐⭐", "Все супер. ⭐⭐⭐⭐"] },
    { id: 9, name: "Hotel Barcelona", price: 200, rating: 4.0, date: "2025-03-12", imageUrl: "/findHotelWeb/image/ImgHotels_9.png", discount: 20, description: "Готель у стилі Гауді в самому центрі міста.", reviews: ["Атмосфера затишна. ⭐⭐⭐⭐", "Трохи шумно вночі. ⭐⭐⭐", "Чудовий персонал. ⭐⭐⭐⭐"] },
    { id: 10, name: "Hotel Miami", price: 270, rating: 4.4, date: "2025-03-11", imageUrl: "/findHotelWeb/image/ImgHotels_10.png", description: "Курортний готель на березі океану.", reviews: ["Супер пляж! ⭐⭐⭐⭐⭐", "Чисто і комфортно. ⭐⭐⭐⭐", "Відпочинок вдався. ⭐⭐⭐⭐"] },
    { id: 11, name: "Hotel Zurich", price: 290, rating: 4.9, date: "2025-03-10", imageUrl: "/findHotelWeb/image/ImgHotels_11.png", description: "Преміум готель з видом на озеро.", reviews: ["Все на найвищому рівні! ⭐⭐⭐⭐⭐", "Надзвичайно комфортно. ⭐⭐⭐⭐⭐", "Бездоганно. ⭐⭐⭐⭐⭐"] },
    { id: 12, name: "Hotel Bukovel", price: 370, rating: 5.0, date: "2025-04-10", imageUrl: "/findHotelWeb/image/ImgHotels_12.png", description: "Гірський готель з чудовими трасами для лиж.", reviews: ["Казковий відпочинок! ⭐⭐⭐⭐⭐", "Природа і сервіс – топ. ⭐⭐⭐⭐⭐", "Ідеально для зими. ⭐⭐⭐⭐⭐"] },
  ]);

  const [priceOrder, setPriceOrder] = useState<string>("ascending");
  const [ratingOrder, setRatingOrder] = useState<string>("descending");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [showDiscounted, setShowDiscounted] = useState<boolean>(false);

  const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(null);

  const applyFilters = () => {
    setPriceOrder(priceOrder);
    setRatingOrder(ratingOrder);
    setSearchTerm(searchTerm);
    setShowDiscounted(showDiscounted);
  };

  const filteredHotels = useMemo(() => {
    return hotels
      .filter((hotel) => {
        const matchesSearchTerm = hotel.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesDiscount = showDiscounted ? hotel.discount !== undefined : true;
        return matchesSearchTerm && matchesDiscount;
      })
      .sort((a, b) => {
        // First, apply price sorting
        if (priceOrder === "ascending") {
          if (a.price !== b.price) return a.price - b.price;
        } else if (priceOrder === "descending") {
          if (a.price !== b.price) return b.price - a.price;
        }

        // Then, apply rating sorting
        if (ratingOrder === "ascending") return a.rating - b.rating;
        if (ratingOrder === "descending") return b.rating - a.rating;

        return 0; // Default fallback
      });
  }, [hotels, priceOrder, ratingOrder, searchTerm, showDiscounted]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Показувати один слайд одночасно
    slidesToScroll: 1,
    arrows: true,  // Додає стрілки для навігації
  };


  return (
    <section className={styles.HotelsSection}>
      <button className={styles.buttonClose} onClick={() => navigate("/")}>Закрити</button>
      <div className={styles.content}>
        <h1 className={styles.textH1}> {t('AllHotels.text_4')}</h1>

        <div className="filter">
          <input type="text" placeholder="Пошук за назвою" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>

        <div className="sort-filters">
          <div>
            <label>Сортувати за ціною:</label>
            <select onChange={(e) => setPriceOrder(e.target.value)} value={priceOrder}>
              <option value="ascending">Від найнижчої до найвищої</option>
              <option value="descending">Від найвищої до найнижчої</option>
            </select>
          </div>

          <div>
            <label>Сортувати за рейтингом:</label>
            <select onChange={(e) => setRatingOrder(e.target.value)} value={ratingOrder}>
              <option value="ascending">Від найнижчого до найвищого</option>
              <option value="descending">Від найвищого до найнижчого</option>
            </select>
          </div>

          <div>
            <label>Показати акційні готелі:</label>
            <input type="checkbox" checked={showDiscounted} onChange={() => setShowDiscounted(!showDiscounted)} />
          </div>

          <button className={styles.applyFiltersButton} onClick={applyFilters}>Застосувати фільтри</button>
        </div>

        <div className={styles.hotel_list}>
          {filteredHotels.map((hotel) => (
            <div key={hotel.id} className="hotel-card" onClick={() => setSelectedHotel(hotel)}>
              <img src={hotel.imageUrl} alt={hotel.name} />
              <h3>{hotel.name}</h3>
              <p>Ціна: ${hotel.price}</p>
              <p>Рейтинг: {hotel.rating}</p>
              <p>Дата: {hotel.date}</p>
              {hotel.discount && <p>Знижка: {hotel.discount}%</p>}
            </div>
          ))}
        </div>
      </div>

      {selectedHotel && (
        <div className={styles.modalOverlay} onClick={() => setSelectedHotel(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <Slider {...sliderSettings} >
              {[1, 2, 3].map((num) => (
                <img
                  key={num}
                  src={`/findHotelWeb/image/${selectedHotel.name.replace(/\s/g, '')}_${num}.jpg`}
                  alt={`Фото ${num}`}
                  className={styles.sliderImage}
                />
              ))}
            </Slider>
            <div className={styles.hotelInfo}>
              <h2>{selectedHotel.name}</h2>
              <p>Короткий опис: {selectedHotel.description}</p>
              <p>Ціна: ${selectedHotel.price}</p>
              <p>Рейтинг: {selectedHotel.rating}</p>
              {selectedHotel.discount && <p>Знижка: {selectedHotel.discount}%</p>}
            </div>

            <div className={styles.reviews}>
              <h3>Відгуки:</h3>
              <ul>
                {selectedHotel.reviews?.map((review, index) => (
                  <li key={index}>{review}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AllHotels;
