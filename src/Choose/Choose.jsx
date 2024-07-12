import React from "react";
import styles from '../Choose/Choose.module.css'
import Choose1 from '../image/Choose1.png'
import Choose2 from '../image/Choose2.png'
import Choose3 from '../image/Choose3.png'
import Choose4 from '../image/Choose4.png'
import { useTranslation } from "react-i18next";
const Choose = () => {

    const { t, i18n } = useTranslation();
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <section className={styles.Choosesection}>
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
                        <img src={Choose1} alt="delete" />
                        <h3>{t('Choose.Container_1.title_Photo_1')}</h3>
                        <p>{t('Choose.Container_1.subtitle_1_Photo_1')}<br />
                            {t('Choose.Container_1.subtitle_1_Photo_2')} <br />
                            {t('Choose.Container_1.subtitle_1_Photo_3')}</p>
                    </div>

                    <div className={styles.divMiniContainer}>
                        <img src={Choose2} alt="delete" />
                        <h3>{t('Choose.Container_2.title_Photo_2')}</h3>
                        <p>{t('Choose.Container_2.subtitle_2_Photo_1')}<br />
                            {t('Choose.Container_2.subtitle_2_Photo_2')} <br />
                            {t('Choose.Container_2.subtitle_2_Photo_3')}</p>
                    </div>

                    <div className={styles.divMiniContainer}>
                        <img src={Choose3} alt="delete" />
                        <h3>{t('Choose.Container_3.title_Photo_3')}</h3>
                        <p>{t('Choose.Container_3.subtitle_3_Photo_1')}<br />
                            {t('Choose.Container_3.subtitle_3_Photo_2')} <br />
                            {t('Choose.Container_3.subtitle_3_Photo_3')}</p>
                    </div>

                    <div className={styles.divMiniContainer}>
                        <img src={Choose4} alt="delete" />
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