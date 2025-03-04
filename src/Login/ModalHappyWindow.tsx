import React from 'react';
import styles from '../Login/Login.module.css';
import { useCookies } from 'react-cookie';
import { useTranslation } from "react-i18next";

type UserType = {
    username: string;
    password: string;
};

type PropsType = {
    users: UserType[];
    openLoginModal?: () => void;
};

const ModalHappyWindow: React.FC<PropsType> = (props) => {
    const [cookies] = useCookies(['username', 'email']);
    const { t, i18n } = useTranslation();

    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
    };

    return (
        <section>
            <div className={styles.divModalWindow}>
                <p>{t('ModalHappyWindow.P_text')} {props.users[0].username} {t('ModalHappyWindow.P_text_happy')}</p>
                <div className={styles.AcauntMesage}>
                    <span>{t('ModalHappyWindow.span_text')} <h3 onClick={props.openLoginModal}> {t('ModalHappyWindow.button_Enter')}</h3> </span>
                </div>
                <img src={`/findHotelWeb/image/userPhoto.jpeg`} alt="delete" />
            </div>
        </section>
    )
}
export default ModalHappyWindow;