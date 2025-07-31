import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../AboutUs/AboutUs.module.css';
import { useTranslation } from 'react-i18next';

const AboutUs = () => {

    const navigate = useNavigate();
    const { t } = useTranslation();

    return (
        <section className={styles.sectionAboutUs}>
            <div className={styles.divContent}>
                <div className={styles.divButton}>
                    <button className={styles.buttonClose} onClick={() => navigate('/')}>
                        {t('SelectedHotels.close')}
                    </button>
                </div>
                <div>
                    <h2 className={styles.textTitle}>{t('hotelAbout.title')}</h2>
                    <p className={styles.textParagraph1}>
                        {t('hotelAbout.paragraph1')}
                    </p>
                </div>
                <div className={styles.divImg}>
                    <img src={`/findHotelWeb/image/hotel_logo.jpg`} alt="delete" />
                </div>
                <div>
                    <p className={styles.textParagraph2}>
                        {t('hotelAbout.paragraph2')}
                    </p>
                </div>
                <footer className={styles.FooterContainer}>
                    <div className={styles.MinContainer}>
                        <div className={styles.FooterMin}>
                            <h1>Your.<span>logo</span></h1>
                            <p>{t("Footer.text")}<span>{t("Footer.text_span")}</span></p>
                            <div className={styles.minDivFooter}>
                                <a href="https://www.whatsapp.com/?lang=ru_RU"><img src={`/findHotelWeb/image/Phone_black.png`} alt="undefined" loading="lazy" /></a>
                                <a href="https://www.facebook.com/?locale=ru_RU"> <img src={`/findHotelWeb/image/facebook.png`} alt="undefined" loading="lazy" /></a>
                                <a href="https://www.youtube.com/?app=desktop&gl=UA&hl=uk"><img src={`/findHotelWeb/image/Youtube.png`} alt="undefined" loading="lazy" /></a>
                                <a href="https://www.instagram.com/"><img src={`/findHotelWeb/image/Instagram.png`} alt="undefined" loading="lazy" /></a>
                                <a href="https://web.telegram.org/"><img src={`/findHotelWeb/image/Telegram.png`} alt="undefined" loading="lazy" /></a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </section>
    )
}

export default AboutUs;