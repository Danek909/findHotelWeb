import React, { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import styles from "./AllHotels.module.css";
import HotelFilters from "./HotelFilters";
import HotelList from "./HotelList";
import HotelModal from "./HotelModal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export interface Hotel {
  id: number;
  key: string;
  price: number;
  rating: number;
  date: string;
  imageUrl: string;
  discount?: number;
}

const AllHotels = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [hotels, setHotels] = useState<Hotel[]>([
    { id: 1, key: "paris", price: 200, rating: 4.5, date: "2025-03-20", imageUrl: "/findHotelWeb/image/ImgHotels_1.png" },
    { id: 2, key: "london", price: 150, rating: 4.0, date: "2025-03-19", imageUrl: "/findHotelWeb/image/ImgHotels_2.png" },
    { id: 3, key: "newYork", price: 300, rating: 5.0, date: "2025-03-18", imageUrl: "/findHotelWeb/image/ImgHotels_3.png", discount: 10 },
    { id: 4, key: "tokyo", price: 180, rating: 4.1, date: "2025-03-17", imageUrl: "/findHotelWeb/image/ImgHotels_4.png" },
    { id: 5, key: "sydney", price: 250, rating: 4.7, date: "2025-03-16", imageUrl: "/findHotelWeb/image/ImgHotels_5.png" },
    { id: 6, key: "berlin", price: 220, rating: 4.3, date: "2025-03-15", imageUrl: "/findHotelWeb/image/ImgHotels_6.png" },
    { id: 7, key: "rome", price: 280, rating: 4.6, date: "2025-03-14", imageUrl: "/findHotelWeb/image/ImgHotels_7.png", discount: 15 },
    { id: 8, key: "losAngeles", price: 350, rating: 4.8, date: "2025-03-13", imageUrl: "/findHotelWeb/image/ImgHotels_8.png" },
    { id: 9, key: "barcelona", price: 200, rating: 4.0, date: "2025-03-12", imageUrl: "/findHotelWeb/image/ImgHotels_9.png", discount: 20 },
    { id: 10, key: "miami", price: 270, rating: 4.4, date: "2025-03-11", imageUrl: "/findHotelWeb/image/ImgHotels_10.png" },
    { id: 11, key: "zurich", price: 290, rating: 4.9, date: "2025-03-10", imageUrl: "/findHotelWeb/image/ImgHotels_11.png" },
    { id: 12, key: "bukovel", price: 370, rating: 5.0, date: "2025-04-10", imageUrl: "/findHotelWeb/image/ImgHotels_12.png" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [showDiscounted, setShowDiscounted] = useState(false);
  const [sortBy, setSortBy] = useState("none");
  const [sortOrder, setSortOrder] = useState("ascending");
  const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    setHotels(prev => [...prev].sort(() => Math.random() - 0.5));
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const filteredHotels = useMemo(() => {
    let result = [...hotels];
    result = result.filter(hotel => {
      const matchesSearch = t(`hotels.${hotel.key}.name`).toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDiscount = showDiscounted ? hotel.discount !== undefined : true;
      return matchesSearch && matchesDiscount;
    });

    if (sortBy !== "none") {
      result.sort((a, b) => {
        let valueA = 0, valueB = 0;
        switch (sortBy) {
          case "price": valueA = a.price; valueB = b.price; break;
          case "rating": valueA = a.rating; valueB = b.rating; break;
          case "discount": valueA = a.discount ?? 0; valueB = b.discount ?? 0; break;
          case "date": valueA = new Date(a.date).getTime(); valueB = new Date(b.date).getTime(); break;
        }
        return sortOrder === "ascending" ? valueA - valueB : valueB - valueA;
      });
    }

    return result;
  }, [hotels, searchTerm, showDiscounted, sortBy, sortOrder, t]);

  return (
    <section className={styles.HotelsSection}>
      <div className={styles.content}>
        <div className={styles.divButton}>
          <button className={styles.buttonClose} onClick={() => navigate("/")}>
            {t("AllHotels.text_button")}
          </button>
        </div>
        <h1 className={styles.textH1}>{t("AllHotels.text_4")}</h1>

        <HotelFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          showDiscounted={showDiscounted}
          setShowDiscounted={setShowDiscounted}
          sortBy={sortBy}
          setSortBy={setSortBy}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          resetFilters={() => {
            setSearchTerm("");
            setSortBy("none");
            setSortOrder("ascending");
            setShowDiscounted(false);
          }}
        />

        <HotelList hotels={filteredHotels} onHotelClick={setSelectedHotel} />

        {selectedHotel && (
          <HotelModal hotel={selectedHotel} onClose={() => setSelectedHotel(null)} />
        )}
      </div>
    </section>
  );
};

export default AllHotels;
