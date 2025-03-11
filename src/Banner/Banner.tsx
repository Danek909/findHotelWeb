import React, { useEffect, useRef, useState } from 'react';
import styles from '../Banner/Banner.module.css'
import { useTranslation } from 'react-i18next';

interface SearchProps {
    onSearch: (searchTerm: string) => void;
}


const Banner: React.FC<SearchProps> = ({ onSearch }) => {
    const { t, i18n } = useTranslation();
    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
    };
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
        const language = i18n.language || "uk"; // Поточна мова
        console.log('Current language in useEffect:', language); // Перевірка мови на кожен рендер
        setCurrentRoomNames(roomNames[language]);
    }, [i18n.language]); // Оновлюємо при зміні мови

    const handleSearch = () => {
        const normalizedSearch = inputValue.trim().toLowerCase(); // Нормалізація пошукового запиту

        console.log("Search term:", normalizedSearch); // Вивести пошуковий термін для відлагодження
        console.log("Current room names:", currentRoomNames); // Вивести поточні назви номерів для перевірки

        // Якщо currentRoomNames не визначено
        if (!currentRoomNames) {
            console.log("No room names available for the current language.");
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

        console.log("Found:", found); // Перевірити, чи знайдений номер

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
                <div className={styles.divTextbaner} >
                    <h2>{t('Banner.h2')}<br />
                        {t('Banner.h2_span')}
                    </h2>
                    <p>{t('Banner.p')}<br />
                        {t('Banner.p_span')}
                    </p>
                </div>

                <div className={styles.divBanerPhoto}>
                    <img src={`/findHotelWeb//image/Banner.webp`} className={styles.banerPhoto} alt="delete" decoding="async" loading="eager" />
                    <img src={`/findHotelWeb/image/Rectangle.webp`} className={styles.ImgZamina} alt="delete" decoding="async" loading="lazy" />
                </div>

                <div className={styles.divPitBaner}>
                    <div className={styles.block_left}>
                        <img src={`/findHotelWeb/image/point.png`} alt="delete" loading="lazy" />
                        <p>{t('Banner.search.p_1')}
                            <br /><span>{t('Banner.search.span_1')}</span></p>
                    </div>

                    <div className={styles.divPoloska}><span ></span></div>
                    <div className={styles.divWhen}>
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)} // Оновлення значення inputValue
                            onKeyDown={handleKeyPress} // Обробка Enter для пошуку
                            placeholder={t('Banner.search.text')}
                            className={styles.hover_input}
                        />
                        {notFound && <span>{t('Banner.search.span_text')}</span>}
                    </div>
                    <div className={styles.imgSeartch}>
                        <img src={`/findHotelWeb/image/sertch.png`} alt="delete" loading="lazy" onClick={handleSearch} />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Banner;