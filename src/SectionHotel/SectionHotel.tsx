import React from "react";
import styles from '../SectionHotel/SectionHotel.module.css'
import { useTranslation } from "react-i18next";

const SectionHotel: React.FC = () => {
    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
    };
    const { t, i18n } = useTranslation();

    return (
        <section className={styles.SectionHotel}>
            <div className={styles.divSpecialofers}>
                <h2>{t('SectionHotel.title')}</h2>
            </div>

            <div className={styles.divContainer}>
                <div className={styles.divPidContainer}>
                    <div className={styles.imgBlock}>
                        <img className={styles.imgSerze} src={`/findHotelWeb/image/iconSerze.png`} alt="delete" loading="lazy" />
                        <img className={styles.zirca} src={`/findHotelWeb/image/ivonZirca.png`} alt="delete" loading="lazy" />
                        <img className={styles.hotelImg} src={`/findHotelWeb/image/hotel1.webp`} alt="delete" loading="lazy" />
                    </div>

                    <div className={styles.divtext}>
                        <h2>{t('SectionHotel.Container_1.title')}</h2>
                        <h3>{t('SectionHotel.Container_1.subTitle')}</h3>
                        <h4 >{t('SectionHotel.Container_1.textData')}</h4>
                        <p>{t('SectionHotel.Container_1.text_1Data')} <span>{t('SectionHotel.Container_1.text_2Data')}</span></p>
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
                            <p>{t('SectionHotel.Container_1.span_3')}</p>
                        </div>
                    </div>

                </div>


                <div className={styles.divPidContainer}>
                    <div className={styles.imgBlock}>
                        <img className={styles.imgSerze} src={`/findHotelWeb/image/iconSerze.png`} alt="delete" loading="lazy" />
                        <img className={styles.zirca} src={`/findHotelWeb/image/ivonZirca.png`} alt="delete" loading="lazy" />
                        <img className={styles.hotelImg} src={`/findHotelWeb/image/hotel2.webp`} alt="delete" loading="lazy" />
                    </div>

                    <div className={styles.divtext}>
                        <h2>{t('SectionHotel.Container_1.title')}</h2>
                        <h3>{t('SectionHotel.Container_1.subTitle')}</h3>
                        <h4 >{t('SectionHotel.Container_1.textData')}</h4>
                        <p>{t('SectionHotel.Container_1.text_1Data')} <span>{t('SectionHotel.Container_1.text_2Data')}</span></p>
                    </div>

                    <div className={styles.divTextContainer}>
                        <div>
                            <img src={`/findHotelWeb/image/pidHotel1.png`} alt="deletet" loading="lazy" />
                            <p>{t('SectionHotel.Container_1.span_1')}</p>
                        </div>
                        <div>
                            <img src={`/findHotelWeb/image/pidHotel2.png`}alt="deletet" loading="lazy" />
                            <p>{t('SectionHotel.Container_1.span_2')}</p>
                        </div>
                        <div>
                            <img src={`/findHotelWeb/image/pidHotel3.png`} alt="deletet" loading="lazy" />
                            <p>{t('SectionHotel.Container_1.span_3')}</p>
                        </div>
                    </div>

                </div>

                <div className={styles.divPidContainer}>
                    <div className={styles.imgBlock}>
                        <img className={styles.imgSerze} src={`/findHotelWeb/image/iconSerze.png`} alt="delete" loading="lazy" />
                        <img className={styles.zirca} src={`/findHotelWeb/image/ivonZirca.png`} alt="delete" loading="lazy" />
                        <img className={styles.hotelImg} src={`/findHotelWeb/image/hotel3.webp`} alt="delete" loading="lazy" />
                    </div>

                    <div className={styles.divtext}>
                        <h2>{t('SectionHotel.Container_1.title')}</h2>
                        <h3>{t('SectionHotel.Container_1.subTitle')}</h3>
                        <h4 >{t('SectionHotel.Container_1.textData')}</h4>
                        <p>{t('SectionHotel.Container_1.text_1Data')} <span>{t('SectionHotel.Container_1.text_2Data')}</span></p>
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
                            <p>{t('SectionHotel.Container_1.span_3')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionHotel;