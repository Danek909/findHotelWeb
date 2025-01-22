import React from 'react';
import styles from '../Banner/Banner.module.css'
import { useTranslation } from 'react-i18next';

const Banner = () => {
    const { t, i18n } = useTranslation();
    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
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
                    <img src="../image/Banner.jpg" className={styles.banerPhoto} alt="delete"  decoding="async" loading="eager" style={{maxWidth: "1180px", width:"100%", height: "auto%" }}/>
                    <img src="../image/Rectangle.jpg" className={styles.ImgZamina} alt="delete" decoding="async" loading="lazy"/>
                </div>

                <div className={styles.divPitBaner}>
                    <div>
                        <img src="../image/point.png" alt="delete" loading="lazy" />
                        <p>{t('Banner.search.p_1')}
                            <br /><span>{t('Banner.search.span_1')}</span></p>
                    </div>

                    <div className={styles.divPoloska}><span ></span></div>

                    <div className={styles.divWhen}>
                        <img src="../image/calendar.png" alt="delete" loading="lazy" />
                        <p>{t('Banner.search.p_2')}<br /><span>{t('Banner.search.span_2')}</span></p>
                    </div>

                    <div className={styles.imgSeartch}>
                        <img src="../image/sertch.png" alt="delete" loading="lazy" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Banner;