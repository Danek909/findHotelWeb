import React from 'react';
import styles from '../Choose/Choose.module.css'
import { useTranslation } from 'react-i18next';

const Choose: React.FC = () => {
    const { t, i18n } = useTranslation();
    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
    };

    return (
        <section className={styles.Choosesection} id="SectionChoose">
            <div className={styles.divContainer}>
                <div className={styles.ChooseTopText}>
                    <h2>{t('Choose.Title_Choose')}</h2>
                    <p>{t('Choose.subtitle_1')} <br />
                        {t('Choose.subtitle_2')}<br />
                        {t('Choose.subtitle_3')}
                    </p>
                </div>

                <div className={styles.divPidContainer}>
                    <div className={styles.divMiniContainer}>
                        <img src={`/findHotelWeb/image/Choose1.webp`} alt="delete" loading="lazy" />
                        <h3>{t('Choose.Container_1.title_Photo_1')}</h3>
                        <p>{t('Choose.Container_1.subtitle_1_Photo_1')}<br />
                            {t('Choose.Container_1.subtitle_1_Photo_2')} <br />
                            {t('Choose.Container_1.subtitle_1_Photo_3')}</p>
                    </div>

                    <div className={styles.divMiniContainer}>
                        <img src={`/findHotelWeb/image/Choose2.webp`} alt="delete" loading="lazy" />
                        <h3>{t('Choose.Container_2.title_Photo_2')}</h3>
                        <p>{t('Choose.Container_2.subtitle_2_Photo_1')}<br />
                            {t('Choose.Container_2.subtitle_2_Photo_2')} <br />
                            {t('Choose.Container_2.subtitle_2_Photo_3')}</p>
                    </div>

                    <div className={styles.divMiniContainer}>
                        <img src={`/findHotelWeb/image/Choose3.webp`} alt="delete" loading="lazy" />
                        <h3>{t('Choose.Container_3.title_Photo_3')}</h3>
                        <p>{t('Choose.Container_3.subtitle_3_Photo_1')}<br />
                            {t('Choose.Container_3.subtitle_3_Photo_2')} <br />
                            {t('Choose.Container_3.subtitle_3_Photo_3')}</p>
                    </div>

                    <div className={styles.divMiniContainer}>
                        <img src={`/findHotelWeb/image/Choose4.webp`} alt="delete" loading="lazy" />
                        <h3>{t('Choose.Container_4.title_Photo_4')}</h3>
                        <p>{t('Choose.Container_4.subtitle_4_Photo_1')}<br />
                            {t('Choose.Container_4.subtitle_4_Photo_2')} <br />
                            {t('Choose.Container_4.subtitle_4_Photo_3')}</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Choose;