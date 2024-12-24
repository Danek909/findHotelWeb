import React from "react";
import styles from '../Banner/Banner.module.css'
import { useTranslation } from "react-i18next";

const Banner = () => {
    const { t, i18n } = useTranslation();
    const changeLanguage = (language: string) => {
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
                    <img src="../image/Banner.jpg" className={styles.banerPhoto} alt="delete" />
                    <img src="../image/Rectangle 5.jpg" className={styles.ImgZamina} alt="dele" />
                </div>

                <div className={styles.divPitBaner}>
                    <div>
                        <img src="../image/point.png" alt="delete" />
                        <p>{t('Banner.search.p_1')}
                            <br /><span>{t('Banner.search.span_1')}</span></p>
                    </div>

                    <div className={styles.divPoloska}><span ></span></div>

                    <div className={styles.divWhen}>
                        <img src="../image/calendar.png" alt="delete" />
                        <p>{t('Banner.search.p_2')}<br /><span>{t('Banner.search.span_2')}</span></p>
                    </div>

                    <div className={styles.imgSeartch}>
                        <img src="../image/sertch.png" alt="delete" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Banner;