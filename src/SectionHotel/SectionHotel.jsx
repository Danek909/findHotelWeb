import React from "react";
import styles from '../SectionHotel/SectionHotel.module.css'
import Hotel1 from '../image/hotel1.png'
import Hotel2 from '../image/hotel2.png'
import Hotel3 from '../image/hotel3.png'
import IconSerze from '../image/iconSerze.png'
import IconZirca from '../image/ivonZirca.png'
import pidHotel1 from '../image/pidHotel1.png'
import pidHotel2 from '../image/pidHotel2.png'
import pidHotel3 from '../image/pidHotel3.png'
import { useTranslation } from "react-i18next";

const SectionHotel = () => {
    const changeLanguage = (language) => {
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
                        <img className={styles.imgSerze} src={IconSerze} alt="delete" />
                        <img className={styles.zirca} src={IconZirca} alt="delete" />
                        <img className={styles.hotelImg} src={Hotel1} alt="delete" />
                    </div>

                    <div className={styles.divtext}>
                        <h2>{t('SectionHotel.Container_1.title')}</h2>
                        <h3>{t('SectionHotel.Container_1.subTitle')}</h3>
                        <h4 >{t('SectionHotel.Container_1.textData')}</h4>
                        <p>{t('SectionHotel.Container_1.text_1Data')} <span>{t('SectionHotel.Container_1.text_2Data')}</span></p>
                    </div>

                    <div className={styles.divTextContainer}>
                        <div>
                            <img src={pidHotel1} alt="deletet" />
                            <p>{t('SectionHotel.Container_1.span_1')}</p>
                        </div>
                        <div>
                            <img src={pidHotel2} alt="deletet" />
                            <p>{t('SectionHotel.Container_1.span_2')}</p>
                        </div>
                        <div>
                            <img src={pidHotel3} alt="deletet" />
                            <p>{t('SectionHotel.Container_1.span_3')}</p>
                        </div>
                    </div>

                </div>


                <div className={styles.divPidContainer}>
                    <div className={styles.imgBlock}>
                        <img className={styles.imgSerze} src={IconSerze} alt="delete" />
                        <img className={styles.zirca} src={IconZirca} alt="delete" />
                        <img className={styles.hotelImg} src={Hotel2} alt="delete" />
                    </div>

                    <div className={styles.divtext}>
                    <h2>{t('SectionHotel.Container_1.title')}</h2>
                        <h3>{t('SectionHotel.Container_1.subTitle')}</h3>
                        <h4 >{t('SectionHotel.Container_1.textData')}</h4>
                        <p>{t('SectionHotel.Container_1.text_1Data')} <span>{t('SectionHotel.Container_1.text_2Data')}</span></p>
                    </div>

                    <div className={styles.divTextContainer}>
                    <div>
                            <img src={pidHotel1} alt="deletet" />
                            <p>{t('SectionHotel.Container_1.span_1')}</p>
                        </div>
                        <div>
                            <img src={pidHotel2} alt="deletet" />
                            <p>{t('SectionHotel.Container_1.span_2')}</p>
                        </div>
                        <div>
                            <img src={pidHotel3} alt="deletet" />
                            <p>{t('SectionHotel.Container_1.span_3')}</p>
                        </div>
                    </div>

                </div>

                <div className={styles.divPidContainer}>
                    <div className={styles.imgBlock}>
                        <img className={styles.imgSerze} src={IconSerze} alt="delete" />
                        <img className={styles.zirca} src={IconZirca} alt="delete" />
                        <img className={styles.hotelImg} src={Hotel3} alt="delete" />
                    </div>

                    <div className={styles.divtext}>
                    <h2>{t('SectionHotel.Container_1.title')}</h2>
                        <h3>{t('SectionHotel.Container_1.subTitle')}</h3>
                        <h4 >{t('SectionHotel.Container_1.textData')}</h4>
                        <p>{t('SectionHotel.Container_1.text_1Data')} <span>{t('SectionHotel.Container_1.text_2Data')}</span></p>
                    </div>

                    <div className={styles.divTextContainer}>
                    <div>
                            <img src={pidHotel1} alt="deletet" />
                            <p>{t('SectionHotel.Container_1.span_1')}</p>
                        </div>
                        <div>
                            <img src={pidHotel2} alt="deletet" />
                            <p>{t('SectionHotel.Container_1.span_2')}</p>
                        </div>
                        <div>
                            <img src={pidHotel3} alt="deletet" />
                            <p>{t('SectionHotel.Container_1.span_3')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionHotel;