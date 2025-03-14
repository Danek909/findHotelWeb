import React from 'react';
import '../Footer/Footer.css'
import { BsSendCheck } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = (props) => {
    let newPostElement = React.createRef();
    const { t, i18n } = useTranslation();

    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
    };
    return (
        <section className="SectionFooter" id="SectionContacts">
            <div className="DivFooterContainer">
                <div className="DivMinContaier">
                    <h2>{t("Footer.Title")}</h2>
                    <ul>
                        <li>
                            <a href="#">{t("Footer.subTitle")}</a>
                        </li>
                        <li>
                            <a href="#">{t("Footer.subTitle")}</a>
                        </li>
                        <li>
                            <a href="#">{t("Footer.subTitle")}</a>
                        </li>
                    </ul>
                </div>
                <div className="DivMinContaier">
                    <h2>{t("Footer.Title")}</h2>
                    <ul>
                        <li>
                            <a href="#">{t("Footer.subTitle")}</a>
                        </li>
                        <li>
                            <a href="#">{t("Footer.subTitle")}</a>
                        </li>
                        <li>
                            <a href="#">{t("Footer.subTitle")}</a>
                        </li>
                    </ul>
                </div>
                <div className="DivMinContaier">
                    <h2>{t("Footer.Title")}</h2>
                    <ul>
                        <li>
                            <a href="#">{t("Footer.subTitle")}</a>
                        </li>
                        <li>
                            <a href="#">{t("Footer.subTitle")}</a>
                        </li>
                        <li>
                            <a href="#">{t("Footer.subTitle")}</a>
                        </li>
                    </ul>
                </div>
                <div className="DivMinContaier_1">
                    <h2>{t("Footer.subTitle_3")}</h2>
                    <p>{t("Footer.subTitle_2")}</p>
                    <div>
                        <form>
                            <textarea></textarea>
                            <button><BsSendCheck /></button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="PoloskaBootom"><img src={`/findHotelWeb/image/Line.png`} alt="Delete" /></div>
            <div className="MinContainer">
                <div className="FooterMin">
                    <h1>Your.<span>logo</span></h1>
                    <p>{t("Footer.text")}<span>{t("Footer.text_span")}</span></p>
                    <div className="minDivFooter">
                        <a href="https://www.whatsapp.com/?lang=ru_RU"><img src={`/findHotelWeb/image/Phone_black.png`} alt="undefined" loading="lazy" /></a>
                        <a href="https://www.facebook.com/?locale=ru_RU"> <img src={`/findHotelWeb/image/facebook.png`} alt="undefined" loading="lazy" /></a>
                        <a href="https://www.youtube.com/?app=desktop&gl=UA&hl=uk"><img src={`/findHotelWeb/image/Youtube.png`} alt="undefined" loading="lazy" /></a>
                        <a href="https://www.instagram.com/"><img src={`/findHotelWeb/image/Instagram.png`} alt="undefined" loading="lazy" /></a>
                        <a href="https://web.telegram.org/"><img src={`/findHotelWeb/image/Telegram.png`} alt="undefined" loading="lazy" /></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;