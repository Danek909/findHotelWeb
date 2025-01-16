import React, { useState, useContext, SetStateAction } from "react";
import styles from '../Header/heder.module.css';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { GrLanguage } from "react-icons/gr";
import { PiCurrencyDollarBold } from "react-icons/pi";
import { FaSquarePhone } from "react-icons/fa6";
import { FaFacebook, FaYoutube, FaInstagramSquare, FaTelegram } from "react-icons/fa";
import { ConfigProvider, Modal } from 'antd';
import RegistrationForm from "../Login/RegistrationForm";
import { useCookies } from 'react-cookie';
import { Select } from 'antd';
import { useTranslation } from "react-i18next";

const Header = (props: void) => {

    const [nav, setNav] = useState<SetStateAction<boolean>>(false);
    const [isModalOpen, setModalOpen] = useState<boolean | undefined>(false);
    const [cookie, setCookie, removeCookie] = useCookies(['userData']);
    const [userData, setUserData] = useState(cookie.userData);
    const { t, i18n } = useTranslation();

    const openModal = (): void => {
        setModalOpen(true);
    };
    const closeModal = (): void => {
        setModalOpen(false);
    };

    const exitLogin = (): void => {
        const cookieUserData = cookie.userData;
        cookieUserData.isLogined = 'noAutorized';
        setCookie("userData", cookieUserData);
    }

    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
    };
    
    return (
        <header className={styles.sectionHeder}>
            <div className={styles.heder}>
                <div className={styles.yourLogoHeder}>
                    <h1>Your.<span>logo</span></h1>
                    <ul className={nav ? [styles.menu, styles.active].join(' ') : styles.menu}>
                        <a href="#">{t('header.navBar.text_1')}</a>
                        <a href="#">{t('header.navBar.text_2')}</a>
                        <a href="#">{t('header.navBar.text_3')}</a>
                        <a href="#">{t('header.navBar.text_4')}</a>

                        <div className={styles.btn_Menu}>
                            <GrLanguage size={25} />
                            <PiCurrencyDollarBold size={25} />
                        </div>
                        <div className={styles.meregi_Btn}>
                            <img src="../image/Phone_black.png" alt="undefined"  rel="preload"/>
                            <img src="../image/Facebook.png" alt="undefined"  rel="preload"/>
                            <img src="../image/Youtube.png" alt="undefined"  rel="preload"/>
                            <img src="../image/Instagram.png" alt="undefined"  rel="preload"/>
                            <img src="../image/Telegram.png" alt="undefined"  rel="preload"/>
                        </div>
                    </ul>
                </div>
                <div className={styles.imgHeder}>
                    <img src="../image/dolars.png" className={styles.dolalrsHeder} alt="Delete" rel="preload" />
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
                            { label: <button className={styles.Language_En} onClick={() => { changeLanguage("ua") }}>Ua</button>, value: 'Ukrainian' },
                        ]} />
                    <div className={styles.autorizedDiv}>
                        {cookie?.userData?.isLogined === 'authorized' ? (
                            <button type="button" onClick={openModal}>
                                <img className={styles.PhotoUser} src="../image/userPhoto.jpeg" alt="User Photo" />
                            </button>
                        ) : (
                            <button type="button" onClick={openModal}>
                                <img className={styles.userPhoto} src="../image/GuestPhoto.jpg" alt="Guest Photo" />
                            </button>
                        )}

                        <Select
                            defaultValue={userData?.username ? userData?.username : "Exit"}
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
                            <RegistrationForm closeModal={closeModal} password={""} PasswordConfirmation={""} username={""} email={""} phoneNumber={""} />
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