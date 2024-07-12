import React from "react";
import styles from '../Banner/Banner.module.css'
import bannerPhoto from '../image/Banner.jpg'
import point from '../image/point.png'
import calendar from '../image/calendar.png'
import sertch from '../image/sertch.png'
import Rectalge from '../image/Rectangle 5.jpg'
import { useTranslation } from "react-i18next";

const Banner = () => {
    const { t, i18n } = useTranslation();
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };
    return (
        <section className={styles.BannerSection}>
            <div className={styles.divContainerBanner}>
                <div className={styles.divTextbaner}>
                    <h2>{t('Banner.h2')}<br/>
                        {t('Banner.h2_span')}
                    </h2>
                    <p>{t('Banner.p')}<br/>
                        {t('Banner.p_span')}
                    </p>
                </div>

                <div className={styles.divBanerPhoto}>
                    <img src={bannerPhoto} className={styles.banerPhoto} alt="delete" />
                    <img src={Rectalge} className={styles.ImgZamina} alt="dele" />
                </div>

                <div className={styles.divPitBaner}>
                    <div>
                        <img src={point} alt="delete" />
                        <p>{t('Banner.search.p_1')}
                            <br /><span>{t('Banner.search.span_1')}</span></p>
                    </div>

                    <div className={styles.divPoloska}><span ></span></div>

                    <div className={styles.divWhen}>
                        <img src={calendar} alt="delete" />
                        <p>{t('Banner.search.p_2')}<br /><span>{t('Banner.search.span_2')}</span></p>
                    </div>

                    <div className={styles.imgSeartch}>
                        <img src={sertch} alt="delete" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Banner;