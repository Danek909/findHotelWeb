import React from "react";
import styles from '../Choose/Choose.module.css'
import Choose1 from '../image/Choose1.png'
import Choose2 from '../image/Choose2.png'
import Choose3 from '../image/Choose3.png'
import Choose4 from '../image/Choose4.png'
const Choose = () => {
    return (
        <section className={styles.Choosesection}>
            <div className={styles.divContainer}>
                <div className={styles.ChooseTopText}>
                    <h2>Why Choose Us</h2>
                    <p>The main reason is because our competitors have <br />
                        disgusting sites, but we can' t write that here,<br />
                        so the text here will be different
                    </p>
                </div>

                    <div className={styles.divPidContainer}>
                        <div className={styles.divMiniContainer}>
                            <img src={Choose1} alt="delete" />
                            <h3>Payment methods</h3>
                            <p>We have a lot of them, <br/>
                                from cryptocurrencies to barter <br/>
                                for potatoes</p>
                        </div>

                        <div className={styles.divMiniContainer}>
                            <img src={Choose2} alt="delete" />
                            <h3>Simple search process</h3>
                            <p>We checked it out, even the kid<br/>
                                 did it, but it was my mom's<br/>
                                  friend's son</p>
                        </div>

                        <div className={styles.divMiniContainer}>
                            <img src={Choose3} alt="delete" />
                            <h3>24/7 Support</h3>
                            <p>Is there something you don't <br/>
                                understand? Feel free to call us. <br/>
                                Phone number in the footer</p>
                        </div>

                        <div className={styles.divMiniContainer}>
                            <img src={Choose4} alt="delete" />
                            <h3>We are nice</h3>
                            <p>Fantasy is over, <br/>
                                there will be something <br/>
                                really convincing here</p>
                        </div>
                    </div>

            </div>
        </section>
    )
}

export default Choose;