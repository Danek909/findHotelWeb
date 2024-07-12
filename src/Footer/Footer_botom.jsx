import React from "react";
import '../Footer/Footer.css'
import { BsSendCheck } from "react-icons/bs";
import Line from '../image/Line.png'
import { MdPhoneInTalk } from "react-icons/md";
import { FaYoutube, FaFacebook, FaInstagramSquare, FaTelegram } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = (props) => {
    let newPostElement = React.createRef();

    let addPost = (props) => {
        let text = newPostElement.current.value;
        props.addPost(text)
    }
       const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
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
                        <textarea ref={newPostElement}></textarea>
                        <button onClick={addPost}><BsSendCheck /></button>
                    </form>
                </div>


            </div>

            <div className="PoloskaBootom"><img src={Line} alt="Delete" /></div>

            <div className="MinContainer">
                <div className="FooterMin">
                    <h1>Your.<span>logo</span></h1>
                    <p>{t("Footer.text")}<span>{t("Footer.text_span")}</span></p>
                    <div className="minDivFooter">
                        <MdPhoneInTalk />
                        <a href="https://uk-ua.facebook.com/">
                            <FaFacebook />
                        </a>
                        <FaYoutube />
                        <FaInstagramSquare />
                        <FaTelegram />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;