import React from "react";
import styles from '../Reviews/Reviews.module.css'
import Ellipse1 from '../image/Ellipse1.png'
import Ellipse2 from '../image/Ellipse2.png'
import Ellipse3 from '../image/Ellipse3.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import icons from '../image/arrow.png'
import { useTranslation } from "react-i18next";

const Reviews = () => {
      const { t, i18n } = useTranslation();
      const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };
    return (
        <section className={styles.ReviewsSection}>
            <div>
                <h2 className={styles.Reviews}>{t("Reviews.Title")}</h2>
            </div>
            <div className={styles.btnTop}>
                <span className={styles.spanTopBtn}>
                </span>
            </div>
            <div className={styles.divContainerSRew}>
                <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={100}
                    slidesPerView={1}
                    navigation

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

                        <SwiperSlide className={styles.SwiperSliders}>
                            <div className={styles.SwiperSlide}>
                                <img src={Ellipse1} alt="delete" />
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
                                <img src={Ellipse2} alt="delete" />
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
                                <img src={Ellipse3} alt="delete" />
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
                                <img src={Ellipse1} alt="delete" />
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
                                <img src={Ellipse2} alt="delete" />
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
                                <img src={Ellipse3} alt="delete" />
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
            <div className={styles.btnBottom}>
                <img src={icons} alt="delete" />
            </div>
        </section>
    )
}

export default Reviews;