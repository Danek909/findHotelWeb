import React from "react";
import '../Footer/Footer.css'
import { BsSendCheck } from "react-icons/bs";
import { MdPhoneInTalk } from "react-icons/md";
import { FaYoutube, FaFacebook, FaInstagramSquare, FaTelegram } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer: React.FC = (props) => {
    let newPostElement = React.createRef();
    const { t, i18n } = useTranslation();

    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
    };
    return (
        <section className="SectionFooter">

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

                <div className="DivMinContaier">
                    <h3>{t("Footer.title_2")}</h3>
                    <p>{t("Footer.subTitle_2")}</p>
                    <form>
                        <textarea></textarea>
                        <button><BsSendCheck /></button>
                    </form>
                </div>


            </div>

            <div className="PoloskaBootom"><img src="../image/Line.png" alt="Delete" /></div>

            <div className="MinContainer">
                <div className="FooterMin">
                    <h1>Your.<span>logo</span></h1>
                    <p>{t("Footer.text")}<span>{t("Footer.text_span")}</span></p>
                    <div className="minDivFooter">
                        <img src="../image/Phone_black.png" alt="undefined" rel="preload" />
                        <img src="../image/Facebook.png" alt="undefined" rel="preload" />
                        <img src="../image/Youtube.png" alt="undefined" rel="preload" />
                        <img src="../image/Instagram.png" alt="undefined" rel="preload" />
                        <img src="../image/Telegram.png" alt="undefined" rel="preload" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;