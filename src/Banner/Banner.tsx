// Banner.tsx
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Banner.module.css';
import MapModal from './Maps';
import SearchInput from './Search';

interface BannerProps {
  onSearch: (searchTerm: string) => void;
}

const Banner: React.FC<BannerProps> = ({ onSearch }) => {
  const { t, i18n } = useTranslation();
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [inputValue, setInputValue] = useState(""); // Для введеного тексту
  const [notFound, setNotFound] = useState(false); // Для відображення повідомлення, якщо нічого не знайдено

  const [currentRoomNames, setCurrentRoomNames] = useState<{ suite: string; deluxe: string; standard: string; } | null>(null);

  // Назви номерів для кожної мови
  const roomNames: { [key: string]: { suite: string; deluxe: string; standard: string; } } = {
    en: {
      suite: "suite",
      deluxe: "deluxe",
      standard: "standard",
    },
    ua: {  // Змінив uk на ua
      suite: "люкс",
      deluxe: "делюкс",
      standard: "стандарт",
    }
  };

  useEffect(() => {
    const language = i18n.language || "ua";
    setCurrentRoomNames(roomNames[language]);
  }, [i18n.language]); // Оновлюємо при зміні мови

  const openMap = () => setIsMapOpen(true);
  const closeMap = () => setIsMapOpen(false);

  const handleSearch = () => {
    const normalizedSearch = inputValue.trim().toLowerCase(); // Нормалізація пошукового запиту

    // Якщо currentRoomNames не визначено
    if (!currentRoomNames) {
      return;
    }

    // Якщо пошукове значення порожнє
    if (normalizedSearch === "") {
      setNotFound(false);
      return;
    }

    // Перевірка, чи входить введений запит у назви номерів
    const found = Object.values(currentRoomNames).some((roomName) =>
      roomName.toLowerCase().includes(normalizedSearch)
    );
    if (!found) {
      setNotFound(true); // Якщо нічого не знайдено
    } else {
      setNotFound(false); // Якщо знайдено
      onSearch(inputValue); // Передаємо пошуковий запит в батьківську компоненту
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <section className={styles.BannerSection}>
      <div className={styles.divContainerBanner}>
        <div className={styles.divTextbaner}>
          <h2>{t('Banner.h2')}<br />
            {t('Banner.h2_span')}
          </h2>
          <p>{t('Banner.p')}<br />
            {t('Banner.p_span')}
          </p>
        </div>

        <div className={styles.divBanerPhoto}>
          <img src={`/findHotelWeb/image/Banner.webp`} className={styles.banerPhoto} alt="banner" />
          <img src={`/findHotelWeb/image/Rectangle.webp`} className={styles.ImgZamina} alt="img" />
        </div>

        <div className={styles.divPitBaner}>
          <div className={styles.block_left}>
            <img onClick={openMap} src={`/findHotelWeb/image/point.png`} alt="open map" />
            <p>{t('Banner.search.p_1')}<br /><span>{t('Banner.search.span_1')}</span></p>
          </div>

          <MapModal isOpen={isMapOpen} onClose={closeMap} />

          <div className={styles.divPoloska}><span></span></div>
          <div className={styles.divWhen}>
            <SearchInput
              inputValue={inputValue}
              setInputValue={setInputValue}
              handleSearch={handleSearch}
              handleKeyPress={handleKeyPress}
              notFound={notFound}
              t={t}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;