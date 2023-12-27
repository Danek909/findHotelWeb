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

const Reviews = () => {
    return (
        <section className={styles.ReviewsSection}>
            <div>
                <h2 className={styles.Reviews}>Reviews</h2>
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
                                    I quickly found the right tour for me,<br />
                                    but I had a few questions about the<br />
                                    hotel, I wrote to tech support and they<br />
                                    answered all my questions within an<br />
                                    hour. The vacation itself was perfect.<br />
                                    Thank you very much. I will come back<br />
                                    again and again.<br />
                                    <span>Jannike Borg,</span> Publisher
                                </h3>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className={styles.SwiperSliders}>
                            <div className={styles.SwiperSlide}>
                                <img src={Ellipse2} alt="delete" />
                                <h3>
                                    I quickly found the right tour for me,<br />
                                    but I had a few questions about the<br />
                                    hotel, I wrote to tech support and they<br />
                                    answered all my questions within an<br />
                                    hour. The vacation itself was perfect.<br />
                                    Thank you very much. I will come back<br />
                                    again and again.<br />
                                    <span>Jannike Borg,</span> Publisher
                                </h3>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className={styles.SwiperSliders}>
                            <div className={styles.SwiperSlide}>
                                <img src={Ellipse3} alt="delete" />
                                <h3>
                                    I quickly found the right tour for me,<br />
                                    but I had a few questions about the<br />
                                    hotel, I wrote to tech support and they<br />
                                    answered all my questions within an<br />
                                    hour. The vacation itself was perfect.<br />
                                    Thank you very much. I will come back<br />
                                    again and again.<br />
                                    <span>Jannike Borg,</span> Publisher
                                </h3>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className={styles.SwiperSliders}>
                            <div className={styles.SwiperSlide}>
                                <img src={Ellipse1} alt="delete" />
                                <h3>
                                    I quickly found the right tour for me,<br />
                                    but I had a few questions about the<br />
                                    hotel, I wrote to tech support and they<br />
                                    answered all my questions within an<br />
                                    hour. The vacation itself was perfect.<br />
                                    Thank you very much. I will come back<br />
                                    again and again.<br />
                                    <span>Jannike Borg,</span> Publisher
                                </h3>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className={styles.SwiperSliders}>
                            <div className={styles.SwiperSlide}>
                                <img src={Ellipse2} alt="delete" />
                                <h3>
                                    I quickly found the right tour for me,<br />
                                    but I had a few questions about the<br />
                                    hotel, I wrote to tech support and they<br />
                                    answered all my questions within an<br />
                                    hour. The vacation itself was perfect.<br />
                                    Thank you very much. I will come back<br />
                                    again and again.<br />
                                    <span>Jannike Borg,</span> Publisher
                                </h3>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className={styles.SwiperSliders}>
                            <div className={styles.SwiperSlide}>
                                <img src={Ellipse3} alt="delete" />
                                <h3>
                                    I quickly found the right tour for me,<br />
                                    but I had a few questions about the<br />
                                    hotel, I wrote to tech support and they<br />
                                    answered all my questions within an<br />
                                    hour. The vacation itself was perfect.<br />
                                    Thank you very much. I will come back<br />
                                    again and again.<br />
                                    <span>Jannike Borg,</span> Publisher
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