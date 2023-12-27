import React, { useState } from "react";
import styles from '../Header/heder.module.css'
import dolalrs from '../image/dolars.png'
import language from '../image/language.jpg'
import userPhoto from '../image/userPhoto.png'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { GrLanguage } from "react-icons/gr";
import { PiCurrencyDollarBold } from "react-icons/pi";
import { FaSquarePhone } from "react-icons/fa6";
import { FaFacebook, FaYoutube, FaInstagramSquare, FaTelegram } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';




const Header = () => {

    const [nav, setNav] = useState(false)
    return (

        <heder className={styles.sectionHeder}>
            <div className={styles.heder}>
                <div className={styles.yourLogoHeder}>
                    <h1>Your.<span>logo</span></h1>
                    <ul className={nav ? [styles.menu, styles.active].join(' ') : [styles.menu]}>
                        <a href="#">Last Minute Deals</a>
                        <a href="#">Blog</a>
                        <a href="#">About us</a>
                        <a href="#">Contacts</a>

                        <div className={styles.btn_Menu}>
                            <GrLanguage size={25} />
                            <PiCurrencyDollarBold size={25} />
                        </div>
                        <div className={styles.meregi_Btn}>
                            <FaSquarePhone />
                            <FaFacebook />
                            <FaYoutube />
                            <FaInstagramSquare />
                            <FaTelegram />
                        </div>
                    </ul>
                </div>

                <div className={styles.imgHeder}>
                    <img src={dolalrs} className={styles.dolalrsHeder} alt="Delete" />
                    <img src={language} className={styles.languageHeder} alt="Delete" />

                    <NavLink to="/login" activeClassName="activeLink" >
                        <img src={userPhoto} alt="Delete" />
                    </NavLink>
                   
                </div>
                <div onClick={() => setNav(!nav)} className={styles.mobile_btn}>
                    {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
                </div>
            </div>
        </heder>
    )
}

export default Header;