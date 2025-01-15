import React from "react";
import styles from '../Reviews/Reviews.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useTranslation } from "react-i18next";

const Reviews: React.FC = () => {
    const { t, i18n } = useTranslation();
    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
    };
    return (
        <section className={styles.ReviewsSection}>
            <div>
                <h2 className={styles.Reviews}>{t("Reviews.Title")}</h2>
            </div>
            <div className={styles.divContainerSRew}>
                <Swiper modules={[Pagination, Scrollbar, A11y]}
                    spaceBetween={100}
                    slidesPerView={1}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },

                    }}

                    className={styles.Swiper} >

                    <div className={styles.SwiperContainer} >
                        <SwiperSlide>
                            <div className={styles.SwiperSlide}>
                                <img src="../image/Ellipse1.png" alt="delete" rel="preload" />
                                <h3>
                                    {t("Reviews.text_1")}<br />
                                    {t("Reviews.text_2")}<br />
                                    {t("Reviews.text_3")}<br />
                                    {t("Reviews.text_4")}<br />
                                    {t("Reviews.text_5")}<br />
                                    {t("Reviews.text_6")}<br />
                                    {t("Reviews.text_7")}<br />
                                    <span>{t("Reviews.span_Name_1")}</span> {t("Reviews.span_Name_2")}
                                </h3>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className={styles.SwiperSliders}>
                            <div className={styles.SwiperSlide}>
                                <img src="../image/Ellipse2.png" alt="delete" rel="preload" />
                                <h3>
                                    {t("Reviews.text_1")}<br />
                                    {t("Reviews.text_2")}<br />
                                    {t("Reviews.text_3")}<br />
                                    {t("Reviews.text_4")}<br />
                                    {t("Reviews.text_5")}<br />
                                    {t("Reviews.text_6")}<br />
                                    {t("Reviews.text_7")}<br />
                                    <span>{t("Reviews.span_Name_1")}</span> {t("Reviews.span_Name_2")}
                                </h3>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className={styles.SwiperSliders}>
                            <div className={styles.SwiperSlide}>
                                <img src="../image/Ellipse3.png" alt="delete" rel="preload" />
                                <h3>
                                    {t("Reviews.text_1")}<br />
                                    {t("Reviews.text_2")}<br />
                                    {t("Reviews.text_3")}<br />
                                    {t("Reviews.text_4")}<br />
                                    {t("Reviews.text_5")}<br />
                                    {t("Reviews.text_6")}<br />
                                    {t("Reviews.text_7")}<br />
                                    <span>{t("Reviews.span_Name_1")}</span> {t("Reviews.span_Name_2")}
                                </h3>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className={styles.SwiperSliders}>
                            <div className={styles.SwiperSlide}>
                                <img src="../image/Ellipse1.png" alt="delete" rel="preload" />
                                <h3>
                                    {t("Reviews.text_1")}<br />
                                    {t("Reviews.text_2")}<br />
                                    {t("Reviews.text_3")}<br />
                                    {t("Reviews.text_4")}<br />
                                    {t("Reviews.text_5")}<br />
                                    {t("Reviews.text_6")}<br />
                                    {t("Reviews.text_7")}<br />
                                    <span>{t("Reviews.span_Name_1")}</span> {t("Reviews.span_Name_2")}
                                </h3>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className={styles.SwiperSliders}>
                            <div className={styles.SwiperSlide}>
                                <img src="../image/Ellipse2.png" alt="delete" rel="preload" />
                                <h3>
                                    {t("Reviews.text_1")}<br />
                                    {t("Reviews.text_2")}<br />
                                    {t("Reviews.text_3")}<br />
                                    {t("Reviews.text_4")}<br />
                                    {t("Reviews.text_5")}<br />
                                    {t("Reviews.text_6")}<br />
                                    {t("Reviews.text_7")}<br />
                                    <span>{t("Reviews.span_Name_1")}</span> {t("Reviews.span_Name_2")}
                                </h3>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className={styles.SwiperSliders}>
                            <div className={styles.SwiperSlide}>
                                <img src="../image/Ellipse3.png" alt="delete" rel="preload" />
                                <h3>
                                    {t("Reviews.text_1")}<br />
                                    {t("Reviews.text_2")}<br />
                                    {t("Reviews.text_3")}<br />
                                    {t("Reviews.text_4")}<br />
                                    {t("Reviews.text_5")}<br />
                                    {t("Reviews.text_6")}<br />
                                    {t("Reviews.text_7")}<br />
                                    <span>{t("Reviews.span_Name_1")}</span> {t("Reviews.span_Name_2")}
                                </h3>
                            </div>
                        </SwiperSlide>
                    </div>
                </Swiper>
            </div>

        </section>
    )
}

export default Reviews;