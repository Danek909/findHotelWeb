import React, { useState, useContext } from "react";
import styles from '../Header/heder.module.css';
import dolalrs from '../image/dolars.png';
import language from '../image/language.jpg';
import userPhoto from '../image/userPhoto.png';
import avatarka from '../image/Avatarka.jpg';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { GrLanguage } from "react-icons/gr";
import { PiCurrencyDollarBold } from "react-icons/pi";
import { FaSquarePhone } from "react-icons/fa6";
import { FaFacebook, FaYoutube, FaInstagramSquare, FaTelegram } from "react-icons/fa";
import { ConfigProvider, Modal } from 'antd';
import RegistrationForm from "../Login/RegistrationForm";
import { cookies, useCookies } from 'react-cookie';
import { Select } from 'antd';
import { useTranslation } from "react-i18next";


const Header = (props) => {
    const [nav, setNav] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);
    const [cookies, setCookie, removeCookie] = useCookies(['userData']);
    const [userData, setUserData] = useState(cookies.userData);
    const { t, i18n } = useTranslation();


    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };

    const exitLogin = () => {
        const cookieUserData = cookies.userData;
        cookieUserData.isLogined = 'noAutorized';
        setCookie("userData", cookieUserData);
        console.log(cookieUserData, "userData Heder");
    }

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <header className={styles.sectionHeder}>
            <div className={styles.heder}>
                <div className={styles.yourLogoHeder}>
                    <h1>Your.<span>logo</span></h1>
                    <ul className={nav ? [styles.menu, styles.active].join(' ') : [styles.menu]}>
                        <a href="#">{t('header.navBar.text_1')}</a>
                        <a href="#">{t('header.navBar.text_2')}</a>
                        <a href="#">{t('header.navBar.text_3')}</a>
                        <a href="#">{t('header.navBar.text_4')}</a>

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
                    <Select
                        suffixIcon=""
                        defaultValue="English"
                        style={{
                            width: 60,
                            height: 20,
                            marginTop: 45,
                            marginLeft: 5,
                            marginRight: 10
                        }}
                        options={[
                            { label: <button className={styles.Language_En} onClick={() => { changeLanguage("en") }}>En</button>, value: 'English' },
                            { label: <button className={styles.Language_En}  onClick={() => { changeLanguage("ua") }}>Ua</button>, value: 'Ukrainian' },
                        ]} />
                    <div className={styles.autorizedDiv}>
                        {cookies.userData.isLogined === 'autorized' ? (
                            <button type="button" onClick={openModal}>
                                <img className={styles.PhotoUser} src={avatarka} alt="delete" />
                            </button>
                        ) : (
                            <button type="button" onClick={openModal}>
                                <img className={styles.userPhoto} src={userPhoto} alt="Delete" />
                            </button>
                        )}

                        <Select
                            defaultValue={userData.username}
                            // defaultValue={userData.username ? (
                            //     <span className="user-ribbon">{userData.username}</span>
                            //   ) : (
                            //     <span className="empty-ribbon"></span>
                            //   )}
                            style={{
                                width: 90,
                                height: 20,
                            }}
                            options={[
                                { label: <button className={styles.buttonExit} type="button" onClick={exitLogin}>{t('header.navBar.log out')}</button>, value: 'English' },
                            ]} />
                    </div>

                    <ConfigProvider theme={{
                        token: {
                            colorBgMask: 'black',
                        },
                    }}>
                        <Modal open={isModalOpen} onCancel={closeModal} maskClosable={true} footer={null}>
                            <RegistrationForm closeModal={closeModal} />
                        </Modal>
                    </ConfigProvider>
                </div>
                <div onClick={() => setNav(!nav)} className={styles.mobile_btn}>
                    {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
                </div>
            </div>
        </header>
    )
}

export default Header;