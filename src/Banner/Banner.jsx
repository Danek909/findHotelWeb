import React from "react";
import styles from '../Banner/Banner.module.css'
import bannerPhoto from '../image/Banner.jpg'
import point from '../image/point.png'
import calendar from '../image/calendar.png'
import sertch from '../image/sertch.png'
import Rectalge from '../image/Rectangle 5.jpg'

const Banner = () => {
    return (
        <section className={styles.BannerSection}>
            <div className={styles.divContainerBanner}>
                <div className={styles.divTextbaner}>
                    <h2>Find an apartment <br />
                        for your vacation</h2>
                    <p>We have several thousand apartments<br />
                        for every taste in every corner of the globe</p>
                </div>

                <div className={styles.divBanerPhoto}>
                    <img src={bannerPhoto} className={styles.banerPhoto} alt="delete" />
                    <img src={Rectalge} className={styles.ImgZamina} alt="dele" />
                </div>

                <div className={styles.divPitBaner}>
                    <div>
                        <img src={point} alt="delete" />
                        <p>Where
                            <br /><span>Search Destination</span></p>
                    </div>

                    <div className={styles.divPoloska}><span ></span></div>

                    <div className={styles.divWhen}>
                        <img src={calendar} alt="delete" />
                        <p>When<br /><span>Select Date</span></p>
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