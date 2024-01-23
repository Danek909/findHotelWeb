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

const SectionHotel = () => {
    return (
        <section className={styles.SectionHotel}>
            <div className={styles.divSpecialofers}>
                <h2>Special offers</h2>
            </div>

            <div className={styles.divContainer}>
                <div className={styles.divPidContainer}>
                    <div className={styles.imgBlock}>
                        <img className={styles.imgSerze} src={IconSerze} alt="delete" />
                        <img className={styles.zirca} src={IconZirca} alt="delete" />
                        <img className={styles.hotelImg} src={Hotel1} alt="delete" />
                    </div>

                    <div className={styles.divtext}>
                        <h2>Wilderness Club at Big Ceddar</h2>
                        <h3>2 Bedroom Combined Lodge</h3>
                        <h4 >28 October — 1 November</h4>
                        <p>$2016 <span>/6 night</span></p>
                    </div>

                    <div className={styles.divTextContainer}>
                        <div>
                            <img src={pidHotel1} alt="deletet" />
                            <p>4 Beds</p>
                        </div>
                        <div>
                            <img src={pidHotel2} alt="deletet" />
                            <p>8 Sleeps</p>
                        </div>
                        <div>
                            <img src={pidHotel3} alt="deletet" />
                            <p>1,350 Sq Ft</p>
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
                    <h2>Wilderness Club at Big Ceddar</h2>
                        <h3>2 Bedroom Combined Lodge</h3>
                        <h4 >28 October — 1 November</h4>
                        <p>$2016 <span>/6 night</span></p>
                    </div>

                    <div className={styles.divTextContainer}>
                        <div>
                            <img src={pidHotel1} alt="deletet" />
                            <p>4 Beds</p>
                        </div>
                        <div>
                            <img src={pidHotel2} alt="deletet" />
                            <p>8 Sleeps</p>
                        </div>
                        <div>
                            <img src={pidHotel3} alt="deletet" />
                            <p>1,350 Sq Ft</p>
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
                    <h2>Wilderness Club at Big Ceddar</h2>
                        <h3>2 Bedroom Combined Lodge</h3>
                        <h4 >28 October — 1 November</h4>
                        <p>$2016 <span>/6 night</span></p>
                    </div>

                    <div className={styles.divTextContainer}>
                        <div>
                            <img src={pidHotel1} alt="deletet" />
                            <p>4 Beds</p>
                        </div>
                        <div>
                            <img src={pidHotel2} alt="deletet" />
                            <p>8 Sleeps</p>
                        </div>
                        <div>
                            <img src={pidHotel3} alt="deletet" />
                            <p>1,350 Sq Ft</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionHotel;