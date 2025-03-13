import React, { useEffect, useRef, useState } from "react";
import styles from '../SectionHotel/SectionHotel.module.css'
import { useTranslation } from "react-i18next";

interface SectionHotelProps {
    searchTerm: string;
}

const SectionHotel: React.FC<SectionHotelProps> = ({ searchTerm }) => {
    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
    };
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language || "uk";

    const roomNames: { [key: string]: { suite: string; deluxe: string; standard: string; } } = {
        en: {
            suite: "suite",
            deluxe: "deluxe",
            standard: "standard",
        },
        ua: {
            suite: "люкс",
            deluxe: "делюкс",
            standard: "стандарт",
        }
    };

    const currentRoomNames = roomNames[currentLanguage];

    // Рефи для кожного номеру
    const suiteRef = useRef<HTMLDivElement | null>(null);
    const deluxeRef = useRef<HTMLDivElement | null>(null);
    const standardRef = useRef<HTMLDivElement | null>(null);
    const hotelsRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const normalizedSearch = searchTerm.trim().toLowerCase(); // Нормалізація пошукового терміну

        // Якщо пошукове значення порожнє
        if (!searchTerm) {
            console.log("No search term entered.");
            return;
        }

        // Перевірка відповідності пошукового терміну для кожного типу номера
        const suiteMatch = currentRoomNames.suite.toLowerCase().includes(normalizedSearch);
        const deluxeMatch = currentRoomNames.deluxe.toLowerCase().includes(normalizedSearch);
        const standardMatch = currentRoomNames.standard.toLowerCase().includes(normalizedSearch);


        // Логіка пошуку і прокрутки
        if (suiteMatch && suiteRef.current) {
            suiteRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
        } else if (deluxeMatch && deluxeRef.current) {
            deluxeRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
        } else if (standardMatch && standardRef.current) {
            standardRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    }, [searchTerm, currentLanguage]);

    return (
        <section className={styles.SectionHotel} >
            <div className={styles.divSpecialofers}>
                <h2>{t('SectionHotel.title')}</h2>
            </div>

            <div className={styles.divContainer} id="SectionHotel">

                <div ref={suiteRef} className={styles.divPidContainer}>
                    <div className={styles.imgBlock}>
                        <img className={styles.imgSerze} src={`/findHotelWeb/image/iconSerze.png`} alt="delete" loading="lazy" />
                        <img className={styles.zirca} src={`/findHotelWeb/image/ivonZirca.png`} alt="delete" loading="lazy" />
                        <img className={styles.hotelImg} src={`/findHotelWeb/image/hotel1.webp`} alt="delete" loading="lazy" />
                    </div>
                    <div className={styles.divtext}>
                        <h2>{t('SectionHotel.Container_1.title_1')}</h2>
                        <h3>{t('SectionHotel.Container_1.subTitle')}</h3>
                        <h4 >{t('SectionHotel.Container_1.textData_1')}</h4>
                        <p>{t('SectionHotel.Container_1.text_2Data')}</p>
                    </div>

                    <div className={styles.divTextContainer}>
                        <div>
                            <img src={`/findHotelWeb/image/pidHotel1.png`} alt="deletet" loading="lazy" />
                            <p>{t('SectionHotel.Container_1.span_1')}</p>
                        </div>
                        <div>
                            <img src={`/findHotelWeb/image/pidHotel2.png`} alt="deletet" loading="lazy" />
                            <p>{t('SectionHotel.Container_1.span_2')}</p>
                        </div>
                        <div>
                            <img src={`/findHotelWeb/image/pidHotel3.png`} alt="deletet" loading="lazy" />
                            <p>{t('SectionHotel.Container_1.span_4')}</p>
                        </div>
                    </div>

                </div>


                <div ref={standardRef} className={styles.divPidContainer}>
                    <div className={styles.imgBlock}>
                        <img className={styles.imgSerze} src={`/findHotelWeb/image/iconSerze.png`} alt="delete" loading="lazy" />
                        <img className={styles.zirca} src={`/findHotelWeb/image/ivonZirca.png`} alt="delete" loading="lazy" />
                        <img className={styles.hotelImg} src={`/findHotelWeb/image/hotel2.webp`} alt="delete" loading="lazy" />
                    </div>

                    <div className={styles.divtext}>
                        <h2>{t('SectionHotel.Container_1.title_2')}</h2>
                        <h3>{t('SectionHotel.Container_1.subTitle_1')}</h3>
                        <h4 >{t('SectionHotel.Container_1.textData_2')}</h4>
                        <p>{t('SectionHotel.Container_1.text_3Data')} </p>
                    </div>

                    <div className={styles.divTextContainer}>
                        <div>
                            <img src={`/findHotelWeb/image/pidHotel1.png`} alt="deletet" loading="lazy" />
                            <p>{t('SectionHotel.Container_1.span_beds')}</p>
                        </div>
                        <div>
                            <img src={`/findHotelWeb/image/pidHotel2.png`} alt="deletet" loading="lazy" />
                            <p>{t('SectionHotel.Container_1.span_Sleeps')}</p>
                        </div>
                        <div>
                            <img src={`/findHotelWeb/image/pidHotel3.png`} alt="deletet" loading="lazy" />
                            <p>{t('SectionHotel.Container_1.span_3')}</p>
                        </div>
                    </div>

                </div>

                <div ref={deluxeRef} className={styles.divPidContainer}>
                    <div className={styles.imgBlock}>
                        <img className={styles.imgSerze} src={`/findHotelWeb/image/iconSerze.png`} alt="delete" loading="lazy" />
                        <img className={styles.zirca} src={`/findHotelWeb/image/ivonZirca.png`} alt="delete" loading="lazy" />
                        <img className={styles.hotelImg} src={`/findHotelWeb/image/hotel3.webp`} alt="delete" loading="lazy" />
                    </div>

                    <div className={styles.divtext}>
                        <h2>{t('SectionHotel.Container_1.title_3')}</h2>
                        <h3>{t('SectionHotel.Container_1.subTitle')}</h3>
                        <h4 >{t('SectionHotel.Container_1.textData_3')}</h4>
                        <p>{t('SectionHotel.Container_1.text_1Data')} </p>
                    </div>

                    <div className={styles.divTextContainer}>
                        <div>
                            <img src={`/findHotelWeb/image/pidHotel1.png`} alt="deletet" loading="lazy" />
                            <p>{t('SectionHotel.Container_1.span_1')}</p>
                        </div>
                        <div>
                            <img src={`/findHotelWeb/image/pidHotel2.png`} alt="deletet" loading="lazy" />
                            <p>{t('SectionHotel.Container_1.span_2')}</p>
                        </div>
                        <div>
                            <img src={`/findHotelWeb/image/pidHotel3.png`} alt="deletet" loading="lazy" />
                            <p>{t('SectionHotel.Container_1.span_5')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionHotel;